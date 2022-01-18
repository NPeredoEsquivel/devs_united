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
        async function filterUser(userCollection, currentUser) {
            let res = await userCollection.where("user_uid", "==", currentUser.uid).get();
            let data = await res.docs[0].data();
            return [data.nickname, data.profile_color];
        }

        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false);

            filterUser(userCollection, currentUser).then(data => {
                setNickName(data.nickname);
                setProfileColor(data.profile_color);


                console.log(data);
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