// firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLTLSj1O3Xhe_7fTdMF1w3D4FeWIEKu9M",
  authDomain: "hotel-b0bcc.firebaseapp.com",
  projectId: "hotel-b0bcc",
  databaseURL: 'https://hotel-b0bcc-default-rtdb.firebaseio.com/',
  storageBucket: "hotel-b0bcc.appspot.com",
  messagingSenderId: "941179795441",
  appId: "1:941179795441:web:48c7b051a04112d90cb650",
  measurementId: "G-SEB1JM1Z2L"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);

export default app;
