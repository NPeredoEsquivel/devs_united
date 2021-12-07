function InputText({ tweet, handleChange }) {
    return (
        <input
            name="author"
            placeholder="Autor"
            type="text"
            value={tweet.author}
            onChange={handleChange}
            className="tweet-container__input"
        />
    );
}

export default InputText;