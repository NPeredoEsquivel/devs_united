import TweetCard from './TweetCard/TweetCard.jsx';
import { StatesContext } from '../../../../hooks/StatesContext';
import { useContext } from 'react';

function TweetContainer({ likeTweetHandler, deleteTweet }) {

    const { tweetsArrayState, userState } = useContext(StatesContext);
    return (
        <div className="tweet-container">
            {tweetsArrayState.tweets.map((tweet, i) =>
                <TweetCard
                    key={i}
                    tweet={tweet}
                    likeTweetHandler={likeTweetHandler}
                    deleteTweet={deleteTweet}
                    user={userState.user}
                />
            )}
        </div>
    );
}

export default TweetContainer