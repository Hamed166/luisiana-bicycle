import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import firebaseInitialize from "../Login/Firebase/firebase.init";

//initialize firebase app
firebaseInitialize()

const useFirebase = () =>{
    const [user, setUser]= useState({});
    const [isLoading, setIsLoading]= useState(true);
    const [authError, setAuthError] =useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const registerUser =(email, password, name, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email, displayName: name};
            setUser(newUser);
            setAuthError('');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/');

        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));

    }

    const loginUser =(email, password, location, history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));

    }

    const signInWithGoogle = ( location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(()=> setIsLoading(false));
    }

    //observe user's state
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) =>{
              if(user){
                  setUser(user);
              }else{
                  setUser({})
              }
              setIsLoading(false);
          });
          return ()=> unsubscribed;
      },[])
  
    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }


    return{
        user,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        logOut,
        loginUser,
    }
}

export default useFirebase;