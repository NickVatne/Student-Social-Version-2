import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native"

import firebase from "@modules/Firebase"
import BigButton from "../components/BigButton"
import EventItem from "../components/EventItem"

export default class HomeScreen extends React.Component {
    static renderSeparator = (sectionId, rowId) => <View style={styles.separator} key={rowId} />
    static keyExtractor = (item, index) => index.toString()
    static renderItem = ({ item }) => <EventItem doc={item} />

    state = {
      events: [],
      userDocs: [],
    }


    componentDidMount() {
      firebase.firestore().collection("events")
        .orderBy("timestamp", "asc")
        .onSnapshot(this.onSnapshot, this.onQueryError)
    }

    onSnapshot = qss => {
      console.log("qss: ", qss)
      const events = qss.docs.filter(doc => doc.exists)
      console.log("Setting events: ", events)
      this.setState({ events })
    }

    // TODO = [ Fix positioning to be centered to screen on line 59, 65, 70  ]
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 1, width: Dimensions.get("window").width }} />
          <BigButton onPress={() => this.props.navigation.navigate("FriendResults")} />
          <View style={{ borderBottomColor: "black", borderBottomWidth: 1, width: Dimensions.get("window").width }} />

          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ChatMain")}
              style={styles.nav}
            >
              <View style={{ flex: 1, flexDirection: "row", position: "relative" }}>
                <Image
                  source={require("../imgs/baseline_chat_black_18dp.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ChatMain")}
              style={styles.nav}
            >
              <View style={{ flex: 1, flexDirection: "row", position: "relative" }}>
                <Image
                  // TODO Make Settings Screen
                  source={require("../imgs/baseline_settings_black_18dp.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("School")}
              style={styles.nav}
            >
              <View style={{ flex: 1, flexDirection: "row", position: "relative" }}>
                <Image
                  source={require("../imgs/baseline_school_black_18dp.png")}
                />
              </View>
            </TouchableOpacity>

          </View>

          <FlatList
            style={styles.list}
            data={this.state.events}
            renderItem={HomeScreen.renderItem}
            ItemSeparatorComponent={HomeScreen.renderSeparator}
            keyExtractor={HomeScreen.keyExtractor}
          />

        </SafeAreaView>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
    backgroundColor: "white",
  },

  list: {
    width: Dimensions.get("window").width,
    flex: 1,
  },

  separator: {
    width: Dimensions.get("window").width,
    height: 1,
  },
  nav: {
    backgroundColor: "transparent",
    marginTop: 25,
    height: 50,
    width: 75,
  },
  iconmng: {
    alignItems: "center",
  },
})
