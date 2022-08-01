// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwumLEyvb-ZJ0cDJfn2JovHe16_zpRGm8",
  authDomain: "first-project-2e6da.firebaseapp.com",
  projectId: "first-project-2e6da",
  storageBucket: "first-project-2e6da.appspot.com",
  messagingSenderId: "650226493369",
  appId: "1:650226493369:web:e34f37cccfb7237bcd7868",
  measurementId: "G-F05S339PKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);