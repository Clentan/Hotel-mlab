
///
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTLSj1O3Xhe_7fTdMF1w3D4FeWIEKu9M",
  authDomain: "hotel-b0bcc.firebaseapp.com",
  projectId: "hotel-b0bcc",
  storageBucket: "hotel-b0bcc.appspot.com",
  messagingSenderId: "941179795441",
  appId: "1:941179795441:web:a5c5df41a2a19d7a0cb650",
  measurementId: "G-6B7ZHDK0BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();