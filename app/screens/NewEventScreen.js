import React from "react";
import {StyleSheet, Text, View, TextInput, Switch} from "react-native";
import DatePick from '../components/DatePick'
import TimePick from "../components/TimePick";

export default class NewEventScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <Text style={styles.headerText}>Nytt Event</Text>
                </View>
                <View style={styles.informationAreaContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Velg dato:</Text>
                        <DatePick mode="date"/>

                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Tid:</Text>
                        <TimePick/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Adresse:</Text>
                        <TextInput
                            onChangeText={(address) => this.setState({address})}
                            value={this.state.address}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Fargekode:</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.optionsItemLeft}>Varslinger:</Text>
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
        backgroundColor: "#00BFFF",
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
