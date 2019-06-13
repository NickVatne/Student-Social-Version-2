import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from "react-native"

import firebase from "@modules/Firebase"

const BANNER = require("../imgs/meeting-with-a-friend.png")

export default class Login extends Component {
  state = {
    username: null,
    password: null,
  }

  login = async () => {
    try {
      console.log("Logging in with username: " + this.state.username + " and password " + this.state.password)
      await firebase.auth()
        .signInWithEmailAndPassword(this.state.username + "@studentsocial.com", this.state.password)
      console.log("Successfully logged in")
    } catch (err) {
      try {
        console.log("Account not found, trying to create user")
        await firebase.auth()
          .createUserWithEmailAndPassword(this.state.username + "@studentsocial.com", this.state.password)
      } catch (err2) {
        console.log("Failed to create user")
        Alert.alert("Failed to log in", err2.code + ": " + err2.message)
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image source={BANNER} style={styles.logoImage} />
          <Text style={styles.logo}>Student.Social</Text>


          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputContainer}
            placeholder="username"
            placeholderTextColor="#ffffff"
            defaultValue={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

          <TextInput
            secureTextEntry
            underlineColorAndroid="transparent"
            style={styles.inputContainer}
            placeholder="password"
            placeholderTextColor="#ffffff"
            defaultValue={this.state.password}
            onChangeText={password => this.setState({ password })}
          />


          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.login}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={styles.signupCont}>
            <Text style={styles.signupText}>Not registered yet? Signup</Text>
            <Text style={styles.signupButton}> here</Text>
          </View>

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#108ba9",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",

  },
  logoImage: {
    marginTop: 40,
    width: 100,
    height: 100,
  },
  signupCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
  },
  signupButton: {
    color: "#00bfff",
    fontSize: 16,
    fontWeight: "500",
  },
  logo: {
    color: "white",
    fontSize: 39,
    fontWeight: "bold",
    textShadowColor: "#252525",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 8,
    marginBottom: 15,
    padding: 20,
  },
  inputContainer: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,

  },
  input: {},
  buttonContainer: {
    width: 300,
    margin: 21,
    padding: 21,
    borderWidth: 1,
    borderColor: "#2d4452",
    backgroundColor: "rgb(45,68,82)",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
})
