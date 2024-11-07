import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAN2l0kTY1ok0GQc9902yY6Q_1_d3I-x6k",
    authDomain: "ecomercereactjs-373e6.firebaseapp.com",
    projectId: "ecomercereactjs-373e6",
    storageBucket: "ecomercereactjs-373e6.firebasestorage.app",
    messagingSenderId: "598434812600",
    appId: "1:598434812600:web:97ecc5b1139025e6d2da4d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db= getFirestore(app)