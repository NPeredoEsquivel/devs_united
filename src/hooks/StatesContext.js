import React, { useState } from 'react';

export const StatesContext = React.createContext();


export default function StatesContextProvider({ children }) {
    const [tweets, setTweets] = useState([]);
    const [user, setUser] = useState(null);
    const [tweet, setTweet] = useState(
        {
            text: "",
            author: "",
            photoUrl: "",
            uid: "",
            email: ""
        });

    const tweetsArrayState = { tweets, setTweets };
    const tweetState = { tweet, setTweet };
    const userState = { user, setUser };

    return (
        <StatesContext.Provider value={{ tweetsArrayState, tweetState, userState }}>
            {children}
        </StatesContext.Provider >
    );
}