import { RectButton, Text, View } from '@/src/components/Themed'
import { StyleSheet } from 'react-native'
import {
  color,
  fontSize,
  fontWeight,
  margin,
  padding,
} from '@/src/constants/Styles'
import { useHorizontalScreenPadding } from '@/src/components/useHorizontalScreenPadding'
import { Project } from '@/src/db/projects'

export type HomeListRowProps = Pick<Project, 'name' | 'city' | 'updatedAt'>

export default function HomeListRow({
  name,
  updatedAt,
  city,
}: HomeListRowProps) {
  const horizontalScreenPadding = useHorizontalScreenPadding()

  return (
    <RectButton
      style={[styles.container, { paddingHorizontal: horizontalScreenPadding }]}
      underlayColorDark={color.white}
    >
      <View style={styles.firstRow}>
        <Text style={styles.name} darkStyle={styles.nameDark}>
          {name}
        </Text>
        <Text style={styles.updatedAt} darkStyle={styles.updatedAtDark}>
          {new Date(updatedAt).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.city} darkStyle={styles.cityDark}>
          {city}
        </Text>
      </View>
    </RectButton>
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
  name: {
    fontSize: fontSize.base,
    color: color.light.text.normal,
    fontWeight: fontWeight.semibold,
  },
  nameDark: {
    color: color.dark.text.normal,
  },
  city: {
    fontSize: fontSize.xs,
    color: color.light.text.light,
  },
  cityDark: {
    color: color.dark.text.dark,
  },
  updatedAt: {
    fontSize: fontSize.xs,
    color: color.light.text.light,
  },
  updatedAtDark: {
    color: color.dark.text.dark,
  },
})
