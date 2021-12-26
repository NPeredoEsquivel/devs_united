function Button({ buttonText, buttonClass, onClickEvent }) {
    return (
        <button className={buttonClass} onClick={onClickEvent}>
            {buttonText}
        </button>
    );
}

export default Button;