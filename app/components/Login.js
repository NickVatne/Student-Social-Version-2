import React, {Component} from 'react';
import {
    Appregistry,StyleSheet,Text,View,Navigator,Image,TextInput,TouchableOpacity,AsyncStorage, SafeAreaView
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../imgs/background.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <Text style={styles.logo}>- HALLOOO -</Text>

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
                </Image>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
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
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderColor: '#FFF',
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