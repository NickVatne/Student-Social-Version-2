import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from "react-native"

import firebase from "@modules/Firebase"

import BigButton from "../components/BigButton"
import EventItem from "../components/EventItem"

import List from "../components/List"
import Room from "../components/Room"

export default class HomeScreen extends React.Component {
  static renderSeparator = (sectionId, rowId) => <View style={styles.separator} key={rowId}/>
  static keyExtractor = (item, index) => index.toString()
  static renderItem = ({ item }) => <EventItem doc={item}/>

  state = {
    events: [],
  }

  componentDidMount() {
    this.listener = firebase.firestore()
      .collection("events")
      .orderBy("name", "desc")
      .limit(20)
      .onSnapshot(qss => {
        const events = qss.docs.filter(doc => doc.get("name"))
        this.setState({ events })
      }, console.log)
  }

  componentWillMount() {
    this.listener && this.listener()
  }

  getItems = () => this.state.events.map(doc => ({
    component: Room,
    props: {
      doc,
      // onPress: () => this.props.navigation.navigate("HomeChat", { path: "events/" + doc.id + "/name" }),
      onPress: () => this.props.navigation.navigate("Event", { path: doc.id }),
    },
  }))

  render() {
    console.log("Rendering with length " + this.state.events.length)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <BigButton onPress={() => this.props.navigation.navigate("FriendResults")}/>
        </View>
        <View style={styles.upcoming}>
          <Text style={{ color: "#000000", fontSize: 22, }}>Upcoming Events</Text>
        </View>
        <View style={{ backgroundColor: "#d8d8d8", height: 2, marginTop: 10, marginBottom: 5, }} />
        <List data={this.getItems()} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf1f4",
  },

  buttonContainer: {
    alignItems: "center",
  },
  upcoming: {
    alignSelf: "center",
  },
})
