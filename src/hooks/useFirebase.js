import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut , onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initilizeAuthentication from "../Firebase/firebase.iinit";


const useFirebase = () => {
    initilizeAuthentication();

    const [user,setUser] = useState([]);
    const [error,setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
            
    },[]);
    

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        user,
        error,
        signInWithGoogle,
        logOut
    };
};

export default useFirebase;