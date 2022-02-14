import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthState } from "../helper/Auth";
import filterUser from "../helper/filerUserFromCollection";

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
        if (isAuthenticated) {
            filterUser(currentUser.uid).then(data => {
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