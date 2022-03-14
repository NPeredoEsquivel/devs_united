function Button({ disabled, buttonText, buttonClass, onClickEvent, childrenComponent = null }) {

    return (
        <button disabled={disabled} className={buttonClass} onClick={onClickEvent}>
            {buttonText}
            {childrenComponent}
        </button>
    );
}

export default Button;
