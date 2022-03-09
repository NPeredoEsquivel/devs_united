import { useState } from "react";


export default function ProfileTweetContainer() {
    let tweetsViewerOptions = {
        'postedTweets': true,
        'favoritedTweets': false,
    };
    const [listConfig, setListConfig] = useState(tweetsViewerOptions);

    const handleListConfiguration = (idViewOption) => {
        let option = (idViewOption === 'postedTweets') ?
            (
                {
                    ...tweetsViewerOptions = false,
                    'postedTweets': true,
                }
            ) :
            (
                {
                    ...tweetsViewerOptions = false,
                    'favoritedTweets': true,
                }
            );
        setListConfig(option);
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
        </div>
    );
}