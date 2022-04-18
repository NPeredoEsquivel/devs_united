function ProfileTab({ className, onClickHandler, children }) {
    return (
        <div
            className={className}
            onClick={onClickHandler}
        >
            {children}
        </div>
    );
}

export default ProfileTab;