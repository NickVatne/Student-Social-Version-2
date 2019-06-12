
import React from "react"
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, TextInput, TouchableHighlight, Text, View } from "react-native"

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
                <Text style={styles.submitText}>Send</Text>
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
    height: 40,
  },
  input: {
    flex: 4,
    backgroundColor: "#F1F0F0",
    paddingLeft: 20,
    borderRadius: 10,
  },

  submitContainer: {
    width: 100,
    height: 40,
    marginRight: 2,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    borderRadius: 60,
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontSize: 24,
  },
})


