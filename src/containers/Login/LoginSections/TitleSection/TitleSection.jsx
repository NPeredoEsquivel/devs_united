import TextContainer from "../../../../components/common/TextContainer";
import { useAuthState } from "../../../../helper/Auth";


export default function TitleSection() {
    const { currentUser } = useAuthState();

    const htmlContent = currentUser ?
        <>WELCOME <br></br> <span>{currentUser.displayName}</span></> :
        <>LOREM <br></br>IPSUM DOLOR</>;

    return (
        <div className="auth-container-body__title">
            {currentUser ?
                (
                    <TextContainer
                        contentText={htmlContent}
                        className="auth-container-body__title__text"
                    />
                ) : (
                    <TextContainer
                        contentText={htmlContent}
                        className="auth-container-body__title__text"
                    />
                )
            }
        </div>
    );
}
