import { RectButton, Text, View } from '@/components/Themed'
import { StyleSheet } from 'react-native'
import { color, fontSize, fontWeight, margin, padding } from '@/constants/Styles'

export type HomeListRowProps = {
  customerName: string
  city: string
  lastSaved: Date
}

export default function HomeListRow({ customerName, lastSaved, city }: HomeListRowProps) {
  return (
    <RectButton style={styles.container} underlayColorDark={color.white}>
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
    paddingHorizontal: padding['6'],
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
    color: color.light.text.lighter,
  },
  cityDark: {
    color: color.dark.text.darker,
  },
  lastSaved: {
    fontSize: fontSize.xs,
    color: color.light.text.lighter,
  },
  lastSavedDark: {
    color: color.dark.text.darker,
  },
})
