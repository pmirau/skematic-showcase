/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, useColorScheme } from 'react-native'
import {
  RectButton as DefaultRectButton,
  RectButtonProps as DefaultRectButtonProps,
  BorderlessButton as DefaultBorderlessButton,
  BorderlessButtonProps as DefaultBorderlessButtonProps,
} from 'react-native-gesture-handler'
import { color } from '@/constants/Styles'

type ThemedTextProps = {
  lightStyle?: DefaultText['props']['style']
  darkStyle?: DefaultText['props']['style']
}

type ThemedViewProps = {
  lightStyle?: DefaultView['props']['style']
  darkStyle?: DefaultView['props']['style']
}

type ThemedRectButtonProps = {
  lightStyle?: DefaultRectButtonProps['style']
  darkStyle?: DefaultRectButtonProps['style']
  underlayColorDark?: DefaultRectButtonProps['underlayColor']
}

type ThemedBorderlessButtonProps = {
  lightStyle?: DefaultBorderlessButtonProps['style']
  darkStyle?: DefaultBorderlessButtonProps['style']
  rippleColorDark?: DefaultBorderlessButtonProps['rippleColor']
}

export type TextProps = ThemedTextProps & DefaultText['props']
export type ViewProps = ThemedViewProps & DefaultView['props']
export type RectButtonProps = ThemedRectButtonProps & DefaultRectButtonProps
export type BorderlessButtonProps = ThemedBorderlessButtonProps & DefaultBorderlessButtonProps

export function Text(props: TextProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return <DefaultText style={[style, schemedStyle]} {...otherProps} />
}

export function View(props: ViewProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return <DefaultView style={[style, schemedStyle]} {...otherProps} />
}

export function RectButton(props: RectButtonProps) {
  const { style, lightStyle, darkStyle, underlayColorDark, underlayColor, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle
  const schemedUnderlayColor = theme === 'light' ? underlayColor : underlayColorDark

  return (
    <DefaultRectButton
      style={[style, schemedStyle]}
      underlayColor={schemedUnderlayColor}
      {...otherProps}
    />
  )
}

export function BorderlessButton(props: BorderlessButtonProps) {
  const {
    style,
    lightStyle,
    darkStyle,
    rippleColor,
    rippleColorDark = color.black['600'],
    ...otherProps
  } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle
  const schemedRippleColor = theme === 'light' ? rippleColor : rippleColorDark

  return (
    <DefaultBorderlessButton
      style={[style, schemedStyle]}
      rippleColor={schemedRippleColor}
      {...otherProps}
    />
  )
}
