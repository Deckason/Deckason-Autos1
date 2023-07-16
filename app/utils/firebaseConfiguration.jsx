// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl6UmzmqlSolHIhGv7mJeqFFF-wJrFkkE",
  authDomain: "deckason-autos.firebaseapp.com",
  projectId: "deckason-autos",
  storageBucket: "deckason-autos.appspot.com",
  messagingSenderId: "890402142608",
  appId: "1:890402142608:web:75e4dc85345d73c97b1b15",
  measurementId: "G-DFXW3D92Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
export const authentication = getAuth(app)
export const storage = getStorage(app)