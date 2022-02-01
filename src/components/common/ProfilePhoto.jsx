export default function ProfilePhoto({ className, imgSrc }) {
    return (
        <img className={className} src={imgSrc} alt="img" />
    );
}