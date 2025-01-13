/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.init.js";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUser = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
  }

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
    })
  
    return ()=>{
        unsubscribe()
    }
  }, [])
  
  const authInfo = {
    registerUser,
    loginUser,
    logoutUser,
    googleLogin,
    updateUser,
    user,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
