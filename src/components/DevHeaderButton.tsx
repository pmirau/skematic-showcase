import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler'
import { Text } from '@/src/components/Themed'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { color, iconSize } from '@/src/constants/Styles'

export type DevHeaderButtonProps = Omit<BorderlessButtonProps, 'children'> & {}

export default function DevHeaderButton(props: DevHeaderButtonProps) {
  return (
    <BorderlessButton {...props}>
      <Text
        style={{
          color: color.light.text.normal,
          width: iconSize.default,
          height: iconSize.default,
        }}
        darkStyle={{
          color: color.dark.text.normal,
        }}
      >
        <MaterialCommunityIcons name="code-tags" size={iconSize.default} />
      </Text>
    </BorderlessButton>
  )
}
