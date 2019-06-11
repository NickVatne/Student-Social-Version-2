
import React from "react"
import { StyleSheet, View, TouchableHighlight, Text, Image } from "react-native"

export default ({ doc, onPress }) => (
  <TouchableHighlight
    underlayColor="transparent"
    onPress={() => onPress && onPress(doc)}
  >
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{doc.get("name")}</Text>
        <Text>Participants: </Text>
        <Text>{(doc.get("participants") || []).join(", ")}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={doc.get("picture") ? { uri: doc.get("picture") } : undefined}
        />
      </View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#e7f4f6",

  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 60,
  },
})
