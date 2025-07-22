import { View } from '@/src/components/Themed'
import { StyleSheet } from 'react-native'
import { fontSize, margin, padding, size } from '@/src/constants/Styles'
import { useHorizontalScreenPadding } from '@/src/components/useHorizontalScreenPadding'
import Skeleton from '@/src/components/Skeleton'

export default function LoadingHomeListRow() {
  const horizontalScreenPadding = useHorizontalScreenPadding()

  return (
    <View
      style={[styles.container, { paddingHorizontal: horizontalScreenPadding }]}
    >
      <View style={styles.firstRow}>
        <View
          style={{
            ...styles.nameSkeleton,
            width: styles.nameSkeleton.width + Math.random() * size['28'],
          }}
        >
          <Skeleton />
        </View>
        <View style={styles.updatedAtSkeleton}>
          <Skeleton />
        </View>
      </View>
      <View style={styles.secondRow}>
        <View
          style={{
            ...styles.citySkeleton,
            width: styles.citySkeleton.width + Math.random() * size['10'],
          }}
        >
          <Skeleton />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding['4'],
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondRow: {
    marginTop: margin['2'],
  },
  nameSkeleton: {
    height: fontSize.base * 1.2,
    width: size['40'],
  },
  citySkeleton: {
    height: fontSize.xs * 1.2,
    width: size['20'],
  },
  updatedAtSkeleton: {
    height: fontSize.xs * 1.2,
    width: size['16'],
  },
})
