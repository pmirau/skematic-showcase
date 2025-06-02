import { SafeAreaView, View } from '@/components/Themed'
import { FlatList } from 'react-native-gesture-handler'
import HomeListRow, { HomeListRowProps } from '@/components/homelist/HomeListRow'
import { StyleSheet } from 'react-native'
import { color, padding } from '@/constants/Styles'
import EmptyHomeList from '@/components/homelist/EmptyHomeList'

export type HomeListProps = {
  data: HomeListRowProps[]
}

export default function HomeList({ data }: HomeListProps) {
  // Don't use ListEmptyComponent={EmptyHomeList} bc there are weird layout issues. F.e. both children with flex: 1 won't be the same height.
  if (data.length === 0)
    return (
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <EmptyHomeList />
      </SafeAreaView>
    )

  return (
    <FlatList
      // This is important to avoid issues on ios with the opacity animation BorderlessButton in EmptyHomeList when it is tapped. It does not work correctly when the parent view is scrollable.
      contentContainerStyle={{ flexGrow: 1 }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.customerName + item.lastSaved.getTime()}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} darkStyle={styles.separatorDark} />
      )}
      ListFooterComponent={<SafeAreaView edges={['bottom']} />}
      // ListEmptyComponent={EmptyHomeList}
      // extraData={selectedId}
    />
  )
}

const renderItem = ({ item }: { item: HomeListRowProps }) => {
  // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff'
  // const color = item.id === selectedId ? 'white' : 'black'

  return (
    <HomeListRow
      key={item.customerName + item.lastSaved.getTime()}
      customerName={item.customerName}
      city={item.city}
      lastSaved={item.lastSaved}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: padding['6'],
    backgroundColor: color.zinc['200'],
  },
  separatorDark: {
    backgroundColor: color.zinc['700'],
  },
})
