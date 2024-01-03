import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5bfYxLT56NC63ia8dOcsfMyBgCwUvAvo",
  authDomain: "jagdamba-583c3.firebaseapp.com",
  projectId: "jagdamba-583c3",
  storageBucket: "jagdamba-583c3.appspot.com",
  messagingSenderId: "364506748404",
  appId: "1:364506748404:web:be778e1b806981d71e55a1",
  measurementId: "G-JX6ZRV0ZW9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
