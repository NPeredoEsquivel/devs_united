import { StatesContext } from "../../../../../hooks/ContextHooks/StatesContext";
import { useState, useContext } from "react";
import TweetContainer from "../../../TweetContainer/TweetContainer";
import Loading from "../../../../../components/Loading/Loading";

const tweetsViewerOptions = {
    'postedTweets': true,
    'favoritedTweets': false,
};

export default function ProfileTweetContainer({ profileUser }) {
    const [listConfig, setListConfig] = useState(tweetsViewerOptions);
    const { tweetsArrayState } = useContext(StatesContext);

    const handleListConfiguration = (idViewOption) => {
        let option = (idViewOption === 'postedTweets') ?
            (
                {
                    'favoritedTweets': false,
                    'postedTweets': true,
                }
            ) :
            (
                {
                    'postedTweets': false,
                    'favoritedTweets': true,
                }
            );
        setListConfig(option);
    }
    let tweets = null;
    if (profileUser.isFilteredUserCurrentUser) {
        if (listConfig.postedTweets) {
            tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
                tweet.userUid === profileUser.filteredUser.userUid
            )
        }

        if (listConfig.favoritedTweets) {
            tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
                tweet.userLikesArr.includes(profileUser.filteredUser.userUid)
            )
        }
    } else {
        tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
            tweet.userUid === profileUser.filteredUser.userUid
        )
    }




    return (
        <div className="profile-tweets-container">
            {profileUser.isFilteredUserCurrentUser ?
                (
                    <div className="profile-tweets-container__categories">
                        <div
                            className={`posts ${listConfig.postedTweets ? 'active' : ''}`}
                            onClick={() => handleListConfiguration('postedTweets')}
                        >
                            <span>POSTS</span>
                        </div>
                        <div
                            className={`favorites ${listConfig.favoritedTweets ? 'active' : ''}`}
                            onClick={() => handleListConfiguration('favoritedTweets')}
                        >
                            <span>FAVORITES</span>
                        </div>
                    </div>
                ) : <></>
            }
            {tweets ? (
                <TweetContainer
                    tweetsArray={tweets}
                />
            ) : <Loading />
            }
        </div>
    );
}