import { StyleSheet } from 'react-native'
import { View, Text, BorderlessButton, Image } from '@/src/components/Themed'
import { color, fontSize, fontWeight, margin, padding } from '@/src/constants/Styles'
import * as Haptics from 'expo-haptics'
import floorPlanImg from '@/src/assets/images/floor-plan.svg'
import rotatedGridImg from '@/src/assets/images/rotated-grid.svg'
import { useTranslation } from 'react-i18next'

export type EmptyHomeListProps = {}

export default function EmptyHomeList({}: EmptyHomeListProps) {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title} darkStyle={styles.titleDark}>
          {t('No projects created')}
        </Text>
        <BorderlessButton
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
          style={styles.button}
          borderless={false}
        >
          <Text style={styles.buttonText} darkStyle={styles.buttonTextDark}>
            + {t('Create your first project')}
          </Text>
        </BorderlessButton>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.gridImgPositionContainer}>
          <Image
            style={styles.gridImg}
            darkStyle={styles.gridImgDark}
            source={rotatedGridImg}
            contentFit="contain"
            transition={100}
            priority="high"
            alt="Decorative image of a grid"
          />
        </View>
        <Image
          style={styles.floorPlanImg}
          darkStyle={styles.floorPlanImgDark}
          source={floorPlanImg}
          contentFit="contain"
          transition={100}
          priority="high"
          alt="Decorative image of a floor plan"
          contentPosition="center"
        />
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
    width: '100%',
    zIndex: 1,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    zIndex: 0,
  },
  title: {
    fontSize: fontSize.sm,
    color: color.light.text.lighter,
  },
  titleDark: {
    color: color.dark.text.darker,
  },
  button: {
    marginTop: margin['5'],
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
  floorPlanImg: {
    flex: 1,
    width: '100%',
    tintColor: color.light.blue.normal,
    opacity: 0.45,
  },
  floorPlanImgDark: {
    tintColor: color.dark.blue.normal,
  },
  gridImgPositionContainer: {
    aspectRatio: 1,
    height: '100%',
    top: 0,
    right: 0,
    position: 'absolute',
  },
  gridImg: {
    position: 'absolute',
    width: '250%',
    height: '250%',
    top: '-50%',
    right: '-175%',
    tintColor: color.light.blue.normal,
    opacity: 0.1,
  },
  gridImgDark: {
    tintColor: color.dark.blue.normal,
    opacity: 0.2,
  },
})
