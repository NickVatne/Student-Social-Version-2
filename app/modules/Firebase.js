
import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"


// console.log(firebase)
// console.log(firebase.app())

var firebaseConfig = {
    apiKey: "AIzaSyAbeE0RkT0pROEaDvYoAi1Hb8poyJ1nNoM",
    authDomain: "studentsocial16.firebaseapp.com",
    databaseURL: "https://studentsocial16.firebaseio.com",
    projectId: "studentsocial16",
    storageBucket: "studentsocial16.appspot.com",
    messagingSenderId: "731593389026",
    appId: "1:731593389026:web:a6ac7de5d8d47805"
};
//initializeApp

firebase.initializeApp(firebaseConfig);


export default firebase
