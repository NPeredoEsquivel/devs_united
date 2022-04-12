function ImageContainer({ imgSrc, className, alternative }) {
    return (
        <img
            referrerPolicy="no-referrer"
            className={className}
            src={imgSrc}
            alt={alternative}
        />
    );
}

export default ImageContainer;