import { BaseToast, ErrorToast, ToastConfig } from 'react-native-toast-message'
import { color, fontSize, fontWeight, padding } from '@/src/constants/Styles'

/*
 1. Create the config
 */
export const toastConfig: ToastConfig = {
  /*
   Overwrite 'success' type,
   by modifying the existing `BaseToast` component
   */
  success: (props) => (
    <BaseToast
      {...props}
      // TODO Darkmode
      style={{ borderLeftColor: color.green['500'] }}
      contentContainerStyle={{
        paddingHorizontal: padding['4'],
        paddingVertical: padding['5'],
      }}
      text1Style={{
        fontSize: fontSize.base,
        fontWeight: fontWeight.semibold,
      }}
      text2Style={{
        fontSize: fontSize.sm,
        fontWeight: fontWeight.normal,
      }}
    />
  ),
  /*
   Overwrite 'error' type,
   by modifying the existing `ErrorToast` component
   */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: color.red['500'] }}
      contentContainerStyle={{
        paddingHorizontal: padding['4'],
        paddingVertical: padding['5'],
      }}
      text1Style={{
        fontSize: fontSize.base,
        fontWeight: fontWeight.semibold,
      }}
      text2Style={{
        fontSize: fontSize.sm,
        fontWeight: fontWeight.normal,
      }}
    />
  ),
}
