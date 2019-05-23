import React, {Component} from 'react';
import {
    Appregistry,StyleSheet,Text,View,Navigator,TextInput,TouchableOpacity,AsyncStorage, SafeAreaView, Image
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Image source={require('../imgs/profileEdit.png')} style={styles.logoImage}/>
                    <Text style={styles.logo}>Student.Social</Text>
                    <View style ={styles.inputContainer}>

                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                                   placeholder='username'>
                            Nicolai
                        </TextInput>

                        <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                   placeholder='password'>
                            **********
                        </TextInput>

                    </View>

                    <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        alignItems: 'center',

    },
    logoImage:{
        width: 50,
        height: 50,
    },
    logo: {
        color: 'white',
        fontSize: 39,
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 14,
        marginBottom: 19,
        padding: 20,
    },
    inputContainer: {
        margin: 19,
        marginBottom: 0,
        padding: 19,
        paddingBottom: 11,
        alignSelf: 'stretch',
        borderColor: '#2d4452',
        borderWidth: 1,
        backgroundColor: 'rgb(255,255,255)',
        borderBottomWidth: 1
    },
    input: {
        fontSize: 15,
        height: 39,
        padding: 11,
        marginBottom: 30,
        borderBottomWidth: 1
    },
    buttonContainer: {
        alignSelf: 'stretch',
        margin: 21,
        padding: 21,
        borderWidth: 1,
        borderColor: '#2d4452',
        backgroundColor: 'rgb(45,68,82)',
        borderRadius: 30
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white'
    }
});