import { useParams } from "react-router-dom";

export default function ProfileFeed() {
    let { nickName } = useParams();
    return (
        <div className="profile-container">
            <p>{`This is a test to see if the profile component renders ${nickName}.`}</p>
        </div>
    );
}