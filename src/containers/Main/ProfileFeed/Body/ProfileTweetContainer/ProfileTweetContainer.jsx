import { StatesContext } from "../../../../../hooks/ContextHooks/StatesContext";
import { useState, useContext } from "react";
import TweetContainer from "../../../TweetContainer/TweetContainer";
import Loading from "../../../../../components/Loading/Loading";
import { tweetsViewerOptions } from "../../../../../utils/constants/view_options.constants";
import { handleListConfiguration } from "../../../../../utils/helper/TweetListHelper";
import Span from "../../../../../components/Span/Span";

export default function ProfileTweetContainer({ profileUser }) {
    const [listConfig, setListConfig] = useState(tweetsViewerOptions);
    const { tweetsArrayState } = useContext(StatesContext);

    let tweets = null;
    if (profileUser.isFilteredUserCurrentUser) {
        if (listConfig.postedTweets) {
            tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
                tweet.userUid === profileUser.filteredUser.userUid
            )
        }

        if (listConfig.favoritedTweets) {
            console.log(tweetsArrayState);
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
                            onClick={() => handleListConfiguration('postedTweets', setListConfig)}
                        >
                            <Span
                                contentOfSpan={"POSTS"}
                            />
                        </div>
                        <div
                            className={`favorites ${listConfig.favoritedTweets ? 'active' : ''}`}
                            onClick={() => handleListConfiguration('favoritedTweets', setListConfig)}
                        >
                            <Span
                                contentOfSpan={"FAVORITES"}
                            />
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