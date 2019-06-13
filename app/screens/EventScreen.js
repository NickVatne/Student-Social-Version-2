import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import firebase from "@modules/Firebase"

import DatePick from "../components/DatePick"
import TimePick from "../components/TimePick"

import Room from "./ChatMain/Room"

import NewEventScreen from "./NewEventScreen"
import MyMessage from "./Chat/MyMessage"
import TheirMessage from "./Chat/TheirMessage"




export default class EventScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      address: '',
      notificationSwitchValue: '',
    }
  }

  openChat =() => {
    const path = this.props.navigation.getParam("path")
    this.props.navigation.navigate("HomeChat", { path: "events/" + path + "/name" })
   }

  componentDidMount = async () => {
    const path = this.props.navigation.getParam("path")
    const db=firebase.firestore()


    const docRef = db.collection("events").doc(path);

    docRef.get().then(doc => {
      if (doc.exists) {
        this.setState({ title: doc.data().name });
        this.setState({ date: doc.data().date });
        this.setState({ time: doc.data().time });
        this.setState({ address: doc.data().address });
        this.setState({ notifications: doc.data().notifications });
      } else {
        // doc.data() will be undefined in this case
        this.setState({ title: null });
      }
    }).catch(function(error) {
      this.setState({ title: null });
      console.log("Error getting document:", error);
    });
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
              <Text style={styles.optionsItemLeft}>Description</Text>
              <Text>{this.state.description}</Text>
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
              {this.state.notifications ? <Text>On</Text> : <Text>Off</Text>}
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Inviter flere deltakere</Text>
            </View>
            <View style={styles.buttonArea}>
              <TouchableOpacity
                  onPress={this.openChat}
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
    backgroundColor: "#e7f4f6",
    flex: 1,
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: "#108ba9",
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
    backgroundColor: "#109aa9",
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
