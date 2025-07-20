import HomeList from '@/src/components/homelist/HomeList'
import { useCallback, useEffect, useState } from 'react'
import { useSQLiteContext } from 'expo-sqlite'
import { dbReadProjects, Project } from '@/src/db/projects'
import { Text, View } from '@/src/components/Themed'
import ReadableError from '@/src/errors/ReadableError'
import { useTranslation } from 'react-i18next'
import { BorderlessButton } from 'react-native-gesture-handler'

export type HomeScreenProps = {}

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
    } catch (err) {
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

  // todo this is temporary make it more beautiful in the next commit
  if (errorMessage) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{t('Error')}</Text>
        <Text>{errorMessage}</Text>
        <BorderlessButton onPress={loadProjects}>
          <Text>{t('Retry')}</Text>
        </BorderlessButton>
        {/*  TODO add dev contact */}
      </View>
    )
  }

  // TODO I will use this loading text first and put the skeleton in the next commit
  if (isLoading) return <Text style={{ marginTop: 200 }}>Loading...</Text>

  if (projects.length > 0)
    return (
      <HomeList data={projects} onRefresh={refresh} refreshing={refreshing} />
    )

  // todo the empty projects out of homelist in the next commit
  return <HomeList data={[]} />
}
