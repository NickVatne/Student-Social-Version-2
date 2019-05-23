import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button} from 'react-native';

export default class ProfileScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.description}>Nicolai Vatne</Text>
                    <Text style={styles.description}>Student</Text>
                    <Text style={styles.description}>Student at Kristiania University College</Text>

                </View>
                <View style={styles.body}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=> this.props.navigation.navigate('ProfileEdit')}>
                        <Text>Edit my Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=> this.props.navigation.navigate('HomeScreen')}>
                        <Text>Edit my Preferences</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00bfff",
        height: 240,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
        marginLeft: 45,
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 35,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 50,
        height: 45,
        left: 75,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});