import { useWindowDimensions } from 'react-native'
import { padding } from '@/constants/Styles'

// The padding is based on the padding of the large title on iOS. Found out by trial & error.
// Also see https://github.com/react-navigation/react-navigation/issues/10615
export function useHorizontalScreenPadding() {
  const { width } = useWindowDimensions()

  let horizontalScreenPadding = padding['4']

  if (width >= 744) horizontalScreenPadding = padding['5']

  return horizontalScreenPadding
}
