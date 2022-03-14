export const handleListConfiguration = (idViewOption, setListConfig) => {
    let option = (idViewOption === 'postedTweets') ?
        ({
            'favoritedTweets': false,
            'postedTweets': true,
        }) :
        ({
            'postedTweets': false,
            'favoritedTweets': true,
        });
    setListConfig(option);
}