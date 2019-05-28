import React from "react"
import {
    StyleSheet,
    SafeAreaView,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Props as horizontal,
    Image, Text
} from "react-native"

export default class ChooseSchool extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.SchoolName}>Schools</Text>
                </View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ChatNav')}>
                <Image style={styles.hkStor} source={require('../imgs/hk.png')}/>
                </TouchableOpacity>
                <Text style={styles.velg}>Velg Skole:</Text>
                <View style={styles.interesser1}>
                    <TouchableOpacity style={styles.foto}>
                        <Image style={styles.hkLiten} source={require('../imgs/hk.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foto2}>
                        <Image style={styles.bi} source={require('../imgs/bi.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foto3}>
                        <Image style={styles.hkLiten} source={require('../imgs/osloMet.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.interesser2}>
                    <TouchableOpacity style={styles.foto4}>
                        <Image style={styles.hkLiten} source={require('../imgs/uio.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foto5}>
                        <Image style={styles.hkLiten} source={require('../imgs/sonans.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foto6}>
                        <Image style={styles.hkLiten} source={require('../imgs/bjorknes.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    },
    SchoolName:{
        fontSize: 22,
        color: "#FFFFFF",
        marginTop: 20,
        textAlign: 'center'

    },
    header:{
        backgroundColor: "#2D4452",
        height:60,
    },
    hkStor: {
        width: 260,
        height: 260,
        borderRadius: 125,
        borderWidth: 7,
        marginTop: 20,
        borderColor: "#2D4452",
        alignSelf:'center',
        position: 'absolute',
        backgroundColor: 'white',
    },
    hkLiten: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 4,
        borderColor: "#2D4452",
        alignSelf:'center',
        position: 'absolute',
        backgroundColor: 'white',
    },
    bi: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 4,
        borderColor: "#2D4452",
        alignSelf:'center',
        position: 'absolute',
        backgroundColor: 'white',
    },
    osloMet: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 4,
        borderColor: "#2D4452",
        alignSelf:'center',
        position: 'absolute',
        backgroundColor: 'white',
    },
    velg:{
        top: 300,
        fontSize:22,
        color:"black",
        fontWeight:'400',
        textAlign: 'center',
    },
    interesser1:{
        top: 320,
        flex: 1,
        flexDirection: 'row',
        left: 7,
    },
    interesser2:{
        top: 430,
        flex: 1,
        flexDirection: 'row',
        left: 7,
    },
    foto:{
        height: 90,
        left: 25,
        alignItems: 'center',
        marginBottom: 20,
        width: 90,
        borderRadius: 60,
        backgroundColor: "#d8d8d8",
    },
    foto2:{
        height: 90,
        left: 50,
        alignItems: 'center',
        marginBottom: 20,
        width: 90,
        borderRadius: 60,
        backgroundColor: "#d8d8d8",
    },
    foto3:{
        height: 90,
        left: 75,
        alignItems: 'center',
        marginBottom: 20,
        width: 90,
        borderRadius: 60,
        backgroundColor: "#d8d8d8",
    },
    foto4:{
        height: 90,
        left: 25,
        alignItems: 'center',
        marginBottom: 20,
        width: 90,
        borderRadius: 60,
        backgroundColor: "#d8d8d8",
    },
    foto5:{
        height: 90,
        left: 50,
        alignItems: 'center',
        marginBottom: 20,
        width: 90,
        borderRadius: 60,
        backgroundColor: "#d8d8d8",
    },
    foto6:{
        height: 90,
        left: 75,
        alignItems: 'center',
        marginBottom: 20,
        width: 90,
        borderRadius: 60,
        backgroundColor: "#d8d8d8",
    },
});