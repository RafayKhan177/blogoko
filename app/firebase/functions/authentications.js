import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Auth and Firestore instance
const auth = getAuth();
const firestore = getFirestore();

// Sign up function
export async function signUpWithEmail(email, password, data) {
  // Create a new user account
  const user = await auth.createUserWithEmailAndPassword(email, password);

  // Save the user's data to Firestore
  await firestore.collection("users").doc(user.uid).set({
    email,
  });

  await saveUserDataToUserDoc(email, data);

  // Return the user
  return user;
}

// Sign in function
export async function signInWithEmail(email, password) {
  // Sign in the user
  const user = await auth.signInWithEmailAndPassword(email, password);

  // Return the user
  return user;
}


export async function saveUserDataToUserDoc(email, userData) {
  // Get the user document reference
  const userRef = firestore.collection("users").doc(email);

  // Set the user data
  await userRef.set(userData, { merge: true });
}
