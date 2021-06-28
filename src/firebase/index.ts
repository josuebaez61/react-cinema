import firebase from 'firebase/app';
import '@firebase/firestore';

export const app_firebase = firebase.initializeApp({
    apiKey: "AIzaSyBE2Zj8ImaeIaH2T-XAnr4_Ypht_1277Tg",
    authDomain: "react-cinema-735a0.firebaseapp.com",
    projectId: "react-cinema-735a0",
    storageBucket: "react-cinema-735a0.appspot.com",
    messagingSenderId: "654073045038",
    appId: "1:654073045038:web:415dbd7ab68a2bfe883fbf"
});

export const getFirestore = () => {
    return firebase.firestore(app_firebase);
}
