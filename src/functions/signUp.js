import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/adminAuthConfig";

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
