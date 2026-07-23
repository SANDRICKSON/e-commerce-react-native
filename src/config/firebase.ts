// src/config/firebase.ts
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFn3I_ryezxgrwZdhRL3h_H8RDlSyoBzM",
    authDomain: "react-native-e-commerce-cb5e9.firebaseapp.com",
    projectId: "react-native-e-commerce-cb5e9",
    storageBucket: "react-native-e-commerce-cb5e9.firebasestorage.app",
    messagingSenderId: "412981962547",
    appId: "1:412981962547:web:541f0cb5f4e744ece74046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };