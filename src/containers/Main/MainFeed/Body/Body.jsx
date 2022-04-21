import TweetContainer from "../../../Main/TweetContainer/TweetContainer"
import TweetForm from './TweetForm/TweetForm'
import { memo } from "react";

function Body() {
    return (
        <div className="tweet-body-container">
            <div className="tweet-body-container__form">
                <TweetForm />
            </div>
            <div className="tweet-body-contaienr__tweet-container">
                <TweetContainer />
            </div>
        </div >
    );
}

export default memo(Body);