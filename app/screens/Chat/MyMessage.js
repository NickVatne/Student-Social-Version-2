
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { moderateScale } from "react-native-size-matters"

export default props => (
  <View style={styles.container}>
    <Text>{props.doc.get("text")}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0099FF",
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 20,
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
})
