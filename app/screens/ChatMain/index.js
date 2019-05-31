import React from "react"
import { StyleSheet, View } from "react-native"

import firebase from "@modules/Firebase"

import List from "../../components/List"
import Room from "./Room"

export default class ChatMain extends React.Component {
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
        <List data={this.getItems()} />
      </View>
    )
  }
}

// <Room header="Party" participants={["Jani", "Nico"]} uri="https://catering-kvatric.hr/wp-content/uploads/2017/04/best-party-planner.jpg" />

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
