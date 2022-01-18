import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthState } from "../helper/auth";
import { firestore } from "../Firebase";

export const ProfileConfigurationContext = React.createContext();

export default function ProfileConfigurationProvider({ children }) {
    const { currentUser } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    const [nickName, setNickName] = useState("");
    const [profileColor, setProfileColor] = useState("");

    useEffect(() => {
        async function filterUser(userCollection, currentUser) {
            let res = await userCollection.where("user_uid", "==", currentUser.uid).get();
            if (!res.empty) {
                let data = await res.docs[0].data();
                return {
                    'nickname': data.nickname,
                    'color': data.profile_color
                }
            } else {
                return {
                    'nickname': null,
                    'color': null
                }
            }
        }

        if (isAuthenticated) {
            const userCollection = firestore.collection("user");

            filterUser(userCollection, currentUser).then(data => {
                setNickName(data.nickname);
                setProfileColor(data.color);
            });
        }

    }, [isAuthenticated]);

    return (
        <ProfileConfigurationContext.Provider value={{ nickName, profileColor }}>
            {children}
        </ProfileConfigurationContext.Provider>
    );


}