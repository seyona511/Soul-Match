
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByDApZyib7iC1yn0gakqskLYAz_xYmqcQ",
  authDomain: "soul-match-4acfc.firebaseapp.com",
  projectId: "soul-match-4acfc",
  storageBucket: "soul-match-4acfc.firebasestorage.app",
  messagingSenderId: "18239620941",
  appId: "1:18239620941:web:54038772dfd6547f0ed904",
  measurementId: "G-Q3052LX6CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
