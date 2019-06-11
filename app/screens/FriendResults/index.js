
import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"

import firebase from "@modules/Firebase"

import List from "../../components/List"
import Interest from "./Interest"

export default class FriendResults extends React.Component {
  state = {
    results: {},
  }

  componentDidMount = async () => {
    this.listeners = []

    this.docListener = firebase.firestore().doc("users/" + firebase.auth().currentUser.uid).onSnapshot(doc => {
      this.unsubscribeAllListeners()
      this.setState({ results: {} })

      const interests = doc.get("interests") || {}

      this.listeners = Object.keys(interests)
        .filter(id => interests[id])
        .map(this.setListener)
    })
  }

  // Remove all listeners on unmount
  componentWillUnmount = () => this.unsubscribeAllListeners()
  unsubscribeAllListeners = () => this.listeners && this.listeners.forEach(listener => listener && listener())

  setListener = id => firebase.firestore().collection("users")
    .where("interests." + id, "==", true)
    .onSnapshot(qss => {
      this.setState(state => ({
        results: {
          ...state.results,
          [id]: qss.docs.filter(d => d.id !== firebase.auth().currentUser.uid),
        },
      }))
    }, err => console.log("Failed to listen for interest changes for id " + id + ": ", err))

  getItems = () => Object.entries(this.state.results).map(([id, docs]) => ({
    component: Interest,
    props: {
      id,
      docs,
      key: id,
      openChat: path => this.props.navigation.navigate("HomeChat", { path }),
    },
  }))

  render = () => (
    <SafeAreaView style={styles.container}>
      <List data={this.getItems()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#e7f4f6",

  },
})
