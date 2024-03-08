// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN9UaUHmQodEGv6kWVib6MwBoodn5ImDw",
  authDomain: "swegroup20-app.firebaseapp.com",
  projectId: "swegroup20-app",
  storageBucket: "swegroup20-app.appspot.com",
  messagingSenderId: "510028487630",
  appId: "1:510028487630:web:9911f4241bea22959ca99f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth };
