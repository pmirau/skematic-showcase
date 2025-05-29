/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, useColorScheme } from 'react-native'
import {
  RectButton as DefaultRectButton,
  RectButtonProps as DefaultRectButtonProps,
} from 'react-native-gesture-handler'

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

export type TextProps = ThemedTextProps & DefaultText['props']
export type ViewProps = ThemedViewProps & DefaultView['props']
export type RectButtonProps = ThemedRectButtonProps & DefaultRectButtonProps

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
