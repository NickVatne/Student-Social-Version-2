import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"

import firebase from "@modules/Firebase"

import List from "../../components/List"
import Room from "../../components/Room"

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
      <SafeAreaView style={styles.container}>
        <List data={this.getItems()} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#e7f4f6",
  },
})
