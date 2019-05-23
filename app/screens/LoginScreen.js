import React, {Component} from 'react';
import {
    Appregistry,StyleSheet,Text,View,Navigator,ImageBackground,TextInput,TouchableOpacity,AsyncStorage, SafeAreaView
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.logo}>- Login -</Text>

                        <View style ={styles.inputContainer}>

                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='username'
                                       placeholderTextColor='#ffffff'>
                            </TextInput>

                            <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                       placeholder='password'
                                       placeholderTextColor='#ffffff'>
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
        backgroundColor: '#455a64',
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',

    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 20,
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});