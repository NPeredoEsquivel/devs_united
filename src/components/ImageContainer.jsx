export default function ImageContainer({ imgSrc, className, alternative }) {
    return (
        <img className={className} src={imgSrc} alt={alternative} />
    );
}