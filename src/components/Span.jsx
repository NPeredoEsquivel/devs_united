function Span({ classOfSpan, onClickHandler, contentOfSpan }) {
    return (
        <span className={classOfSpan} onClick={onClickHandler !== "" ? onClickHandler : undefined}>
            {contentOfSpan}
        </span>
    );
}

export default Span;