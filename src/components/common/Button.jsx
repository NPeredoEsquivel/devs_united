function Button({ disabled, buttonText, buttonClass, onClickEvent }) {
    return (
        <button disabled={disabled} className={buttonClass} onClick={onClickEvent}>
            {buttonText}
        </button>
    );
}

export default Button;