import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../Firebase";
import { ProfileConfigurationContext } from "../hooks/ProfileConfiguration";
import { AuthContext } from "../hooks/AuthContext";
import { colors } from "../hooks/ProfileConfiguration";

export const StatesContext = React.createContext();

async function getUsers() {
    let users = null;
    try {
        await firestore
            .collection("user")
            .get()
            .then((snapshot) => {
                users = snapshot.docs.map((doc) => {
                    return {
                        "user_uid": doc.data().user_uid,
                        "nickName": doc.data().nickname,
                        "profileColor": doc.data().profile_color,
                    }
                })
            })
    } catch (err) {
        console.log(err);
    }
    return users;

}

export default function StatesContextProvider({ children }) {
    const { profileColor } = useContext(ProfileConfigurationContext);
    const { currentUser } = useContext(AuthContext);
    const [tweetsArray, setTweetsArray] = useState([]);
    const [tweet, setTweet] = useState(
        {
            text: "",
            author: "",
            photoURL: "",
            email: "",
            timestamp: "",
            userUid: "",
            likes: "",
            userLikesArr: [],
        });

    useEffect(() => {
        if (profileColor) {
            let color = colors.find(color =>
                color.hex === profileColor
            );

            let subs = null;
            getUsers().then((users) => {
                subs = firestore
                    .collection("tweets")
                    .orderBy("timestamp", "desc")
                    .onSnapshot((snapshot) => {
                        const tweets = snapshot.docs.map((doc) => {
                            let filteredUser = users.find((user) => {
                                return user.user_uid === doc.data().userUid
                            })

                            return {
                                text: doc.data().text,
                                author: doc.data().author,
                                photoURL: doc.data().photoURL,
                                likes: doc.data().likes,
                                email: doc.data().email,
                                timestamp: doc.data().timestamp,
                                id: doc.id,
                                userUid: doc.data().userUid,
                                userLikesArr: doc.data().userLikesArr,
                                userNickName: filteredUser.nickName ?? "",
                                userProfileColor: currentUser.uid === doc.data().userUid ? color.hex : filteredUser.profileColor
                            };
                        });

                        setTweet({
                            text: "",
                            author: "",
                            photoURL: "",
                            email: "",
                            timestamp: "",
                            userUid: "",
                            likes: "",
                            userLikesArr: []
                        })

                        setTweetsArray(tweets);

                    });

            });

            return () => subs;
        }
    }, [profileColor])


    const tweetsArrayState = { tweetsArray, setTweetsArray };
    const tweetState = { tweet, setTweet };

    return (
        <StatesContext.Provider value={{ tweetsArrayState, tweetState }}>
            {children}
        </StatesContext.Provider >
    );
}