
import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default props => (
  <View style={styles.container}>
    <Text>{props.doc.get("text")}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 20,
  },
})
