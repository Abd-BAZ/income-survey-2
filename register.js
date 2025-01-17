// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfFTgaKxp9IHCgqFF8MUB7BB9TzjPr8tU",
  authDomain: "login-page-c77df.firebaseapp.com",
  projectId: "login-page-c77df",
  storageBucket: "login-page-c77df.firebasestorage.app",
  messagingSenderId: "474589835013",
  appId: "1:474589835013:web:514205669acae0fc16916c",
  measurementId: "G-SBPV8WWYZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);