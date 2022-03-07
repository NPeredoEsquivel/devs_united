

export default function Button({ disabled, buttonText, buttonClass, onClickEvent, childrenComponent = null }) {
    const renderedComponent = childrenComponent ?? null;
    console.log(renderedComponent);
    return (
        <button disabled={disabled} className={buttonClass} onClick={onClickEvent}>
            {buttonText}
            {childrenComponent}
        </button>
    );
}


