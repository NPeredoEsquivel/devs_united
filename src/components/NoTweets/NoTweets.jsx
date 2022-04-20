import Span from "../Span/Span";

function NoTweets() {
    return (
        <div className="no-tweets-container">
            <Span
                contentOfSpan="No se encuentran Tweets."
            />
        </div>
    );
}

export default NoTweets;