import { StatesContext } from "../../../../../hooks/ContextHooks/StatesContext";
import { useState, useContext } from "react";
import TweetContainer from "../../../TweetContainer/TweetContainer";
import Loading from "../../../../../components/Loading/Loading";
import { profileTabs } from "../../../../../utils/constants/view_options.constants";
import Span from "../../../../../components/Span/Span";
import ProfileTab from "../../../../../components/ProfileTab/ProfileTab";
import { handleListConfiguration } from "../../../../../utils/helper/TweetListHelper";

function ProfileTweetContainer({ profileUser }) {
    const [tweetListToList, setTweetListToList] = useState(profileTabs);
    const { tweetsArrayState } = useContext(StatesContext);

    let tweets = null;
    if (profileUser.isFilteredUserCurrentUser) {
        if (tweetListToList.postedTweets) {
            tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
                tweet.userUid === profileUser.filteredUser.userUid
            )
        }

        if (tweetListToList.favoritedTweets) {
            tweets = tweetsArrayState.tweetsArray.filter((tweet) =>
                tweet.userLikesArr.includes(profileUser.filteredUser.userUid) &&
                tweet.userUid !== profileUser.filteredUser.userUid
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
                        <ProfileTab
                            className={`posts ${tweetListToList.postedTweets ? 'active' : ''}`}
                            onClickHandler={() => handleListConfiguration('postedTweets', setTweetListToList)}
                        >
                            <Span
                                contentOfSpan={"POSTS"}
                            />
                        </ProfileTab>
                        <ProfileTab
                            className={`favorites ${tweetListToList.favoritedTweets ? 'active' : ''}`}
                            onClickHandler={() => handleListConfiguration('favoritedTweets', setTweetListToList)}
                        >
                            <Span
                                contentOfSpan={"FAVORITES"}
                            />
                        </ProfileTab>
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

export default ProfileTweetContainer;