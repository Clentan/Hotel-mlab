//allow to store data of the booked things// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:941179795441:web:48c7b051a04112d90cb650",
  measurementId: "G-SEB1JM1Z2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);