import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

export default class List extends React.Component {
  static keyExtractor = (item, index) => index.toString()
  static renderSeparator = (sectionId, rowId) => <View style={styles.separator} key={rowId} />
  static renderItem = ({ item }) => {
    if (item.visible === false) return null
    return <item.component {...item.props} />
  }

  getItemLayout = (data, index) => ({
    index,
    length: this.props.itemHeight,
    offset: this.props.itemHeight * index,
  })

  render() {
    return (
      <FlatList
        style={[styles.list, this.props.style]}
        data={this.props.data}
        renderItem={List.renderItem}
        keyExtractor={List.keyExtractor}

        {...this.props}

        getItemLayout={this.props.itemHeight && this.getItemLayout}
        removeClippedSubviews
      />
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "whitesmoke",
  },
})
