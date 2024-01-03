// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyD5bfYxLT56NC63ia8dOcsfMyBgCwUvAvo",
  authDomain: "jagdamba-583c3.firebaseapp.com",
  projectId: "jagdamba-583c3",
  storageBucket: "jagdamba-583c3.appspot.com",
  messagingSenderId: "364506748404",
  appId: "1:364506748404:web:be778e1b806981d71e55a1",
  measurementId: "G-JX6ZRV0ZW9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);