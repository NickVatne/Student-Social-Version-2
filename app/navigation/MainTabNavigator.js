import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from "../screens/Chat/ChatScreen";
import ProfileEdit from "../screens/ProfileEdit";
import NewEventScreen from "../screens/NewEventScreen";
import ChatNavigator from "../screens/Chat/ChatNavigator"
import ChatScreen2 from "../screens/Chat/ChatScreen2";
import ChooseSchool from "../screens/ChooseSchool";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Chat: ChatScreen,
    ChatNav: ChatNavigator,
    Chat2: ChatScreen2,
    School: ChooseSchool,


});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const LoginStack = createStackNavigator({
    Login: LoginScreen,
});

LoginStack.navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-clipboard' : 'md-clipboard'}
        />
    ),
};

const NewEventStack = createStackNavigator({
    NewEvent: NewEventScreen,
});

NewEventStack.navigationOptions = {
    tabBarLabel: 'New Event',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
    ),
};

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
    ProfileEdit: ProfileEdit,

});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
    ),
};

const ChatStack = createStackNavigator({
    Chat: ChatScreen,
});

/*ChatStack.navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
        />
    ),
};*/

export default createBottomTabNavigator({
    HomeStack,
    ProfileStack,
    NewEventStack,
    LoginStack,
    //ChatStack,
});
