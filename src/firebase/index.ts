import firebase from 'firebase/app';
import '@firebase/firestore';
require('firebase/auth')

export const app_firebase = {
    apiKey: "AIzaSyBE2Zj8ImaeIaH2T-XAnr4_Ypht_1277Tg",
    authDomain: "react-cinema-735a0.firebaseapp.com",
    projectId: "react-cinema-735a0",
    storageBucket: "react-cinema-735a0.appspot.com",
    messagingSenderId: "654073045038",
    appId: "1:654073045038:web:415dbd7ab68a2bfe883fbf"
};

firebase.initializeApp(app_firebase)

export const getFirestore = () => {
    return firebase.firestore();
}

export const fb = firebase;
