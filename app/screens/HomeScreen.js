import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from "react-native"

import firebase from "@modules/Firebase"

import BigButton from "../components/BigButton"

import List from "../components/List"
import Room from "../components/Room"

export default class HomeScreen extends React.Component {
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
      onPress: () => this.props.navigation.navigate("HomeEvent", { path: doc.id }),
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
          <Text style={styles.upcomingText}>Upcoming Events</Text>

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
    backgroundColor: "#e7f4f6",
  },

  buttonContainer: {
    alignSelf: "center",
  },
  upcoming: {
    alignSelf: "center",
  },
  upcomingText: {
    color: "#000000",
    fontFamily: "Helvetica",
    fontSize: 22,
  },
})
