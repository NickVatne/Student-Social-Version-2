
import React from "react"
import { YellowBox } from "react-native"

import firebase from "@modules/Firebase"

import Login from "./Login"
import AppNavigator from "../navigation/AppNavigator"

export default class Main extends React.Component {
  state = {
    user: null,
    userDocs: [],
  }

  async componentDidMount() {
    YellowBox.ignoreWarnings([
      "Setting a timer for a long period of time",
        "Can't perform a React state update on an unmounted component."
    ])

    this.authListener = firebase.auth().onAuthStateChanged(user => this.setState({ user }))

    this.usersListener = firebase.firestore().collection("users")
      .onSnapshot(this.onSnapshot, this.onQueryError)
  }
  componentWillUnmount() {
    this.authListener && this.authListener()
    this.usersListener && this.usersListener()
  }

  onSnapshot = qss => {
    const userDocs = qss.docs.filter(doc => doc.exists)
    this.setState({ userDocs })
  }
  onQueryError = err => console.log(err)

  render() {
    return this.state.user
      ? <AppNavigator />
      : <Login />
  }
}
