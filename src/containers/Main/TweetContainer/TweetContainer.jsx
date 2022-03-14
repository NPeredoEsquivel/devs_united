import TweetCard from "./TweetCard/TweetCard.jsx";
import { StatesContext } from "../../../hooks/ContextHooks/StatesContext";
import { useContext } from "react";
import Loading from "../../../components/Loading/Loading";

export default function TweetContainer({ tweetsArray = null }) {
    const { tweetsArrayState } = useContext(StatesContext);

    let tweets = tweetsArray ?? tweetsArrayState.tweetsArray;
    const tweetLoadingProcessOver = tweetsArrayState.tweetArrayValidation.tweetLoadingProcessOver;
    return (
        <>
            <div className="tweet-list-container">
                {tweetLoadingProcessOver ? (
                    tweets.length ?
                        (tweets.map((tweet, i) =>

                            <TweetCard
                                key={i}
                                tweet={tweet}
                            />
                        )) : "no tienes"
                ) : <Loading />
                }
            </div>
        </>
    );
}