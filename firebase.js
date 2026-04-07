// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOcpZ_nDm_PaIVxK55Os_zDUbgPBBDVFw",
  authDomain: "blogwebsiteb-1af80.firebaseapp.com",
  projectId: "blogwebsiteb-1af80",
  storageBucket: "blogwebsiteb-1af80.firebasestorage.app",
  messagingSenderId: "802955804484",
  appId: "1:802955804484:web:0b2b7ca2ce412638066111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);
