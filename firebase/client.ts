// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyC40_yOMsUYz6qPRijdtDt6EJv26A5OS0Q",
    authDomain: "rehearsify-cdce9.firebaseapp.com",
    projectId: "rehearsify-cdce9",
    storageBucket: "rehearsify-cdce9.firebasestorage.app",
    messagingSenderId: "3949838939",
    appId: "1:3949838939:web:adb686483e580805b4357e",
    measurementId: "G-1KK186NTBJ"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);