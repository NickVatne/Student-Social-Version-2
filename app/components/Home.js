
import React from "react"
import { StyleSheet, SafeAreaView, View, Dimensions, FlatList } from "react-native"

import BigButton from "./BigButton"
import firebase from "@modules/Firebase"

import EventItem from "./EventItem"

export default class Home extends React.Component {
  static renderSeparator = (sectionId, rowId) => <View style={styles.separator} key={rowId} />
  static keyExtractor = (item, index) => index.toString()
  static renderItem = ({ item }) => <EventItem doc={item} />

  state = { events: [] }

  componentDidMount() {
    firebase.firestore().collection("events")
      .orderBy("timestamp", "asc")
      .onSnapshot(this.onSnapshot, this.onQueryError)
  }
  
  onSnapshot = qss => {
    console.log("qss: ", qss)
    const events = qss.docs.filter(doc => doc.exists)
    console.log("Setting events: ", events)
    this.setState({ events })
  }

  onPress = () => {
    console.log("onPress")
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BigButton onPress={this.onPress} />
        <FlatList style={styles.list}
          data={this.state.events}
          renderItem={Home.renderItem}
          ItemSeparatorComponent={Home.renderSeparator}
          keyExtractor={Home.keyExtractor}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
    backgroundColor: "silver"
  },

  list: {
    width: Dimensions.get("window").width,
    flex: 1,
  },

  separator: {
    width: Dimensions.get("window").width,
    height: 1,
  },
})