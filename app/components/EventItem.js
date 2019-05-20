
import React from "react"
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from "react-native"

export default ({ doc }) => {
  const data = doc.data()
  
  return (
    <View style={styles.container}>
      <Text>{data.timestamp.toLocaleString("NO")}</Text>
      <Text>-------------------------------------</Text>
      <Text>This is a post done by a post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 80,
    backgroundColor: "white",

    justifyContent: "center",
    padding: 10,
  },

  text: {
    color: "#4b4b4b",
    fontSize: 18,
  }
})