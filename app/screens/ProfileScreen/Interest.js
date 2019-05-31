
import React from "react"
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native"

export default props => (
  <TouchableOpacity onPress={() => props.onPress(props.id)}>
    <View style={[styles.container, { backgroundColor: props.active ? "green" : "#2D4452" }]}>
      <Image style={styles.image} source={{ uri: props.uri }} resizeMode="contain" />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: 120,
    margin: 10,
  },

  image: {
    height: 60,
    width: 60,
  },

  text: {
    color: "white",
  },
})
