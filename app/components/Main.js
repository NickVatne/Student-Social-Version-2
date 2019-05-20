
import React from "react"

import firebase from "@modules/Firebase"

import Navigator from "./Navigator"

export default class Main extends React.Component {
  state = { userDocs: [] }

  async componentDidMount() {
     firebase.firestore().collection("users").onSnapshot(this.onSnapshot, this.onQueryError)
  }
  componentWillUnmount() {

  }

  onSnapshot = qss => {
    const userDocs = qss.docs.filter(doc => doc.exists)
    this.setState({ userDocs })
  }
  onQueryError = err => console.log(err)

  render() {
    return <Navigator />
  }

}