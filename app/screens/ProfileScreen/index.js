import React from "react"
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from "react-native"

import firebase from "@modules/Firebase"

import Interest from "../../components/Interest"

const ProfilePic = require("../../imgs/nicolai.png")

export default class ProfileScreen extends React.Component {
  state = {
    interests: {},
    userInterests: {},
  }

  componentDidMount() {
    console.log("User id: " + firebase.auth().currentUser.uid)

    firebase.firestore()
      .collection("interests")
      .onSnapshot(qss => {
        const interests = {}
        qss.docs.forEach(doc => {
          interests[doc.id] = doc.data()
        })
        this.setState({ interests })
      }, err => console.log("Failed to get all interests: ", err))

    firebase.firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .onSnapshot(doc => {
        const userInterests = doc.get("interests") || {}
        this.setState({ userInterests })
      })
  }

  onPress = id => {
    console.log("Pressed: " + id)

    firebase.firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({
        interests: {
          [id]: !this.state.userInterests[id],
        },
      }, { merge: true })
  }

  renderInterests = () => Object.keys(this.state.interests)
    .map(id => {
      const { uri, text } = this.state.interests[id]
      const active = this.state.userInterests[id]

      return <Interest key={id} id={id} uri={uri} text={text} active={active} onPress={this.onPress}/>
    })

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.nametop}>Nicolai Vatne</Text>
        </View>

        <Image style={styles.hk} source={require("../../imgs/hk.png")}/>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileEdit")}>
          <Image style={styles.settingsIcon} source={require("../../imgs/baseline_settings_white_18dp.png")}/>
        </TouchableOpacity>

        <Image style={styles.avatar} source={ProfilePic} />

        <View style={styles.body}>
          <Text style={styles.interesserText}>Interests</Text>
          <Text style={styles.descriptionText}>Blue = on Black = off</Text>
        </View>

        <ScrollView horizontal={true} style={{ height: 130 }}>
          <View style={styles.interestsContainer}>
            {this.renderInterests()}
          </View>
        </ScrollView>

        <View>
          <Text style={styles.aboutText}>About Nicolai</Text>

        </View>
        <ScrollView>
          <View style={styles.informationAreaContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Name:</Text>
              <Text>Nicolai Vatne</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Age:</Text>
              <Text>23</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Institution:</Text>
              <Text>Høyskolen Kristiania</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Major: </Text>
              <Text>Computer Science</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.optionsItemLeft}>Favorite Interest:</Text>
              <Text>Running</Text>
            </View>
            <View style={styles.infoContainer}>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e7f4f6",

  },
  informationAreaContainer: {
    backgroundColor: "#e7f4f6",
    flex: 5,
  },
  infoContainer: {
    flexDirection: "row",
    backgroundColor: "#e7f4f6",
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

  profileInfo: {
    backgroundColor: "#e7f4f6",
    marginTop: 20,
    marginLeft: 10,
  },
  aboutText: {
    fontSize: 20,
    fontFamily: "Helvetica",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 10,
    fontFamily: "Helvetica",
    alignSelf: "center",
    padding: 1.87,
  },
  interestsContainer: {
    marginTop: 5,
    justifyContent: "center",
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  header: {
    backgroundColor: "#108ba9",
    height: 250,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 10,
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
  nametop: {
    fontSize: 16,
    color: "white",
    marginTop: 200,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  eventor: {
    fontSize: 22,
    color: "black",
    fontWeight: "400",
    textAlign: "center",
    marginTop: -20,
    fontFamily: "Helvetica",
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
    backgroundColor: "#108ba9",
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
