import { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { StyleSheet } from 'react-native'
import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
  Text,
} from '@/src/components/Themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '@/src/constants/Styles'

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
          <Text style={styles.text} darkStyle={styles.textDark}>
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
            Awesome 🎉 Awesome 🎉 Awesome 🎉 Awesome 🎉
          </Text>
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
