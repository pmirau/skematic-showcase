import { View } from '@/src/components/Themed'
import { StyleSheet } from 'react-native'
import { color, padding } from '@/src/constants/Styles'

export type HomeListSeparatorProps = {}

export default function HomeListSeparator({}: HomeListSeparatorProps) {
  return <View style={styles.separator} darkStyle={styles.separatorDark} />
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: padding['6'],
    backgroundColor: color.zinc['200'],
  },
  separatorDark: {
    backgroundColor: color.zinc['700'],
  },
})
