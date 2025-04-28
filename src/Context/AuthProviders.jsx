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
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

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
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      if (currentUser) {
        // const userData = {
        //   name: currentUser.displayName,
        //   email: currentUser.email,
        //   image: currentUser.photoURL,
        //   role: "user",
        // };
        // axiosPublic.post("/users", userData).then((res) => {
        //   // console.log(res.data);
        // });

        const userEmail = { email: currentUser.email };

        axiosPublic.post("/jwt", userEmail).then((res) => {
          // console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        setUser(null);
        localStorage.removeItem("access-token");

        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    registerUser,
    loginUser,
    logoutUser,
    googleLogin,
    updateUser,
    theme,
    toggleTheme,
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
