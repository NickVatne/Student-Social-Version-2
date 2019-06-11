
import React from "react"
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native"

const DEFAULT_TEXT = "Loading..."

export default props => (
  <TouchableOpacity onPress={() => props.onPress && props.onPress(props.id)}>
    <View style={[styles.container, { backgroundColor: props.active ? "#0c7b87" : "#333333" }]}>
      <Image style={styles.image} source={props.uri ? { uri: props.uri } : undefined} resizeMode="contain" />
      <Text style={styles.text}>{props.text || DEFAULT_TEXT}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 110,
    margin: 8,
  },

  image: {
    height: 55,
    width: 55,
  },
  text: {
    color: "white",
  },
})
