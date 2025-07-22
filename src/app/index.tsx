import HomeList from '@/src/components/homelist/HomeList'
import { useCallback, useEffect, useState } from 'react'
import { useSQLiteContext } from 'expo-sqlite'
import { dbReadProjects, Project } from '@/src/db/projects'
import { SafeAreaView, Text, View } from '@/src/components/Themed'
import ReadableError from '@/src/errors/ReadableError'
import { useTranslation } from 'react-i18next'
import { Platform } from 'react-native'
import EmptyHomeList from '@/src/components/homelist/EmptyHomeList'
import LoadingHomeListRow from '@/src/components/homelist/LoadingHomeListRow'
import HomeListSeparator from '@/src/components/homelist/HomeListSeparator'
import { fontSize, fontWeight, margin } from '@/src/constants/Styles'
import * as Haptics from 'expo-haptics'
import BorderlessButton from '@/src/components/BorderlessButton'

export type HomeScreenProps = {}

// Quickfix.
// This is an approximated value. Got by trial & error on iPhone 15.
// We need this specific padding to account for the space beneath the largeTitle navigation bar on iOS.
// Note: On iPad Pro 13 inch this padding is slightly excessive but doesn't negatively impact the design.
const safeAreaPaddingTop = Platform.OS === 'ios' ? 150 : 0

export default function HomeScreen({}: HomeScreenProps) {
  const { t } = useTranslation()
  const db = useSQLiteContext()
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [refreshing, setRefreshing] = useState(false)

  const loadProjects = useCallback(async () => {
    setIsLoading(true)
    setErrorMessage(null)

    try {
      const projects = await dbReadProjects(db)
      setProjects(projects)

      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    } catch (err) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)

      if (err instanceof ReadableError) {
        setErrorMessage(err.userMessage)
      } else {
        setErrorMessage(t('Error: Projects could not be loaded.'))
      }
    } finally {
      setIsLoading(false)
    }
  }, [db, t])

  const refresh = async () => {
    setRefreshing(true)
    await loadProjects()
    setRefreshing(false)
  }

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  // 1) error
  // 2) loading
  // 3) loaded projects
  // 4) empty projects (pull out of HomeList)

  if (errorMessage) {
    return (
      // todo add a illustration
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{ fontWeight: fontWeight.semibold, fontSize: fontSize.lg }}
        >
          {t('Error')}
        </Text>
        <Text style={{ marginTop: margin['3'] }}>{errorMessage}</Text>
        <BorderlessButton onPress={loadProjects}>{t('Retry')}</BorderlessButton>
        {/*  TODO add dev contact */}
      </View>
    )
  }

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingTop: safeAreaPaddingTop }}
        edges={['bottom']}
      >
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
        <HomeListSeparator />
        <LoadingHomeListRow />
      </SafeAreaView>
    )
  }

  if (projects.length > 0)
    return (
      <HomeList data={projects} onRefresh={refresh} refreshing={refreshing} />
    )

  // Don't use ListEmptyComponent={EmptyHomeList} bc there are weird layout issues. F.e. both children with flex: 1 won't be the same height.
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: safeAreaPaddingTop }}
      edges={['bottom']}
    >
      <EmptyHomeList />
    </SafeAreaView>
  )
}
