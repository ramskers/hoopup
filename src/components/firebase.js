import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDvuoWPsz784YFMDXVJ6ddQLWqoBXY5h-k",
  authDomain: "hoopup-85085.firebaseapp.com",
  databaseURL: "https://hoopup-85085-default-rtdb.firebaseio.com",
  projectId: "hoopup-85085",
  storageBucket: "hoopup-85085.appspot.com",
  messagingSenderId: "843344943266",
  appId: "1:843344943266:web:1dbd2f64a9abb9e2df1ffb",
  measurementId: "G-VYBBMXP48P",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

//Sign Up
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//Log Out
export function logout() {
  return signOut(auth);
}

// Reset Password
export const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset link sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
