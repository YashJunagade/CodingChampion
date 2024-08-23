// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-T0KmjIYOnTVTWzM-wydvsU4zNzV352k",
  authDomain: "unknown-bca.firebaseapp.com",
  projectId: "unknown-bca",
  storageBucket: "unknown-bca.appspot.com",
  messagingSenderId: "755061603694",
  appId: "1:755061603694:web:16e70653cc06b01e91157f",
  measurementId: "G-60HLFV9FD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore(app);

export default app;