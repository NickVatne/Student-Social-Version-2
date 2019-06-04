
import React from "react"
import {StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView} from "react-native"

import firebase from "@modules/Firebase"

import Interest from "../../components/Interest"

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
        <View style={styles.header}>
          <Text style={styles.nametop}>Nicolai Vatne</Text>
        </View>
        <Image style={styles.hk} source={require("../../imgs/hk.png")} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileEdit")}>
          <Image style={styles.settingsIcon} source={require("../../imgs/baseline_settings_white_18dp.png")} />
        </TouchableOpacity>
        <Image style={styles.avatar} source={require("../../imgs/profileEdit.png")} />
        <View style={styles.body}>
          <Text style={styles.eventor}>Events</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ChatNav")}>
            <Image source={require("../../imgs/eventProfile.png")} />
          </TouchableOpacity>
          <Text style={styles.interesserText}>Interesser</Text>
        </View>
        <ScrollView horizontal={true} style={{ height: 130 }}>
          <View style={styles.interestsContainer}>
            {this.renderInterests()}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },

  interestsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  header: {
    backgroundColor: "#2D4452",
    height: 250,
  },
  hk: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    position: "absolute",
    marginLeft: 20,
    marginTop: 100,

  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 20,
    alignSelf: "center",
    position: "absolute",
    marginTop: 60,
    backgroundColor: "white",
  },
  body: {
    // marginTop: 40,
    // backgroundColor: "#2D4452",
    color: "white",
  },
  nametop: {
    fontSize: 16,
    color: "white",
    marginTop: 200,
    textAlign: "center",
    fontWeight: "bold",
  },
  eventor: {
    fontSize: 22,
    color: "black",
    fontWeight: "400",
    textAlign: "center",
    marginTop: -20,
  },
  merInfo: {
    marginTop: 40,
    height: 25,
    left: 142,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 75,
    borderRadius: 30,
    color: "white",
    backgroundColor: "#2D4452",
  },
  interesserText: {
    fontSize: 22,
    color: "black",
    fontWeight: "400",
    textAlign: "center",
    marginTop: -30,
  },
  interesser: {
    flex: 1,
    flexDirection: "row",
    left: 7,
  },
  foto: {
    marginTop: 20,
    height: 90,
    left: 5,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
    color: "#696969",
    backgroundColor: "#2D4452",
  },
  fotoText: {
    marginTop: 10,
  },
  sykText: {
    marginTop: 10,
  },
  gamText: {
    marginTop: 10,
  },
  sykling: {
    left: 50,
    marginTop: 20,
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 70,
    color: "#696969",
    backgroundColor: "#2D4452",
  },
  sykBild: {
    height: 75,
    width: 85,
    marginTop: 5,
  },
  gaming: {
    left: 90,
    marginTop: 20,
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
    color: "#696969",
    backgroundColor: "#2D4452",
  },
  settingsIcon: {
    left: 330,
    top: -220,
  },
})
