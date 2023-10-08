/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //Create User
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}

//Sign in
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

  }

  //observ auth state change
  useEffect(()=>{
    const unSubscribe  = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        console.log('observe user inside useEffect with on auth', currentUser);
    })
    return ()=>{
        unSubscribe();
    }

  },[])

  //LogOut
  const logOut =()=>{
    return signOut(auth);
  }




const authInfo={
    createUser,
    signIn,
    user,
    logOut

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;