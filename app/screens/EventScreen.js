import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import firebase from "@modules/Firebase"

import DatePick from "../components/DatePick"
import TimePick from "../components/TimePick"

import NewEventScreen from "./NewEventScreen"


export default class EventScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: NewEventScreen.state.title,
      date: NewEventScreen.state.date,
      time: NewEventScreen.state.time,
      address: NewEventScreen.state.address,
      notificationSwitchValue: NewEventScreen.state.notificationSwitchValue,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.state.title}</Text>
        </View>
        <View style={styles.informationAreaContainer}>

          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Event name:</Text>
            <Text>{this.state.title}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Date:</Text>
            <Text>{this.state.date}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Time:</Text>
            <Text>{this.state.time}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Address:</Text>
            <Text>{this.state.address}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Fargekode: </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Notifications:</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.optionsItemLeft}>Inviter flere deltakere</Text>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              onPress={this.createEvent}
              style={styles.createEventButton}
            >
              <Text style={styles.buttonText}> CHAT </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf1f4",
    flex: 1,
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: "#2D4352",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flex: 2,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
    marginTop: 23,
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "Helvetica",
  },
  informationAreaContainer: {
    backgroundColor: "#ecf1f4",
    flex: 5,
  },
  infoContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    paddingRight: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  optionsItemLeft: {
    marginLeft: 5,
    fontFamily: "Helvetica",

  },
  optionsItemRight: {
    marginRight: 5,
    fontFamily: "Helvetica",
  },
  buttonArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createEventButton: {
    width: "75%",
    height: 125,
    backgroundColor: "#2D4352",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Helvetica",
  },
})
