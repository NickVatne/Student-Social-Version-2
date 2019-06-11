import React, { Component } from "react"
import { StyleSheet, View } from "react-native"

import List from "../components/List"
import Room from "../components/Room"

import firebase from "@modules/Firebase"

// eslint-disable-next-line react/prefer-stateless-function
export default class Schoolpicker extends Component {
  state = {
    rooms: [],
  }

  componentDidMount() {
    this.listener = firebase.firestore().collection("events").onSnapshot(qss => this.setState({ rooms: qss.docs }))
  }
  componentWillUnmount() {
    this.listener && this.listener()
  }

  onPress = doc => this.props.navigation.navigate("Chat", { path: "events/" + doc.id + "/chat" })

  getItems = () => this.state.rooms.map(doc => ({
    component: Room,
    props: { doc, onPress: this.onPress },
  }))

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e7f4f6",
  },
})
