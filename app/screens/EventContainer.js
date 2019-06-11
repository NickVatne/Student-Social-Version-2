import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import EventScreen from './EventScreen.js'
import Chat from './ChatMain/index.js'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        //state to manage the screen visible at a time
        this.state = { val: 1 };
    }
    renderElement() {
        //You can add N number of Views here in if-else condition
        if (this.state.val === 1) {
            //Return the FirstScreen as a child to set in Parent View
            return <EventScreen />;
        } else {
            //Return the SecondScreen as a child to set in Parent View
            return <Chat/>;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    {/*To set the FirstScreen*/}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.setState({ val: 1 })}>
                        <Text style={{ color: '#ffffff' }}>Info</Text>
                    </TouchableOpacity>
                    {/*To set the SecondScreen*/}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.setState({ val: 2 })}>
                        <Text style={{ color: '#ffffff' }}>Chat</Text>
                    </TouchableOpacity>
                    {/*To set the ThirdScreen*/}
                </View>


                {/*View to hold the child screens
        which can be changed on the click of a button*/}
                <View style={{ backgroundColor: '#ffffff' }}>
                    {this.renderElement()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7f4f6',
        padding: 8,
        marginTop: 30,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#808080',
        padding: 10,
        margin: 2,
    },
});