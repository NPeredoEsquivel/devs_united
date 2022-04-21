import TweetCard from "./TweetCard/TweetCard.jsx";
import { StatesContext } from "../../../hooks/ContextHooks/StatesContext";
import { useContext, memo } from "react";
import Loading from "../../../components/Loading/Loading";
import NoTweets from "../../../components/NoTweets/NoTweets";
import OpacityContainer from "../../../components/AnimatedContainer/OpacityContainer";

function TweetContainer({ tweetsArray = null }) {
    const { tweetsArrayState } = useContext(StatesContext);

    let tweets = tweetsArray ?? tweetsArrayState.tweetsArray;
    const tweetLoadingProcessOver = tweetsArrayState.tweetArrayValidation.tweetLoadingProcessOver;

    return (
        <>
            <div className="tweet-list-container">
                {tweetLoadingProcessOver ? (
                    tweets.length > 0 ?
                        (tweets.map((tweet, index) =>
                            <OpacityContainer
                                key={`opacity-${index}`}
                            >
                                <TweetCard
                                    key={index}
                                    tweet={tweet}
                                />
                            </OpacityContainer>
                        )) : <NoTweets />
                ) : <Loading />
                }
            </div>
        </>
    );
}

export default memo(TweetContainer);