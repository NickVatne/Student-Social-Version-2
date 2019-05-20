import {createBottomTabNavigator, createAppContainer} from "react-navigation"

import Home from "@components/Home"
import Profile from "@components/Profile"
import Login from "./Login"
import Chat from "./Chat"

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
    Chat: {
            screen: Chat,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Chat"
        })
    }
    },

    {
        headerMode: "screen",
    })

export default createAppContainer(nav)