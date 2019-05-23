import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Switch} from 'react-native';

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
                    <Text style={{color: "#000000", marginLeft: 20, marginTop: 20, fontSize: 16}}>Find Group</Text>
                    <Text style={{color: "#000000", marginLeft: 20, marginTop: 20,}}>Size of find group</Text>
                    <Text style={{color: "#2D4352", marginLeft: 280, marginTop: -18,}}>minimum 1</Text>
                    <View style={{backgroundColor: "#d8d8d8", height: 2, marginTop: 20,}}></View>
                    <Text style={{color: "#000000", marginLeft: 20, marginTop: 20, fontSize: 16}}>Interest</Text>
                    <Text style={{color: "#000000", marginLeft: 20, marginTop: 20,}}>Edit:</Text>
                    <Switch style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }], fontSize: 16, marginLeft: 50, marginTop: -24, }}/>
                    <View style={styles.middleHeader}>
                        <Text style={styles.generalText}>Notification</Text>
                    </View>
                    <Text style={{color: "#000000", marginLeft: 20, marginTop: 20,}}>Push notification:</Text>
                    <Switch style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }], fontSize: 16, marginLeft: 150, marginTop: -24, }}/>
                    <View style={{backgroundColor: "#d8d8d8", height: 2, marginTop: 10,}}></View>
                    <Text style={{color: "#000000", marginLeft: 20, marginTop: 20,}}>SMS notification:</Text>
                    <Switch style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }], fontSize: 16, marginLeft: 150, marginTop: -24, }}
                    value={true}/>

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
        height: 50,
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
        marginTop: 15,

        marginLeft: 20,
    },

});