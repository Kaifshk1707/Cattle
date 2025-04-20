// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARy9_05Gmcrj2UjQ4OG96JWuuWbPuNEro",
  authDomain: "cattle-app-d5b6a.firebaseapp.com",
  projectId: "cattle-app-d5b6a",
  storageBucket: "cattle-app-d5b6a.firebasestorage.app",
  messagingSenderId: "999476150925",
  appId: "1:999476150925:web:656156de64d69a5896d8c4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
