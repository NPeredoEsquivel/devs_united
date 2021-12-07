function Span({ classOfSpan, onClickHandler, contentOfSpan }) {
    return (
        <span className={classOfSpan} onClick={onClickHandler}>
            {contentOfSpan}
        </span>
    );
}

export default Span;