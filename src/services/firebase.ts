import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCIRWeXzmFNK4akvYq4sIx8v22Pji2P8aI",
    authDomain: "todolist-27aa0.firebaseapp.com",
    databaseURL: "https://todolist-27aa0-default-rtdb.firebaseio.com",
    projectId: "todolist-27aa0",
    storageBucket: "todolist-27aa0.appspot.com",
    messagingSenderId: "894407098515",
    appId: "1:894407098515:web:d067764d0d3ae376290d66"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase }