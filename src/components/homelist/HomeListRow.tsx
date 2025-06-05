import { RectButton, Text, View } from '@/src/components/Themed'
import { StyleSheet } from 'react-native'
import { color, fontSize, fontWeight, margin, padding } from '@/src/constants/Styles'
import { useHorizontalScreenPadding } from '@/src/components/useHorizontalScreenPadding'

export type HomeListRowProps = {
  customerName: string
  city: string
  lastSaved: Date
}

export default function HomeListRow({ customerName, lastSaved, city }: HomeListRowProps) {
  const horizontalScreenPadding = useHorizontalScreenPadding()

  return (
    <RectButton
      style={[styles.container, { paddingHorizontal: horizontalScreenPadding }]}
      underlayColorDark={color.white}
    >
      <View style={styles.firstRow}>
        <Text style={styles.customerName} darkStyle={styles.customerNameDark}>
          {customerName}
        </Text>
        <Text style={styles.lastSaved} darkStyle={styles.lastSavedDark}>
          {lastSaved.toLocaleDateString()}
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
  customerName: {
    fontSize: fontSize.base,
    color: color.light.text.normal,
    fontWeight: fontWeight.semibold,
  },
  customerNameDark: {
    color: color.dark.text.normal,
  },
  city: {
    fontSize: fontSize.xs,
    color: color.light.text.light,
  },
  cityDark: {
    color: color.dark.text.dark,
  },
  lastSaved: {
    fontSize: fontSize.xs,
    color: color.light.text.light,
  },
  lastSavedDark: {
    color: color.dark.text.dark,
  },
})
