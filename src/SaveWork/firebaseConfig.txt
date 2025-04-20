import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
 import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB04mDctIxtWfdn8PzdaUfGk5Olu1X1j-M",
  authDomain: "smart-market-app-1707.firebaseapp.com",
  projectId: "smart-market-app-1707",
  storageBucket: "smart-market-app-1707.firebasestorage.app",
  messagingSenderId: "369567147736",
  appId: "1:369567147736:web:5f3015a8b34d3027e759ad",
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
