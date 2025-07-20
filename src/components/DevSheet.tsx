import { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { StyleSheet } from 'react-native'
import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
  Text,
  BorderlessButton,
} from '@/src/components/Themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color, fontSize, margin, padding } from '@/src/constants/Styles'

import { useSQLiteContext } from 'expo-sqlite'
import { dbCreateProject } from '@/src/db/projects'
import { faker } from '@faker-js/faker/locale/de'
import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'
import ReadableError from '@/src/errors/ReadableError'

export type DevSheetProps = {
  ref: BottomSheetModalProps['ref']
}

// Shadows on Android barely noticeable. Known issue see https://github.com/gorhom/react-native-bottom-sheet/issues/1026
// xTODO Bleeds onto bottom ios bar
// let shadowStyle: BottomSheetModalProps['style'] = {
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
//   // elevation: 5,
// }
//
// if (Platform.OS === 'android') {
//   shadowStyle = {
//     borderWidth: 0,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 1,
//     shadowRadius: 3.84,
//     elevation: 15,
//   }
// }

export default function DevSheet({ ref }: DevSheetProps) {
  const db = useSQLiteContext()
  const { t } = useTranslation()

  const createProject = async () => {
    try {
      const fullName = faker.person.fullName()
      const city = faker.location.city()

      await dbCreateProject(db, fullName, city)

      Toast.show({
        text1: t(`Created Project for {{name}}`, { name: fullName }),
      })
    } catch (e) {
      Toast.show({
        type: 'error',
        text1:
          e instanceof ReadableError
            ? e.userMessage
            : t('Error: Project was not created.'),
      })
    }
  }

  return (
    <BottomSheetModal
      ref={ref}
      // style={shadowStyle}
      backgroundStyle={styles.modalBackground}
      darkBackgroundStyle={styles.modalBackgroundDark}
      darkHandleIndicatorStyle={{ backgroundColor: color.black['400'] }}
      index={0}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
    >
      <BottomSheetView style={styles.contentContainer}>
        <SafeAreaView edges={['bottom']}>
          <BorderlessButton
            onPress={createProject}
            borderless={false}
            activeOpacity={0.5}
            style={{
              marginTop: margin['5'],
              marginBottom: margin['5'],
              paddingVertical: padding['3'],
              paddingHorizontal: padding['4'],
              borderRadius: 40,
            }}
          >
            <Text style={{ fontSize: fontSize.base }}>
              {t('Create Project')}
            </Text>
          </BorderlessButton>
        </SafeAreaView>
      </BottomSheetView>
    </BottomSheetModal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: color.light.background.normal,
  },
  modalBackgroundDark: { backgroundColor: color.dark.background.light },
  text: {
    color: color.light.text.normal,
  },
  textDark: {
    color: color.dark.text.normal,
  },
})
