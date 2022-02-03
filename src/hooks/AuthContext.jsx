import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setCurrentUser(currentUser);
            setAuthLoading(false);

        })
        return () => unsubscribe()

    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, isAuthLoading }}>
            {children}
        </AuthContext.Provider >
    );
}