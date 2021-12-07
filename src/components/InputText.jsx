function InputText() {
    return (
        <input
            name="autor"
            placeholder="Autor"
            type="text"
            value={tweet.autor}
            onChange={handleAutor}
            className="tweet-container__input"
        />
    );
}

export default InputText;