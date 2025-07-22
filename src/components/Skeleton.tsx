import {
  cancelAnimation,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { color, size } from '@/src/constants/Styles'
import { useEffect } from 'react'
import { AnimatedView } from './Themed'

export type SkeletonProps = {}

export default function Skeleton({}: SkeletonProps) {
  const opacity = useSharedValue(1)

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.4, { duration: 1000 }), -1, true)

    return () => {
      cancelAnimation(opacity)
      opacity.value = 1
    }
  }, [opacity])

  return (
    <>
      <AnimatedView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color.black['200'],
          borderRadius: size['3'],
          opacity,
        }}
        darkStyle={{ backgroundColor: color.black['700'] }}
      />
    </>
  )
}
