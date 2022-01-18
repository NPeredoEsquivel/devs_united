import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthState } from "../helper/auth";

export const ProfileConfigurationContext = React.createContext();

export default function ProfileConfigurationProvider({ children }) {
    const { currentUser } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    const [nickName, setNickName] = useState("");
    const [profileColor, setProfileColor] = useState("");

    useEffect(() => {
        const users = userCollection.onSnapshot((snapshot) => {
            const user = snapshot.docs.map((doc) => {
                if (doc.data().user_uid === currentUser.uid) {
                    return {
                        nickname: doc.data().nickname,
                        profileColor: doc.data().profile_color
                    };
                }
            });
            if (user) {
                setNickName(user.nickname);
                setProfileColor(user.profile_color);
            }
            console.log(user);
        });
    }, [isAuthenticated])


}