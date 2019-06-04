import React, { Component } from "react"

export default class BrowseScreen extends Component {

  componentDidMount() {
    this.listener = firebase.firestore().collection("events")
        .orderBy("timestamp", "desc")
        .limit(20)
        .onSnapshot(qss => {
          const events = qss.docs
              .filter(doc => doc.get("timestamp").toDate() >= Date.now())
              .reverse()
          this.setState(events)
        }, console.log)
  }
  componentWillMount() {
    this.listener && this.listener()
  }
  getItems = () => this.state.events.map(doc => ({
    component: Room,
    props: {doc, onPress: () => this.props.navigation.navigate("HomeChat",{"events/" + doc.id + "/chat"})},
  }))

  render() {
    return console.log("Rendering with length " + this.state.events.length)

  }
}

const styles = StyleSheet.create({

})
