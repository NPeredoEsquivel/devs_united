import { StatesContext } from "../../../../../hooks/StatesContext";
import { AuthContext } from "../../../../../hooks/AuthContext";
import { useState, useContext } from "react";
import TweetContainer from "../../../MainFeed/Body/TweetContainer/TweetContainer";
import Loading from "../../../../../components/Loading/Loading";

export default function ProfileTweetContainer() {
    let tweetsViewerOptions = {
        'postedTweets': true,
        'favoritedTweets': false,
    };
    const [listConfig, setListConfig] = useState(tweetsViewerOptions);
    const { currentUser } = useContext(AuthContext);
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

    console.log("postedTweets", listConfig.postedTweets);
    console.log("favoritedTweets", listConfig.favoritedTweets);
    if (listConfig.postedTweets) {
        tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
            tweet.userUid === currentUser.uid
        )
    }

    if (listConfig.favoritedTweets) {
        tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
            tweet.userLikesArr.includes(currentUser.uid)
        )
    }



    return (
        <div className="profile-tweets-container">
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
            {tweets ? (
                <TweetContainer
                    tweetsArray={tweets}
                />
            ) : <Loading />
            }
        </div>
    );
}