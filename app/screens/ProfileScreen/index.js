
import React from "react"
import { StyleSheet, SafeAreaView, View } from "react-native"

import firebase from "@modules/Firebase"

import Interest from "./Interest"

export default class ProfileScreen extends React.Component {
  state = {
    interests: {},
    userInterests: {},
  }

  componentDidMount() {
    console.log("User id: " + firebase.auth().currentUser.uid)

    firebase.firestore().collection("interests")
      .onSnapshot(qss => {
        const interests = {}
        qss.docs.forEach(doc => { interests[doc.id] = doc.data() })
        this.setState({ interests })
      }, err => console.log("Failed to get all interests: ", err))

    firebase.firestore().doc("users/" + firebase.auth().currentUser.uid)
      .onSnapshot(doc => {
        const userInterests = doc.get("interests") || {}
        this.setState({ userInterests })
      })
  }

  onPress = id => {
    console.log("Pressed: " + id)

    firebase.firestore().doc("users/" + firebase.auth().currentUser.uid).set({
      interests: {
        [id]: !this.state.userInterests[id],
      },
    }, { merge: true })
  }

  renderInterests = () => Object.keys(this.state.interests).map(id => {
    const { uri, text } = this.state.interests[id]
    const active = this.state.userInterests[id]

    return <Interest key={id} id={id} uri={uri} text={text} active={active} onPress={this.onPress} />
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.interestsContainer}>
          {this.renderInterests()}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  interestsContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
})
