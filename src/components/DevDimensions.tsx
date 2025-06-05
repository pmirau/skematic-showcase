import { useWindowDimensions } from 'react-native'
import { Text, View } from '@/src/components/Themed'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { color, padding } from '@/src/constants/Styles'

export type DevDimensionsProps = {}

export default function DevDimensions({}: DevDimensionsProps) {
  const { width } = useWindowDimensions()
  const { bottom } = useSafeAreaInsets()

  // Currently there is a bug: Value does not update immediately when rotating on iOS. Always has the stale value. But might be fixed in next RN version: https://github.com/facebook/react-native/issues/51086

  return (
    <View
      style={{
        position: 'absolute',
        bottom: bottom,
        left: 0,
        backgroundColor: color.light.background.normal,
        borderColor: 'red',
        borderWidth: 2,
        paddingVertical: padding['0.5'],
        paddingHorizontal: padding['0.5'],
      }}
    >
      <Text>{width}</Text>
    </View>
  )
}
