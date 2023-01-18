// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-xi9BRYLOfMLhFOeeeoVekBGeoYt9g4",
  authDomain: "abdur-rahman-3b5b4.firebaseapp.com",
  projectId: "abdur-rahman-3b5b4",
  storageBucket: "abdur-rahman-3b5b4.appspot.com",
  messagingSenderId: "1047281929957",
  appId: "1:1047281929957:web:2cac890bd0d12970924e0c",
  measurementId: "G-5E15LC0BZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
