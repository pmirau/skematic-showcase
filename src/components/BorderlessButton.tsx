import {
  Text,
  BorderlessButton as BorderlessButtonThemed,
  BorderlessButtonProps as BorderlessButtonPropsThemed,
} from '@/src/components/Themed'
import {
  color,
  fontSize,
  fontWeight,
  margin,
  padding,
} from '@/src/constants/Styles'
import { StyleSheet } from 'react-native'
import { NotificationFeedbackType } from 'expo-haptics'

export type BorderlessButtonProps = BorderlessButtonPropsThemed & {
  haptics?: NotificationFeedbackType
  children?: string
}

export default function BorderlessButton(props: BorderlessButtonProps) {
  const { style, children, ...rest } = props

  return (
    <BorderlessButtonThemed
      style={[styles.button, style]}
      borderless={false}
      {...rest}
    >
      <Text style={styles.buttonText} darkStyle={styles.buttonTextDark}>
        {children}
      </Text>
    </BorderlessButtonThemed>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: margin['5'],
    paddingVertical: padding['3'],
    paddingHorizontal: padding['4'],
    borderRadius: 40,
  },
  buttonText: {
    fontSize: fontSize.base,
    color: color.light.blue.normal,
    fontWeight: fontWeight.semibold,
  },
  buttonTextDark: {
    color: color.dark.blue.normal,
  },
})
