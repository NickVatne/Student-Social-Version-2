
import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"


// console.log(firebase)
// console.log(firebase.app())

const firebaseConfig = {
    apiKey: "AIzaSyBhNyBXa0WBxhEpBBOy5sOngZrhgH09xbU",
    authDomain: "studentsocial-f7e69.firebaseapp.com",
    databaseURL: "https://studentsocial-f7e69.firebaseio.com",
    projectId: "studentsocial-f7e69",
    storageBucket: "studentsocial-f7e69.appspot.com",
    messagingSenderId: "398762582509",
    appId: "1:398762582509:web:0b7af139a7623517"
};
//initializeApp

firebase.initializeApp(firebaseConfig);


export default firebase
