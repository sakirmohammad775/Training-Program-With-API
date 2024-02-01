import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, } from "firebase/auth";

export const AuthContext = createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    //google sign in
    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }
    //github sign in
    const githubSignIn=()=>{
        const githubProvider=new GithubAuthProvider()
        setUser(githubProvider)
        return signInWithPopup(auth,githubProvider)
    }

    useEffect(()=>{
       const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])
    
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;