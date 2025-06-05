import { SafeAreaView, View } from '@/src/components/Themed'
import { FlatList } from 'react-native-gesture-handler'
import HomeListRow, { HomeListRowProps } from '@/src/components/homelist/HomeListRow'
import { Platform, StyleSheet } from 'react-native'
import { color, margin, padding } from '@/src/constants/Styles'
import EmptyHomeList from '@/src/components/homelist/EmptyHomeList'

export type HomeListProps = {
  data: HomeListRowProps[]
}

export default function HomeList({ data }: HomeListProps) {
  // Don't use ListEmptyComponent={EmptyHomeList} bc there are weird layout issues. F.e. both children with flex: 1 won't be the same height.
  if (data.length === 0)
    return (
      <SafeAreaView
        style={{
          flex: 1,
          // Quickfix.
          // This is an approximated value. Got by trial & error on iPhone 15.
          // We need this specific padding to account for the space beneath the largeTitle navigation bar on iOS.
          // Note: On iPad Pro 13 inch this padding is slightly excessive but doesn't negatively impact the design.
          paddingTop: Platform.OS === 'ios' ? 150 : 0,
        }}
        edges={['bottom']}
      >
        <EmptyHomeList />
      </SafeAreaView>
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
      keyExtractor={(item) => item.customerName + item.lastSaved.getTime()}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} darkStyle={styles.separatorDark} />
      )}
      ListFooterComponent={Platform.OS === 'android' ? <SafeAreaView edges={['bottom']} /> : null}
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
