
import React from "react"
import { StyleSheet, SafeAreaView, TextInput, TouchableHighlight, Text, View } from "react-native"

import firebase from "@modules/Firebase"

import List from "../../components/List"

import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"

export default class Chat extends React.Component {
  state = {
    messages: [],
    message: "",
  }

  componentDidMount = async () => {
    const path = this.props.navigation.getParam("path")

    this.listener = firebase.firestore().collection(path)
      .orderBy("timestamp", "desc")
      .limit(20)
      .onSnapshot(qss2 => {
        this.setState({ messages: qss2.docs.reverse() })
      })
  }

  componentWillUnmount = () => this.listener && this.listener()

  getItems = () => this.state.messages.map(doc => ({
    component: doc.get("uid") === firebase.auth().currentUser.uid ? MyMessage : TheirMessage,
    props: { doc },
  }))

  send = () => {
    if (!this.state.message) return

    const path = this.props.navigation.getParam("path")

    firebase.firestore().collection(path).add({
      text: this.state.message,
      uid: firebase.auth().currentUser.uid,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <List data={this.getItems()} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Message"
            onChangeText={message => this.setState({ message })}
            style={styles.input}
          />
          <TouchableHighlight
            underlayColor="transparent"
            onPress={this.send}
          >
            <View style={styles.submitContainer}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flexDirection: "row",
  },

  input: {
    flex: 1,
    backgroundColor: "lightgray",
  },

  submitContainer: {
    height: 70,
    width: 120,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  submitText: {
    color: "blue",
    fontSize: 24,
  },
})
