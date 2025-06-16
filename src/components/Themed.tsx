/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  useColorScheme,
} from 'react-native'
import {
  Image as DefaultImage,
  ImageProps as DefaultImageProps,
} from 'expo-image'
import {
  SafeAreaView as DefaultSafeAreaView,
  SafeAreaViewProps as DefaultSafeAreaViewProps,
} from 'react-native-safe-area-context'
import {
  RectButton as DefaultRectButton,
  RectButtonProps as DefaultRectButtonProps,
  BorderlessButton as DefaultBorderlessButton,
  BorderlessButtonProps as DefaultBorderlessButtonProps,
} from 'react-native-gesture-handler'
import {
  BottomSheetView as DefaultBottomSheetView,
  BottomSheetModal as DefaultBottomSheetModal,
  BottomSheetModalProps as DefaultBottomSheetModalProps,
} from '@gorhom/bottom-sheet'
import { BottomSheetViewProps as DefaultBottomSheetViewProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types'
import { color } from '@/src/constants/Styles'
import { RefObject } from 'react'

type ThemedTextProps = {
  lightStyle?: DefaultText['props']['style']
  darkStyle?: DefaultText['props']['style']
}

// TODO Maybe rename all to styleDark so that prefix is the same

export type TextProps = ThemedTextProps & DefaultText['props']

export function Text(props: TextProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return <DefaultText style={[style, schemedStyle]} {...otherProps} />
}

type ThemedViewProps = {
  lightStyle?: DefaultView['props']['style']
  darkStyle?: DefaultView['props']['style']
}

export type ViewProps = ThemedViewProps & DefaultView['props']

export function View(props: ViewProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return <DefaultView style={[style, schemedStyle]} {...otherProps} />
}

type ThemedSafeAreaViewProps = {
  lightStyle?: DefaultSafeAreaViewProps['style']
  darkStyle?: DefaultSafeAreaViewProps['style']
}

export type SafeAreaViewProps = ThemedSafeAreaViewProps &
  DefaultSafeAreaViewProps

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return <DefaultSafeAreaView style={[style, schemedStyle]} {...otherProps} />
}

type ThemedRectButtonProps = {
  lightStyle?: DefaultRectButtonProps['style']
  darkStyle?: DefaultRectButtonProps['style']
  underlayColorDark?: DefaultRectButtonProps['underlayColor']
}

export type RectButtonProps = ThemedRectButtonProps & DefaultRectButtonProps

export function RectButton(props: RectButtonProps) {
  const {
    style,
    lightStyle,
    darkStyle,
    underlayColorDark,
    underlayColor,
    ...otherProps
  } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle
  const schemedUnderlayColor =
    theme === 'light' ? underlayColor : underlayColorDark

  return (
    <DefaultRectButton
      style={[style, schemedStyle]}
      underlayColor={schemedUnderlayColor}
      {...otherProps}
    />
  )
}
type ThemedBorderlessButtonProps = {
  lightStyle?: DefaultBorderlessButtonProps['style']
  darkStyle?: DefaultBorderlessButtonProps['style']
  rippleColorDark?: DefaultBorderlessButtonProps['rippleColor']
}

export type BorderlessButtonProps = ThemedBorderlessButtonProps &
  DefaultBorderlessButtonProps

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

type ThemedImageProps = {
  lightStyle?: DefaultImageProps['style']
  darkStyle?: DefaultImageProps['style']
}

export type ImageProps = ThemedImageProps & DefaultImageProps

export function Image(props: ImageProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return <DefaultImage style={[style, schemedStyle]} {...otherProps} />
}

type ThemedBottomSheetViewProps = {
  lightStyle?: DefaultBottomSheetViewProps['style']
  darkStyle?: DefaultBottomSheetViewProps['style']
}

export type BottomSheetViewProps = ThemedBottomSheetViewProps &
  DefaultBottomSheetViewProps

export function BottomSheetView(props: BottomSheetViewProps) {
  const { style, lightStyle, darkStyle, ...otherProps } = props
  const theme = useColorScheme() ?? 'light'

  const schemedStyle = theme === 'light' ? lightStyle : darkStyle

  return (
    <DefaultBottomSheetView style={[style, schemedStyle]} {...otherProps} />
  )
}

type ThemedBottomSheetModalProps = {
  lightBackgroundStyle?: DefaultBottomSheetModalProps['backgroundStyle']
  darkBackgroundStyle?: DefaultBottomSheetModalProps['backgroundStyle']
  lightHandleIndicatorStyle?: DefaultBottomSheetModalProps['handleIndicatorStyle']
  darkHandleIndicatorStyle?: DefaultBottomSheetModalProps['handleIndicatorStyle']
  // The BottomSheet lib has not typed ref as props yet so I do it manually here.
  // https://reactnative.dev/blog/2025/02/19/react-native-0.78#react-19
  //  you can now pass ref as a prop like you do with any other prop. Function components will no longer need forwardRef and you can migrate your components now.
  ref: RefObject<DefaultBottomSheetModal | null>
}

export type BottomSheetModalProps = ThemedBottomSheetModalProps &
  DefaultBottomSheetModalProps

export function BottomSheetModal(props: BottomSheetModalProps) {
  const {
    backgroundStyle,
    lightBackgroundStyle,
    darkBackgroundStyle,
    handleIndicatorStyle,
    ...otherProps
  } = props
  const theme = useColorScheme() ?? 'light'

  const schemedBackgroundStyle =
    theme === 'light' ? lightBackgroundStyle : darkBackgroundStyle

  const schemedHandleIndicatorStyle =
    theme === 'light'
      ? props.lightHandleIndicatorStyle
      : props.darkHandleIndicatorStyle

  return (
    <DefaultBottomSheetModal
      backgroundStyle={[backgroundStyle, schemedBackgroundStyle]}
      handleIndicatorStyle={[handleIndicatorStyle, schemedHandleIndicatorStyle]}
      {...otherProps}
    />
  )
}
