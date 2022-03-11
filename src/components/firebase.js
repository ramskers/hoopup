import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvuoWPsz784YFMDXVJ6ddQLWqoBXY5h-k",
  authDomain: "hoopup-85085.firebaseapp.com",
  projectId: "hoopup-85085",
  storageBucket: "hoopup-85085.appspot.com",
  messagingSenderId: "843344943266",
  appId: "1:843344943266:web:1dbd2f64a9abb9e2df1ffb",
  measurementId: "G-VYBBMXP48P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
