import React from "react"
import { Platform } from "react-native"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ProfileEdit from "../screens/ProfileEdit"
import NewEventScreen from "../screens/NewEventScreen"
import ChooseSchool from "../screens/ChooseSchool"

import FriendResults from "../screens/FriendResults" // Shows people with same interests

import ChatMain from "../screens/ChatMain" // Chatroom picker screen
import Chat from "../screens/Chat/Chat" // Actual chatroom screen

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("userId"),
    }),
  },
  ChatMain: {
    screen: ChatMain,
    navigationOptions: {
      title: "Choose chatroom",
    },
  },
  School: {
    screen: ChooseSchool,
    navigationOptions: {
      title: "Choose your school",
    },
  },

  FriendResults: {
    screen: FriendResults,
    navigationOptions: {
      title: "Results",
    },
  },
}, {
  navigationOptions: {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === "ios"
            ? `ios-information-circle${focused ? "" : "-outline"}`
            : "md-information-circle"
        }
      />
    ),
  },
})

const NewEventStack = createStackNavigator({
  NewEvent: {
    screen: NewEventScreen,
    navigationOptions: {
      title: "New event",
    },
  },
}, {
  navigationOptions: {
    tabBarLabel: "New Event",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-add" : "md-add"}
      />
    ),
  },
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile",
    },
  },
  ProfileEdit: {
    screen: ProfileEdit,
    navigationOptions: {
      title: "Edit your profile",
    },
  },
}, {
  navigationOptions: {
    tabBarLabel: "Profile",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-person" : "md-person"}
      />
    ),
  },
})

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  NewEventStack,
})
