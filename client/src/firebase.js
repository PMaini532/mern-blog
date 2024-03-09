// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merin-blog.firebaseapp.com",
  projectId: "merin-blog",
  storageBucket: "merin-blog.appspot.com",
  messagingSenderId: "831853912034",
  appId: "1:831853912034:web:88f5fae6f24a6b620ae3bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
