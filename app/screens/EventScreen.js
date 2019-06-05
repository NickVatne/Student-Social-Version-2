import React from "react"
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from "react-native"

import firebase from "@modules/Firebase"

import DatePick from "../components/DatePick"
import TimePick from "../components/TimePick"




export default class EventScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      date: "",
      time: "",
      address: "",
      notificationSwitchValue: false,
    }
  }



  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>DITT NYE EVENT!!!</Text>
          </View>
          <View style={styles.informationAreaContainer}>

            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Event name:</Text>
              <TextInput
                  placeholder="name your event"
                  onChangeText={title => this.setState({ title })}
                  value={this.state.title}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Pick date:</Text>
              <DatePick mode="date"
                        onDateChange={date => this.setState({ date })}
                        value={this.state.date}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Time:</Text>
              <TimePick onDateChange={time => this.setState({ time })}
                        value={this.state.time}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Address:</Text>
              <TextInput
                  onChangeText={address => this.setState({ address })}
                  value={this.state.address}
                  placeholder={"The adress of your event"}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Fargekode: </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Varslingar:</Text>
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
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: "#455A64",
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
  },
  informationAreaContainer: {
    backgroundColor: "#FFF",
    flex: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    paddingRight: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  optionsItemLeft: {
    marginLeft: 5,

  },
  optionsItemRight: {
    marginRight: 5,
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  createEventButton: {
    width: "50%",
    height: 75,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "white"
  }
})
