// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG8MWKInBo4kykoCliSwXyj1AC760-EOk",
  authDomain: "town-graphy.firebaseapp.com",
  projectId: "town-graphy",
  storageBucket: "town-graphy.appspot.com",
  messagingSenderId: "963199350508",
  appId: "1:963199350508:web:24bb85bd0d191b08f797c9",
  measurementId: "G-7EENLTH288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);