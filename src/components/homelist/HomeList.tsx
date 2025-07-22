import { SafeAreaView } from '@/src/components/Themed'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import HomeListRow, {
  HomeListRowProps,
} from '@/src/components/homelist/HomeListRow'
import { Platform } from 'react-native'
import { margin } from '@/src/constants/Styles'
import HomeListSeparator from '@/src/components/homelist/HomeListSeparator'

export type HomeListProps = {
  data: HomeListRowProps[]
  onRefresh?: () => void
  refreshing?: boolean
}

export default function HomeList({
  data,
  refreshing,
  onRefresh,
}: HomeListProps) {
  let refreshControl = undefined
  if (onRefresh !== undefined && refreshing !== undefined)
    refreshControl = (
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    )

  return (
    <FlatList
      contentContainerStyle={{
        marginTop: Platform.OS === 'ios' ? margin['2'] : 0,
        // This is important to avoid issues on ios with the opacity animation BorderlessButton in EmptyHomeList when it is tapped. It does not work correctly when the parent view is scrollable.
        flexGrow: 1,
      }}
      contentInsetAdjustmentBehavior="automatic"
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name + item.updatedAt}
      ItemSeparatorComponent={() => <HomeListSeparator />}
      ListFooterComponent={
        Platform.OS === 'android' ? <SafeAreaView edges={['bottom']} /> : null
      }
      // ListEmptyComponent={EmptyHomeList}
      // extraData={selectedId}#
      refreshControl={refreshControl}
      refreshing={true}
    />
  )
}

const renderItem = ({ item }: { item: HomeListRowProps }) => {
  // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff'
  // const color = item.id === selectedId ? 'white' : 'black'

  return (
    <HomeListRow
      key={item.name + item.updatedAt}
      name={item.name}
      city={item.city}
      updatedAt={item.updatedAt}
    />
  )
}
