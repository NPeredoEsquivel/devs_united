function TextArea({ tweet, handleChange }) {
    return (
        <textarea
            placeholder="Add tweet"
            name="text"
            id=""
            cols="30"
            rows="10"
            value={tweet.text}
            onChange={handleChange}
            className="tweet-container__text-area"
        />
    );
}

export default TextArea;