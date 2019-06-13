import React from "react"
import { Platform, Button } from "react-native"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ProfileEdit from "../screens/ProfileEdit"
import NewEventScreen from "../screens/NewEventScreen"
import SchoolScreen from "../screens/SchoolScreen"

import FriendResults from "../screens/FriendResults" // Shows people with same interests

import ChatMain from "../screens/ChatMain" // Chatroom picker screen
import Chat from "../screens/Chat/Chat"
import EventScreen from "../screens/EventScreen"; // Actual chatroom screen
import SchoolPicker from "../screens/Schoolpicker"

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
    },
  },

  FriendResults: {
    screen: FriendResults,
    navigationOptions: {
      title: "Results",
    },
  },


  // Chat screen on the home tab
  HomeChat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("userId"),
    }),
  },

  // Event Screen on the home tab
  HomeEvent: {
    screen: EventScreen,
    navigationOptions: {
      title: "Event",
    },
  },
}, {
  navigationOptions: {
    headerRight: ({ navigation }) => <Button title="Settings" />,
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

const ChatStack = createStackNavigator({
  ChatMain: {
    screen: ChatMain,
    navigationOptions: {
      title: "Choose chatroom",
    },
  },

  // Chat screen on the Chat tab
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("userId"),
    }),
  },

  // Event Screen on the chat tab
  ChatEvent: {
    screen: EventScreen,
    navigationOptions:{
      title: "Event",
    },
  },
}, {
  navigationOptions: {
    tabBarLabel: "Events",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-chatbubbles" : "md-chatbubbles"}
      />
    ),
  },
})


const SchoolStack = createStackNavigator({
  School: {
    screen: SchoolScreen,
    navigationOptions: {
      title: "School",
    },
  },
  SchoolPicker: {
    screen: SchoolPicker,
    navigationOptions: {
      title: "Browse",
    },
  },
}, { navigationOptions: {
    tabBarLabel: "School",
        tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                  ? "ios-school" : "md-school"
            }
        />
    ),
  },
})


const NewEventStack = createStackNavigator( {
  NewEvent: {
  screen: NewEventScreen,
  navigationOptions: {
    title: "New Event",
    },
  },
  Event: {
    screen: EventScreen,
    navigationOptions: {
      title: "Event",
    },
  },
}, { navigationOptions: {
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
  ChatStack,
  NewEventStack,
  ProfileStack,
  SchoolStack,
})
