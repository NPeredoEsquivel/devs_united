export default function Span({ contentOfSpan, className = null, onClickHandler = null }) {
    return (
        <span className={className ?? null} onClick={onClickHandler ?? null}>
            {contentOfSpan}
        </span>
    );
}
