// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAapcvCuULNX4O8Vzv2ZuTolICZK57eFuI",
  authDomain: "blogaboo-b3ccf.firebaseapp.com",
  projectId: "blogaboo-b3ccf",
  storageBucket: "blogaboo-b3ccf.appspot.com",
  messagingSenderId: "53348906629",
  appId: "1:53348906629:web:e720c5faeff54fd2c05bec",
  measurementId: "G-LF975KFH58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);