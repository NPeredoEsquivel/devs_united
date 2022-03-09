export default function Span({ className, contentOfSpan, onClickHandler = null }) {
    return (
        <span className={className} onClick={onClickHandler ?? undefined}>
            {contentOfSpan}
        </span>
    );
}
