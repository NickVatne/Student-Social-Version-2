
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
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
    backgroundColor: "#F1F0F0",
    marginLeft: 20,
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
})
