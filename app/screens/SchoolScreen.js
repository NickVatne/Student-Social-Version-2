import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function SchoolScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ChatNav")}
      >
        <Image style={styles.hkStor} source={require("../imgs/hk.png")}/>
      </TouchableOpacity>
      <Text style={styles.velg}>Choose School:</Text>

      <View style={styles.interesser1}>
        <TouchableOpacity
          style={styles.school1}
          onPress={() => props.navigation.navigate("SchoolPicker")}
        >
          <Image style={styles.schoolLogo} source={require("../imgs/hk.png")}/>
          <Text style={styles.text}>HK</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.school2}
          onPress={() => props.navigation.navigate("SchoolPicker")}
        >
          <Image style={styles.schoolLogo} source={require("../imgs/bi.png")}/>
          <Text style={styles.text}>BI</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.school3}
          onPress={() => props.navigation.navigate("SchoolPicker")}
        >
          <Image style={styles.schoolLogo} source={require("../imgs/osloMet.png")}/>
          <Text style={styles.text}>Oslo Met</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.interesser2}>

        <TouchableOpacity
          style={styles.school4}
          onPress={() => props.navigation.navigate("SchoolPicker")}
        >
          <Image style={styles.schoolLogo} source={require("../imgs/uio.png")}/>
          <Text style={styles.text}>UiO</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.school5}
          onPress={() => props.navigation.navigate("SchoolPicker")}
        >
          <Image style={styles.schoolLogo} source={require("../imgs/sonans.png")}/>
          <Text style={styles.text}>Sonans</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.school6}
          onPress={() => props.navigation.navigate("SchoolPicker")}
        >
          <Image style={styles.schoolLogo} source={require("../imgs/bjorknes.png")}/>
          <Text style={styles.text}>Bjørknes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7f4f6",
  },
  hkStor: {
    width: 260,
    height: 260,
    borderRadius: 125,
    borderWidth: 7,
    marginTop: 20,
    borderColor: "#109aa9",
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "white",
  },
  schoolLogo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: "#109aa9",
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "white",
  },
  velg: {
    top: 310,
    fontSize: 22,
    color: "black",
//    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Helvetica"
  },
  interesser1: {
    top: 330,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  interesser2: {
    top: 150,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",

  },
  school1: {
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
  },
  school2: {
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
  },
  school3: {
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
  },
  school4: {
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
  },
  school5: {
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
  },
  school6: {
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    width: 90,
    borderRadius: 60,
  },
  text: {
    fontSize: 16,
    top: 92,
    fontFamily: "Helvetica",
  },
})
