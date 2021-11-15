import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import firebaseInitialize from "../Login/Firebase/firebase.init";

//initialize firebase app
firebaseInitialize()

const useFirebase = () =>{
    const [user, setUser]= useState({});
    const [isLoading, setIsLoading]= useState(true);
    const [authError, setAuthError] =useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const registerUser =(email, password, name, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email, displayName: name};
            setUser(newUser);
            //save user to database
            saveUser(email, name, 'POST');
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
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
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

    useEffect(()=>{
        fetch(`https://salty-depths-22621.herokuapp.com/users/${user.email}`)
        .then(res =>res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])
  
    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }

    const saveUser = (email, displayName, method) =>{
            const user = {email, displayName};

            fetch('https://salty-depths-22621.herokuapp.com/users', {
                method: method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then()
    }


    return{
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        logOut,
        loginUser,
    }
}

export default useFirebase;