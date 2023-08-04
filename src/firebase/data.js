// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7SBbqQU7lYZoh7nwisYoJtzgLGe2cNr0",
    authDomain: "proyectofinalreactmendez.firebaseapp.com",
    projectId: "proyectofinalreactmendez",
    storageBucket: "proyectofinalreactmendez.appspot.com",
    messagingSenderId: "665052187178",
    appId: "1:665052187178:web:af315b4d379b7bc9bed153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);