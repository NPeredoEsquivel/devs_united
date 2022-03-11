import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthState } from "../CustomHooks/AuthHook";
import { FilterUserByUid } from "../../helper/FilterUserFromCollection";

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
    const [validNickName, setValidNickName] = useState(true);
    const [isProfileLoading, setProfileLoading] = useState(true);


    useEffect(() => {
        if (isAuthenticated) {
            FilterUserByUid(currentUser.uid).then(data => {
                setNickName(data.nickname);
                setProfileColor(data.color);
                setProfileLoading(false);
            });
        }

        return () => { }

    }, [isAuthenticated]);

    let profileConfiguration = {
        'nickName': {
            'getNickName': nickName,
            'setNickName': setNickName,
            'isNickNameUnique': validNickName,
            'setNickNameUnique': setValidNickName,
        },
        'profileColor': {
            'getProfileColor': profileColor,
            'setProfileColor': setProfileColor,
        },
    }

    return (
        <ProfileConfigurationContext.Provider value={{ profileConfiguration, nickName, setNickName, profileColor, setProfileColor, isProfileLoading }}>
            {children}
        </ProfileConfigurationContext.Provider>
    );


}