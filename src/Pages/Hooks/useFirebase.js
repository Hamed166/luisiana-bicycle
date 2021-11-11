import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from "../Login/Firebase/firebase.init";

//initialize firebase app
firebaseInitialize()

const useFirebase = () =>{
    const [user, setUser]= useState({});

    const auth = getAuth()

    const registerUser =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    }

    const loginUser =(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    }

    //observe user's state
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) =>{
              if(user){
                  setUser(user);
              }else{
                  setUser({})
              }
            //   setIsLoading(false);
          });
          return ()=> unsubscribed;
      },[])
  
    const logOut = ()=>{
       
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }


    return{
        user,
        registerUser,
        logOut,
        loginUser,
    }
}

export default useFirebase;