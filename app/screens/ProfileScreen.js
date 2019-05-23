import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button} from 'react-native';

export default class ProfileScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.name}>Mikke Mus</Text>
                    <Text style={styles.school}> - Høyskolen Kristiania - </Text>

                </View>
                <Image style={styles.avatar} source={require('../imgs/student2.jpg')}/>
                <View style={styles.body}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=> this.props.navigation.navigate('ProfileEdit')}>
                        <Text style={styles.editors}>Edit my Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=> this.props.navigation.navigate('HomeScreen')}>
                        <Text style={styles.editors}>Edit my Preferences</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#455a64',
        height:250,
        alignItems: 'center',
    },
    avatar: {
        width: 135,
        height: 135,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'transparent',
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop: 40,
    },
    name: {
        marginTop: 200,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    school: {
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic'
    },
    editors: {
        color: '#fff',
        fontWeight: 'bold',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop: 35,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:50,
        height:45,
        left: 75 ,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: '#455a64',
    },
});