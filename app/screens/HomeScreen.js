
import React from "react"
import { StyleSheet, SafeAreaView, View, Dimensions, FlatList } from "react-native"

import BigButton from "../components/BigButton"
import firebase from "@modules/Firebase"

import EventItem from "../components/EventItem"

export default class HomeScreen extends React.Component {
  static renderSeparator = (sectionId, rowId) => <View style={styles.separator} key={rowId} />
  static keyExtractor = (item, index) => index.toString()
  static renderItem = ({ item }) => <EventItem doc={item} />

  state = {
    events: [],
    userDocs: []
  }


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
    const userDocs = qss.docs.filter(doc => doc.exists)
    console.log("Matching users: ", userDocs)
    this.setState({userDocs})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BigButton onPress={this.onPress} />
        <FlatList style={styles.list}
          data={this.state.events}
          renderItem={HomeScreen.renderItem}
          ItemSeparatorComponent={HomeScreen.renderSeparator}
          keyExtractor={HomeScreen.keyExtractor}
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
    backgroundColor: "black"
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