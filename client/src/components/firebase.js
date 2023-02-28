// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWa7DHExtQ3KI_fAjy__BEKPh-HiJhwNU",
  authDomain: "arcadeasylum-46375.firebaseapp.com",
  projectId: "arcadeasylum-46375",
  storageBucket: "arcadeasylum-46375.appspot.com",
  messagingSenderId: "101550926492",
  appId: "1:101550926492:web:0d053dd8341f76b07b9b59",
  measurementId: "G-4YWLWLF3RB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
export const db = getFirestore(app);
