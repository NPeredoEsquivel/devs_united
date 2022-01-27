function TextArea({ tweet, handleChange, placeholder }) {
    let maxLength = 200;
    let tweetText = tweet.text.length;
    let percentage = Math.floor((tweetText * 100) / maxLength);

    let handleGetBarColor = (percentage) => {
        const hue = ((1 - percentage / 100) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    }
    const hslColor = handleGetBarColor(percentage);


    console.log(hslColor);
    return (
        <>
            <textarea
                placeholder={placeholder}
                name="text"
                id=""
                cols="30"
                rows="10"
                maxLength={maxLength}
                value={tweet.text}
                onChange={handleChange}
            />
            <div className="max-input-available-bar" style={{ 'width': percentage + '%', 'background-color': hslColor }}></div>
            <p className="max-input-available-text">200 max.</p>
        </>
    );
}

export default TextArea;