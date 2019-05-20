
import React from "react"
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native"

export default ({ onPress }) => (
  <TouchableOpacity
    style={styles.touchable}
    onPress={onPress} 
  >
    <Text style={styles.text}>Find Friends</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  touchable: {
    margin: 20,
    backgroundColor: "#46adf3",
    borderColor: "black",
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  
  text: {
    color: "white",
    fontSize: 20,
  }
})