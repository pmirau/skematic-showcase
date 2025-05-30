import { StyleSheet } from 'react-native'
import { View, Text, BorderlessButton } from '@/components/Themed'
import { color, fontSize, fontWeight, margin, padding } from '@/constants/Styles'
import * as Haptics from 'expo-haptics'

export type EmptyHomeListProps = {}

export default function EmptyHomeList({}: EmptyHomeListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title} darkStyle={styles.titleDark}>
          Keine Projekte angelegt
        </Text>
        <BorderlessButton
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
          style={styles.button}
          borderless={false}
        >
          <Text style={styles.buttonText} darkStyle={styles.buttonTextDark}>
            + Lege Dein erstes Projekt an
          </Text>
        </BorderlessButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSize.sm,
    color: color.light.text.lighter,
  },
  titleDark: {
    color: color.dark.text.darker,
  },
  button: {
    marginTop: margin['6'],
    paddingVertical: padding['3'],
    paddingHorizontal: padding['4'],
    borderRadius: 40,
  },
  buttonText: {
    fontSize: fontSize.base,
    color: color.light.blue.normal,
    fontWeight: fontWeight.semibold,
  },
  buttonTextDark: {
    color: color.dark.blue.normal,
  },
})
