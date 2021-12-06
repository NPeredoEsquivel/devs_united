import TweetContainer from './TweetContainer/TweetContainer'

function Body({ tweets, likeTweetHandler }) {
    return (
        <TweetContainer tweets={tweets} likeTweetHandler={likeTweetHandler} />

    );
}

export default Body;