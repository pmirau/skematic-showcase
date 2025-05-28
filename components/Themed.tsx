/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, useColorScheme } from 'react-native'

type ThemedTextProps = {
  lightStyle?: DefaultText['props']['style']
  darkStyle?: DefaultText['props']['style']
}

type ThemedViewProps = {
  lightStyle?: DefaultView['props']['style']
  darkStyle?: DefaultView['props']['style']
}

export type TextProps = ThemedTextProps & DefaultText['props']
export type ViewProps = ThemedViewProps & DefaultView['props']

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
