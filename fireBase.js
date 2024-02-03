// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZaA5_TeKNYZGgwtoFVva7_UdV8NET5NE",
  authDomain: "hackathon---bike-the-big-apple.firebaseapp.com",
  projectId: "hackathon---bike-the-big-apple",
  storageBucket: "hackathon---bike-the-big-apple.appspot.com",
  messagingSenderId: "861770965627",
  appId: "1:861770965627:web:235cc4fd996d69e57ef8de",
  measurementId: "G-5Z8N96H9DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);