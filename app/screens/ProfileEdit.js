import React, { Component } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Switch, ScrollView, Dimensions } from "react-native"


export default class ProfileEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notificationSwitchValue: false,
      smsSwitchValue: true,
      editSwitch: false,
    }
  }

    toggleSwitch = value => {
      this.setState({ notificationSwitchValue: value })
    };
    smsSwitch = value => {
      this.setState({ smsSwitchValue: value })
    };
    editSwitch = value => {
      this.setState({ editSwitchValue: value })
    };

    render() {
      return (
        <SafeAreaView style={styles.container}>

          <ScrollView style={{ height: 730 }}>
            <Image
              style={styles.picture}
              source={require("../imgs/profileEdit.png")}
            />
            <Image
              style={styles.plus}
              source={require("../imgs/plus.png")}
            />

            <View style={styles.body}>

              <View style={styles.middleHeader}>
                <Text style={styles.generalText}>General</Text>
              </View>

              <Text style={{ color: "#000000", marginLeft: 20, marginTop: 20, fontSize: 16, fontFamily: "Helvetica", }}>Interest</Text>

              <View style={styles.interesser}>
                <TouchableOpacity style={styles.foto}>
                  <Image style={styles.sykBild} source={{ uri: "http://felixandvanessa.website/wp-content/uploads/2018/01/HONEYMOONLOGO-3.png" }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sykling}>
                  <Image style={styles.sykBild} source={{ uri: "http://www.clker.com/cliparts/v/x/e/u/8/7/white-cyclist-bicycle-hi.png" }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gaming}>
                  <Image style={styles.sykBild} source={{ uri: "https://t1.rbxcdn.com/7c0e8f9aac71bd7758b955ed7974f1e3" }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plusCircle}>
                  <Image
                    style={styles.sykBild}
                    source={require("../imgs/plus-cross.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.middleHeader}>
                <Text style={styles.generalText}>Notification</Text>
              </View>
              <Text style={{ color: "#000000", marginLeft: 20, marginTop: 20, fontFamily: "Helvetica", }}>Push notification:</Text>
              <Switch
                style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }], fontSize: 16, marginLeft: 150, marginTop: -24 }}
                onValueChange={this.toggleSwitch}
                value={this.state.notificationSwitchValue}
              />

              <Text style={{ color: "#000000", marginLeft: 20, marginTop: 20 }}>SMS notification:</Text>
              <Switch
                style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }], fontSize: 16, marginLeft: 150, marginTop: -24 }}
                onValueChange={this.smsSwitch}
                value={this.state.smsSwitchValue}
              />
              <View style={{ backgroundColor: "#d8d8d8", height: 2, marginTop: 10 }} />
              <Text style={{ color: "#ff0000", marginLeft: 20, marginTop: 20, fontFamily: "Helvetica",}}>Log out</Text>


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
  middleHeader: {
    backgroundColor: "#e0edef",
    height: 50,
  },
  picture: {
    borderColor: "#2D4352",
    marginTop: 20,
    height: 130,
    width: 130,
    borderWidth: 4,
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
  },
  plus: {
    left: 210,
    top: 120,
    position: "absolute",
  },
  body: {
    marginTop: 200,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  titleText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  generalText: {
    fontSize: 16,
    color: "#000000",
    marginTop: 15,
    marginLeft: 20,
    fontFamily: "Helvetica",
  },
  foto: {
    marginTop: 20,
    height: 45,
    left: 20,
    alignItems: "center",
    marginBottom: 20,
    width: 45,
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
    left: 30,
    marginTop: 20,
    height: 45,
    alignItems: "center",
    marginBottom: 20,
    width: 45,
    borderRadius: 70,
    color: "#696969",
    backgroundColor: "#2D4452",
  },
  sykBild: {
    height: 37.5,
    width: 42.5,
    marginTop: 5,
  },
  gaming: {
    left: 40,
    marginTop: 20,
    height: 45,
    alignItems: "center",
    marginBottom: 20,
    width: 45,
    borderRadius: 60,
    color: "#696969",
    backgroundColor: "#2D4452",
  },
  plusCircle: {
    left: 50,
    marginTop: 20,
    height: 45,
    alignItems: "center",
    marginBottom: 20,
    width: 45,
    borderRadius: 60,
    color: "#696969",
    backgroundColor: "#d8d8d8",
  },
  plusAdd: {
    left: 50,
    marginTop: 16,
  },
  interesserText: {
    fontSize: 16,
    color: "black",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 130,
  },
  interesser: {
    flex: 1,
    flexDirection: "row",
  },

})
