import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/adminAuthConfig";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // setAuth data
  const [authData, setAuthData] = useState([]);
  useEffect(() => {
    fetch(
      "https://e-commerce-project-2-7ee00-default-rtdb.asia-southeast1.firebasedatabase.app/auth.json"
    ).then((res) => res.json().then((data) => setAuthData(data)));
  }, []);
  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        authData,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
