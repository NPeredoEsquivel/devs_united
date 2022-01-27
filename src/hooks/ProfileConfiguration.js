import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthState } from "../helper/Auth";
import { firestore } from "../Firebase";

export const ProfileConfigurationContext = React.createContext();

export const colors = [
    { name: "red", hex: "#F50D5A" },
    { name: "orange", hex: "#FF865C" },
    { name: "yellow", hex: "#FFEA5C" },
    { name: "green", hex: "#00DA76" },
    { name: "light-blue", hex: "#0096CE" },
    { name: "purple", hex: "#800FFF" },
];

export default function ProfileConfigurationProvider({ children }) {
    const { currentUser } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    const [nickName, setNickName] = useState("");
    const [profileColor, setProfileColor] = useState("");
    const [isProfileLoading, setProfileLoading] = useState(true);


    useEffect(() => {
        async function filterUser(currentUser) {
            const userCollection = firestore.collection("user");
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

            filterUser(currentUser).then(data => {
                setNickName(data.nickname);
                setProfileColor(data.color);
                setProfileLoading(false);
            });
        }

        return () => { }

    }, [isAuthenticated]);

    return (
        <ProfileConfigurationContext.Provider value={{ nickName, setNickName, profileColor, setProfileColor, isProfileLoading }}>
            {children}
        </ProfileConfigurationContext.Provider>
    );


}