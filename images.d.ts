// To fix
// `TS2307: Cannot find module @/assets/images/floor-plan.svg or its corresponding type declarations.`
// on image imports like:
// `import floorPlanImg from '@/assets/images/floor-plan.svg'`

// Taken from https://github.com/upleveled/eslint-config-upleveled/pull/450

declare module '*.png' {
  const path: string
  export default path
}
declare module '*.jpg' {
  const path: string
  export default path
}
declare module '*.jpeg' {
  const path: string
  export default path
}
declare module '*.webp' {
  const path: string
  export default path
}
declare module '*.avif' {
  const path: string
  export default path
}
declare module '*.gif' {
  const path: string
  export default path
}
declare module '*.ico' {
  const path: string
  export default path
}
declare module '*.bmp' {
  const path: string
  export default path
}
declare module '*.svg' {
  const path: string
  export default path
}
