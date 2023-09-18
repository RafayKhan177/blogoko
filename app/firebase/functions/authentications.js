import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../config";
import { toast } from "react-toastify";

const auth = getAuth(app);
const db = getFirestore();

const notify = (msg) => toast(msg);

async function signUpWithEmail(email, password, userData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await saveUserDataToUserDoc(email, userData);
    notify("Sign up successful!");
    return user;
  } catch (error) {
    notify(`Sign up failed: ${error.message}`);
  }
}

async function signInWithEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await saveUserDataToUserDoc(email, { key: password });
    notify("Sign in successful!");
    return user;
  } catch (error) {
    notify(`Sign in failed: ${error.message}`);
  }
}

async function saveUserDataToUserDoc(email, userData) {
  try {
    const userDocRef = doc(db, "users", email);
    await setDoc(userDocRef, userData);
    notify("Info Updated!");
  } catch (error) {
    notify(`Something went wrong`);
  }
}

export { signUpWithEmail, signInWithEmail, saveUserDataToUserDoc };
