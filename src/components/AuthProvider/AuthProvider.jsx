/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";




export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    //Create User
const createUser =(email,password)=>{
       setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

//Sign in
const signIn =(email,password)=>{
       setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

  }

  //observ auth state change
  useEffect(()=>{
    const unSubscribe  = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log('observe user inside useEffect with on auth', currentUser);
    })
    return ()=>{
        unSubscribe();
    }

  },[])

  //LogOut
  const logOut =()=>{
    setLoading(true)
    return signOut(auth);
  }

  //signinwithGoogle
  const signinwithGoogle =() =>{
    setLoading(true)
 
    return signInWithPopup(auth,googleProvider)
}

// //update profile info
// const updateProfile = (auth.currentUser,{
//     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"

//   });
  

const authInfo={
    createUser,
    signIn,
    user,
    logOut,
    signinwithGoogle,
    loading,
    updateProfile

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;