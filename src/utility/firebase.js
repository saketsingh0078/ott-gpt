// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH2kBnoa89Dmp2x27g6bWP7GKH8rWqd70",
  authDomain: "netflixgpt-55503.firebaseapp.com",
  projectId: "netflixgpt-55503",
  storageBucket: "netflixgpt-55503.appspot.com",
  messagingSenderId: "437063604975",
  appId: "1:437063604975:web:654b99f87e9e187069d91a",
  measurementId: "G-CZ2ZP8TRF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
