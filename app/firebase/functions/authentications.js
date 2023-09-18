import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

async function signUpWithEmail(email, password, userData) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  await saveUserDataToUserDoc(email, userData); // Pass user.uid to saveUserDataToUserDoc function
  return user;
}

async function signInWithEmail(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  await saveUserDataToUserDoc(email, { key: password });
  return user;
}

async function saveUserDataToUserDoc(email, userData) {
  const userDocRef = doc(db, "users", email);
  await setDoc(userDocRef, userData);
}

export { signUpWithEmail, signInWithEmail, saveUserDataToUserDoc };
