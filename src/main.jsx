import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0HUhnnHEbWf1O9IQgz9v9_t9846KOLJ4",
  authDomain: "proyecto-final-react-mendez.firebaseapp.com",
  projectId: "proyecto-final-react-mendez",
  storageBucket: "proyecto-final-react-mendez.appspot.com",
  messagingSenderId: "125568030724",
  appId: "1:125568030724:web:bf976e94c9b26a21907d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
