// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtDoLa0Gi5rhS8ufxob0EWOJbmYKNVRu4",
  authDomain: "shower-db-bbevent.firebaseapp.com",
  projectId: "shower-db-bbevent",
  storageBucket: "shower-db-bbevent.appspot.com",
  messagingSenderId: "789782028937",
  appId: "1:789782028937:web:c4773f20ad386af1f01c58",
  measurementId: "G-8K4KN7QJT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

export { db };
