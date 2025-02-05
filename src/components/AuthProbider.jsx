import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../faireBase';
import { useOutlet } from 'react-router-dom';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const [loading,setLoadin]=useState(true)
    const [user,setUser]=useState(null)  
  const creatUser =(email,password)=>{
     setLoadin(true)
    return 
    createUserWithEmailAndPassword(auth,email,password)
}


const signInUser=(email,password)=>{
setLoadin(true)
return signInWithEmailAndPassword(auth,email,password)

}

const signOutUser = ()=>{
    return signOut(auth)
}
useEffect(()=>{
const unSubscribe 
= onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser)
  setLoadin(false)
})
return ()=>{
    unSubscribe()
}
},[])
    const authInfo={
 name :'tumi ami ami tumi .... ',
 creatUser,
 signInUser,
 user,
 signOutUser,
 loading
    }
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;