import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class ChatNavigator extends Component {

    render() {
        return (
            <View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat')}
                style={styles.container}>
                <Text> Java Eksamen</Text>
                <Text> Participants: </Text>
                <Text> Nicolai, Nora, Kevin, Martin, Birgitte</Text>
                <Image
                    style={styles.insidepic}
                    source={require('../../imgs/java.jpeg')}/>
            </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Chat2')}
                    style={styles.container}>
                    <Text>Party</Text>
                    <Text>Participants: </Text>
                    <Text>Ole, Per, Morten, Jan Erik </Text>
                    <Image
                        style={styles.insidepic}
                        source={require('../../imgs/drink_feature-656x453.png')}/>
                </TouchableOpacity>
            </View>

    )
    }
}
    const styles = StyleSheet.create({
        container: {
            width: Dimensions.get("window").width,
            height: 150,
            backgroundColor: "white",
            justifyContent: "center",
            padding: 10,
        },
        insidepic: {
            height: 100,
            width: 60,
            position: 'relative',
            left: 300,
        }
    });