import {createBottomTabNavigator, createAppContainer} from "react-navigation"

import Home from "@components/Home"
import Profile from "@components/Profile"
import Login from "./Login";

const nav = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                headerTitle: "Home",
            }),
        },

        Profile: {
            screen: Profile,
            navigationOptions: ({navigation}) => ({
                headerTitle: "Profile",
            }),
        },
        Login: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                headerTitle: "Login",
            }),
        },
    },

    {
        headerMode: "screen",
    })

export default createAppContainer(nav)