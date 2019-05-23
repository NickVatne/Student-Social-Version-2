import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';

export default class ProfileEdit extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topHeader}>
                    <Text style={styles.titleText}>Edit profile</Text>
                    <Image style={styles.picture}
                           source={require('../imgs/profileEdit.png')}/>
                    <Image style={styles.plus}
                           source={require('../imgs/plus.png')}/>
                </View>
                <View style={styles.body}>

                    <View style={styles.middleHeader}>
                       <Text style={styles.generalText}>General</Text>
                    </View>


                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    topHeader: {
        backgroundColor: "#2D4352",
        height: 60,

    },
    middleHeader: {
        backgroundColor: "#F8F8F8",
        height: 60,
    },
    picture: {
        borderColor: "#2D4352",
        marginTop: 100,
        height: 130,
        width: 130,
        borderWidth: 4,
        borderRadius: 50,
        alignSelf: 'center',
        position: 'absolute',
    },
    plus: {
        left: 200,
        top: 200,
        position: 'absolute',
    },
    body: {
        marginTop: 200,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    titleText: {
        fontSize: 16,
        color: "#FFFFFF",
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    generalText: {
        fontSize: 16,
        color: "#000000",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },

});