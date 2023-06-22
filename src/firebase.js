// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh1p7AyC0rZm6JM0Jjg4Gocik3g9Hwgkw",
  authDomain: "netflix-clone-42877.firebaseapp.com",
  projectId: "netflix-clone-42877",
  storageBucket: "netflix-clone-42877.appspot.com",
  messagingSenderId: "682092821115",
  appId: "1:682092821115:web:d7f97e7a3be0d2ce8c80de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);