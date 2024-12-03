// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbFNCXx1r9R3YG69r0dXXq5xOk-Ht4HHQ",
  authDomain: "coffee-store-46a2e.firebaseapp.com",
  projectId: "coffee-store-46a2e",
  storageBucket: "coffee-store-46a2e.firebasestorage.app",
  messagingSenderId: "82835448280",
  appId: "1:82835448280:web:d113d5341b14bf550852ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;