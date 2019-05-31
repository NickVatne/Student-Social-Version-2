import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native"

export default class ProfileScreen extends React.Component {
  componentDidMount() {
    console.log("Mounted profile screen")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.nametop}>Nicolai Vatne</Text>
        </View>
        <Image style={styles.hk} source={require("../imgs/hk.png")} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileEdit")}>
          <Image style={styles.settingsIcon} source={require("../imgs/baseline_settings_white_18dp.png")} />
        </TouchableOpacity>
        <Image style={styles.avatar} source={require("../imgs/profileEdit.png")} />
        <View style={styles.body}>
          <Text style={styles.eventor}>Events</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ChatNav")}
          >
            <Image source={require("../imgs/eventProfile.png")} />
          </TouchableOpacity>
          <Text style={styles.interesserText}>Interesser</Text>
        </View>

        <View style={styles.interesser}>
          <TouchableOpacity style={styles.foto}>
            <Image style={styles.sykBild} source={{ uri: "http://felixandvanessa.website/wp-content/uploads/2018/01/HONEYMOONLOGO-3.png" }} />
            <Text style={styles.fotoText}>Fotografering</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sykling}>
            <Image style={styles.sykBild} source={{ uri: "http://www.clker.com/cliparts/v/x/e/u/8/7/white-cyclist-bicycle-hi.png" }} />
            <Text style={styles.sykText}>Sykling</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gaming}>
            <Image style={styles.sykBild} source={{ uri: "https://t1.rbxcdn.com/7c0e8f9aac71bd7758b955ed7974f1e3" }} />
            <Text style={styles.gamText}>Gaming</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
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
    // borderRadius: 100,
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
