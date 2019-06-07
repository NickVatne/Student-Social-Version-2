
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
    backgroundColor: "#acc3d2",
    borderColor: "#2D4352",
    borderWidth: 5,
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 * 0.5,
    justifyContent: "center",
    alignItems: "center",
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  text: {
    color: "#2D4352",
    fontSize: 20,
  },
})
