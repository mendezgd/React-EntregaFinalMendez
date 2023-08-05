import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuRRmSDEXCjAcj49to1F5FFwDKlSf1oN8",
    authDomain: "proyectfinalreactmendez.firebaseapp.com",
    projectId: "proyectfinalreactmendez",
    storageBucket: "proyectfinalreactmendez.appspot.com",
    messagingSenderId: "231299241710",
    appId: "1:231299241710:web:6234433a325e76251fc5ff"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
