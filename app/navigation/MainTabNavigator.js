import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from "../screens/ChatScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
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

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
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

ChatStack.navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    ProfileStack,
    LoginStack,
    ChatStack,
});
