// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArtPLeWEbbK2jcYlisgnIZbFcL_5HSmms",
  authDomain: "ai-trip-88395.firebaseapp.com",
  projectId: "ai-trip-88395",
  storageBucket: "ai-trip-88395.appspot.com",
  messagingSenderId: "780230264251",
  appId: "1:780230264251:web:418e282ad3ef7111f7f09e",
  measurementId: "G-KX0BB3N6G2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
