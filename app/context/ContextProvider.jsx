"use client"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { authentication } from "../utils/firebaseConfiguration";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore"

const AppContext = createContext()

export const useAppContext = ()=> useContext(AppContext)

const ContextProvider = ({children}) => {
    const [isVerified, setIsVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const db = getFirestore()
    const usersRef = collection(db, "users")
    const collectionRef = collection(db, "Cars")

    // onAuthStateChanged(authentication, (user)=>{
    //     setCurrentUser(user)
    // })

    const getDocument = (refrence)=>{
        return getDocs(refrence)
    }

    const addDocument = (refrence, data) =>{
        return addDoc(refrence, data)
    }

    // const singleDoc = (databaseCollection, id)=>{
    //     return doc(db, databaseCollection, id)
    // }

    const updateDocument = (id, data)=>{
        return updateDoc(doc(db, "Cars", id), data)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(authentication, email, password)
    }

    const creatAccount = (email, password) => {
        return createUserWithEmailAndPassword(authentication, email, password)
    }

    const value = {
        isVerified,
        setIsVerified,
        usersRef,
        collectionRef,
        getDocument,
        addDocument,
        login,
        creatAccount,
        isLoading,
        setIsLoading,
        currentUser,
        // singleDoc,
        updateDocument,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
 
        
export default ContextProvider;