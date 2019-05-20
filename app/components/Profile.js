
import React from "react"
import {StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity} from "react-native"

export default class Profile extends React.Component<Props> {

  componentDidMount() {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text>Login</Text>
        </TouchableOpacity>

        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "mistyrose",
  },
  text: {
    textAlign: "center",
    height: 20
  },
  btn: {
    textAlign: "center",
    height: 20,
    position: "relative",

  }
});