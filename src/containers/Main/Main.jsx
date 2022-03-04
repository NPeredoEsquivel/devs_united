
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import MainFeed from "./MainFeed/MainFeed";
import { useParams } from "react-router-dom";

export default function Main() {
    let { nickName } = useParams();

    return (
        <>
            {nickName ?
                <ProfileFeed />
                :
                <MainFeed />
            }
        </>
    );
}