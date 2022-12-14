// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ns4ynQOqFi1cSFLJjYe2Sxw9Uq_WVpk",
  authDomain: "studend-managment-zen.firebaseapp.com",
  projectId: "studend-managment-zen",
  storageBucket: "studend-managment-zen.appspot.com",
  messagingSenderId: "293700769819",
  appId: "1:293700769819:web:68c26348b5a5fe99ad80be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
