import React, { useState, useEffect } from "react";
import { firestore } from "../Firebase";

export const StatesContext = React.createContext();


export default function StatesContextProvider({ children }) {
    const [tweetsArray, setTweetsArray] = useState([]);
    const [firebaseUsers, setFirebaseUsers] = useState([]);
    const [tweet, setTweet] = useState(
        {
            text: "",
            author: "",
            photoUrl: "",
            uid: "",
            email: ""
        });
    const [firebaseUsersCollected, setFirebaseUsersCollected] = useState(false);


    useEffect(() => {
        const userCollection = firestore.collection("user");
        const usersRes = userCollection.onSnapshot((snapshot) => {
            const users = snapshot.docs.map((doc) => {
                return {
                    "user_uid": doc.data().user_uid,
                    "nickName": doc.data().nickname,
                    "profileColor": doc.data().profile_color,
                }
            })
            setFirebaseUsers(users);
            setFirebaseUsersCollected(true);
        })

        return () => usersRes;
    }, [])

    useEffect(() => {
        if (firebaseUsersCollected) {
            const collection = firestore.collection("tweets");
            const orderedCollection = collection.orderBy("timestamp", "desc");
            const subs = orderedCollection.onSnapshot((snapshot) => {
                const tweets = snapshot.docs.map((doc) => {
                    console.log(firebaseUsers);
                    let filteredUser = firebaseUsers.find((user) => {
                        return user.user_uid === doc.data().userUid
                    })
                    console.log(filteredUser);
                    return {
                        text: doc.data().text,
                        author: doc.data().author,
                        photoURL: doc.data().photoURL,
                        likes: doc.data().likes,
                        email: doc.data().email,
                        timestamp: doc.data().timestamp,
                        id: doc.id,
                        userUid: doc.data().userUid,
                        userNickName: filteredUser.nickName ?? null,
                        userProfileColor: filteredUser.profileColor ?? null
                    };
                });

                setTweet({
                    text: "",
                    author: "",
                    photoURL: "",
                    email: "",
                    timestamp: "",
                    userUid: "",
                })
                setTweetsArray(tweets);

            });
            return () => subs;
        }
    }, [firebaseUsersCollected])


    const tweetsArrayState = { tweetsArray, setTweetsArray };
    const tweetState = { tweet, setTweet };
    const usersCollectionState = { firebaseUsers }

    return (
        <StatesContext.Provider value={{ tweetsArrayState, tweetState, usersCollectionState }}>
            {children}
        </StatesContext.Provider >
    );
}