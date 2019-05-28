import React from "react";
import {StyleSheet, Text, View, TextInput, Switch} from "react-native";
import DatePick from '../components/DatePick'
import TimePick from "../components/TimePick";

export default class NewEventScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'New event',
            date: new Date(),
            address: 'Oslogate 1',
            notificationSwitchValue: false,
        }
    }

    static navigationOptions = {
        header: null,
        title: "Home"
    };


    toggleSwitch = (value) => {
        this.setState({notificationSwitchValue: value})
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.state.title}</Text>
                </View>
                <View style={styles.informationAreaContainer}>

                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Event name:</Text>
                        <TextInput
                            placeholder='name your event'
                            onChangeText={(title) => this.setState({title})}
                            value={this.state.title}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Pick date:</Text>
                        <DatePick mode="date"/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Time:</Text>
                        <TimePick/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Address:</Text>
                        <TextInput
                            onChangeText={(address) => this.setState({address})}
                            value={this.state.address}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Fargekode: </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Varslingar:</Text>
                        <Switch style={styles.optionsItemRight}
                                onValueChange = {this.toggleSwitch}
                                value = {this.state.notificationSwitchValue}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Inviter flere deltakere</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    header: {
        alignSelf: 'stretch',
        backgroundColor: "#455A64",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        flex: 2,
    },
    headerText: {
        color: "white",
        fontSize: 18,
        padding: 26,
        marginTop: 23,
        alignContent: "center",
        justifyContent: "center"
    },
    informationAreaContainer: {
        backgroundColor: "#FFF",
        flex: 3,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        paddingRight: 20,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
    },
    optionsItemLeft: {
        marginLeft: 5,

    },
    optionsItemRight: {
        marginRight: 5,
    }
});
