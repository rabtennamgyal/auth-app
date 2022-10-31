import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';


const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext);
};


export function AuthProvider({ children }) { 
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    function login(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    };

    function logout(auth) {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])
    
    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

