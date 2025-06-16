import SpacingScale from '@/src/constants/SpacingScale'
import Colors from '@/src/constants/Colors'

// base size = 17
export const fontSize = {
  xs: 13, // 0.75rem
  sm: 15, // 0.875rem
  base: 17, // 1rem
  lg: 19, // 1.125rem
  xl: 21, // 1.25rem
  '2xl': 26, // 1.5rem
  '3xl': 32, // 1.875rem
  '4xl': 38, // 2.25rem
  '5xl': 51, // 3rem
  '6xl': 64, // 3.75rem
  '7xl': 77, // 4.5rem
  '8xl': 102, // 6rem
  '9xl': 136, // 8rem
} as const

export const padding = SpacingScale
export const margin = SpacingScale
export const size = SpacingScale

export const color = {
  ...Colors,
  light: {
    text: {
      normal: Colors.zinc['900'],
      light: Colors.zinc['500'],
      lighter: Colors.zinc['400'],
    },
    blue: { normal: Colors.sky['700'] },
    background: { normal: Colors.white },
  },
  dark: {
    text: {
      normal: Colors.zinc['50'],
      dark: Colors.zinc['500'],
      darker: Colors.zinc['600'],
    },
    blue: { normal: Colors.sky['500'] },
    background: { normal: Colors.black, light: Colors.zinc['900'] },
  },
  black: { ...Colors.zinc, white: Colors.white, black: Colors.black },
} as const

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const

export const iconSize = {
  default: size['6'],
}
