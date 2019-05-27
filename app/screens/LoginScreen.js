import React, {Component} from 'react';
import {
    Appregistry,StyleSheet,Text,View,Navigator,TextInput,TouchableOpacity,AsyncStorage, SafeAreaView, Image
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Image source={require('../imgs/meeting-with-a-friend.png')} style={styles.logoImage}/>
                    <Text style={styles.logo}>E V E N T O R</Text>


                    <TextInput underlineColorAndroid='transparent' style={styles.inputContainer}
                               placeholder='username'
                               placeholderTextColor='#ffffff'>
                    </TextInput>

                    <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.inputContainer}
                               placeholder='password'
                               placeholderTextColor='#ffffff'>
                    </TextInput>


                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=> this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={styles.signupCont}>
                        <Text style={styles.signupText}>Not registered yet? Signup</Text>
                        <Text style={styles.signupButton}> here</Text>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455a64',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    logoImage:{
        marginTop: 40,
        width: 100,
        height: 100,
    },
    signupCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },
    signupButton: {
        color: '#00bfff',
        fontSize: 16,
        fontWeight: '500',
    },
    logo: {
        color: 'white',
        fontSize: 39,
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 8,
        marginBottom: 15,
        padding: 20,
    },
    inputContainer: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,

    },
    input: {

    },
    buttonContainer: {
        width: 300,
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

