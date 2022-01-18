import React, { useState, useEffect } from "react";
import { firestore, auth } from "../Firebase";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const userCollection = firestore.collection("user");

        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false);

        })
        return () => unsubscribe()

    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, isLoading }}>
            {children}
        </AuthContext.Provider >
    );
}