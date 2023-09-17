import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAapcvCuULNX4O8Vzv2ZuTolICZK57eFuI",
    authDomain: "blogaboo-b3ccf.firebaseapp.com",
    projectId: "blogaboo-b3ccf",
    storageBucket: "blogaboo-b3ccf.appspot.com",
    messagingSenderId: "53348906629",
    appId: "1:53348906629:web:e720c5faeff54fd2c05bec",
    measurementId: "G-LF975KFH58"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;