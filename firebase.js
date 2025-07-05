// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf6D1ou1RZFR-BT3bCgPz2UxYiJMrZ-9k",
  authDomain: "balles-clientes.firebaseapp.com",
  projectId: "balles-clientes",
  storageBucket: "balles-clientes.firebasestorage.app",
  messagingSenderId: "355531749697",
  appId: "1:355531749697:web:eda00eaabf13a185e009c0",
  measurementId: "G-V04HFJSCZ4"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
