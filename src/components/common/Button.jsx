function Button({ buttonText, onClickEvent }) {
    return (
        <div className="button-container">
            <button className="button-container__button" onClick={onClickEvent}>
                {buttonText}
            </button>
        </div>
    );
}

export default Button;