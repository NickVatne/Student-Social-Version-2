
import { createBottomTabNavigator, createAppContainer } from "react-navigation"

import Home from "@components/Home"
import Profile from "@components/Profile"

const nav = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Home",
    }),
  },

  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Profile",
    }),
  },

},
{
  headerMode: "screen",
})

export default createAppContainer(nav)