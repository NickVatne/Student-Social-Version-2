import React from "react"
import {StyleSheet, View, Text, SafeAreaView} from "react-native"

import firebase from "@modules/Firebase"

import Interest from "../../components/Interest"
import Friend from "../../components/Friend"

export default class InterestComponent extends React.Component {
    state = {
        uri: "",
        text: "",
    }

    componentDidMount = async () => {
        try {
            console.log("Loading data for interest " + this.props.id)

            const doc = await firebase.firestore().doc("interests/" + this.props.id).get()
            if (!doc.exists) throw new Error("Interest does not exist")

            this.setState({...doc.data()})
        } catch (err) {
            console.log("Failed to get data for interest " + this.props.id + ": ", err)
        }
    }

    onFriendPress = doc => {
        const theirUid = doc.id
        const myUid = firebase.auth().currentUser.uid

        const path = [myUid, theirUid].sort().join("_")

        this.props.openChat("chats/private/" + path)
    }

    renderFriend = doc => <Friend key={doc.id} doc={doc} onPress={this.onFriendPress}/>

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.interestContainer}>
                        <Interest id={this.props.id} uri={this.state.uri} text={this.state.text}/>
                    </View>
                    {this.props.docs.map(this.renderFriend)}
                </View>
                <View>
                    <View>
                        
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: "#109aa9",
    },

    interestContainer: {
        alignItems: "center",
    },

    friend: {
        paddingVertical: 5,
    },
    friendHeader: {
        fontSize: 20,
    },
})
