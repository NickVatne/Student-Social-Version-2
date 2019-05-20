
import React from "react"
import { StyleSheet, SafeAreaView, Text, Dimensions } from "react-native"

export default class Profile extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "mistyrose",
  }
})