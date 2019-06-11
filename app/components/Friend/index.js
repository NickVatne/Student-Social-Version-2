
import React from "react"
import { StyleSheet, TouchableHighlight, View, Text, Image } from "react-native"

const DEFAULT_IMAGE = "https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-stock-vector-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors.jpg?ver=6"

export default class Friend extends React.Component {
  onPress = () => this.props.onPress(this.props.doc)

  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.onPress}
      >
        <View style={styles.container}>
          <Image source={{ uri: this.props.doc.get("picture") || DEFAULT_IMAGE }} style={styles.image} />
          <Text style={styles.text}>{this.props.doc.id}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e7f4f6",
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },

  text: {
    paddingHorizontal: 10,
    color: "black",
    fontSize: 22,
  },
})
