function TextArea({ tweet, handleChange, placeholder }) {
    return (
        <textarea
            placeholder={placeholder}
            name="text"
            id=""
            cols="30"
            rows="10"
            value={tweet.text}
            onChange={handleChange}
        />
    );
}

export default TextArea;