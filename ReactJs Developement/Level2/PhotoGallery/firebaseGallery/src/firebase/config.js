// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNxV1mnLbcNQWoEgs0wial6LpZc1FCPtI",
  authDomain: "fir-firegallery.firebaseapp.com",
  projectId: "fir-firegallery",
  storageBucket: "fir-firegallery.appspot.com",
  messagingSenderId: "923027099680",
  appId: "1:923027099680:web:8727d4d2466e124f5f2c45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  var projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();


export { projectFirestore, projectStorage };