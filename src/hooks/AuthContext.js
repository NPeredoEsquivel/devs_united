import React, { useState, useEffect } from "react";
import { firestore, auth } from "../Firebase";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [nickName, setNickName] = useState("");
    const [profileColor, setProfileColor] = useState("");

    useEffect(() => {
        const userCollection = firestore.collection("user");
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false);

            const users = userCollection.onSnapshot((snapshot) => {
                const user = snapshot.docs.filter((doc) => {
                    return doc.data().user_uid === currentUser.uid;
                });
                console.log(user);
            });
        })
        return () => unsubscribe()

    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, isLoading }}>
            {children}
        </AuthContext.Provider >
    );
}