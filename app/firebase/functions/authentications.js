import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import app from "../config";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAapcvCuULNX4O8Vzv2ZuTolICZK57eFuI",
  authDomain: "blogaboo-b3ccf.firebaseapp.com",
  projectId: "blogaboo-b3ccf",
  storageBucket: "blogaboo-b3ccf.appspot.com",
  messagingSenderId: "53348906629",
  appId: "1:53348906629:web:e720c5faeff54fd2c05bec",
  measurementId: "G-LF975KFH58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore instance
const auth = getAuth();
const firestore = getFirestore();

// Sign up function
async function signUpWithEmail(email, password, userData) {
  // Create a new user account
  const user = await auth.createUserWithEmailAndPassword(email, password);

  // Save the user's data to Firestore
  await firestore.collection("users").doc(user.uid).set({
    email,
  });

  await saveUserDataToUserDoc(email, userData);

  // Return the user
  return user;
}

// Sign in function
async function signInWithEmail(email, password) {
  // Sign in the user
  const user = await auth.signInWithEmailAndPassword(email, password);

  // Return the user
  return user;
}

async function saveUserDataToUserDoc(email, userData) {
  // Get the user document reference
  const userRef = firestore.collection("users").doc(email);

  // Set the user data
  await userRef.set(userData, { merge: true });
}

export { signUpWithEmail, signInWithEmail, saveUserDataToUserDoc };
