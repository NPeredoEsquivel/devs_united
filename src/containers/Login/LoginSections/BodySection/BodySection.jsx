import { useAuthState } from "../../../../helper/Auth";
import { ProfileConfigurationContext } from "../../../../hooks/ProfileConfiguration";
import InputText, { LoadingInputText } from "../../../../components/InputText";
import TextContainer from "../../../../components/TextContainer";
import ColorSelector from "../../../../components/ColorSelector";
import { useContext } from "react";
import { colors } from "../../../../hooks/ProfileConfiguration";


export default function AuthContainerBody() {
    const { currentUser } = useAuthState();

    const { nickName, setNickName, profileColor } = useContext(ProfileConfigurationContext);

    let handleValueChange = (e) => {
        setNickName(e.target.value.replace(/\s/g, ''));
    }

    const isProfileSet = (nickName || profileColor) ?? false;
    return (
        <div className="auth-container-body__body">
            {currentUser ? (
                <>
                    <div className="body-input">
                        {isProfileSet ? (
                            <InputText
                                placeHolder="Type your username"
                                inputValue={nickName ?? ''}
                                handleValue={handleValueChange}
                            />
                        ) : <LoadingInputText
                                className="body-input__loading-input" />
                        }
                    </div>
                    <div className="body__color-picker">
                        <TextContainer
                            className="color-picker__title"
                            contentText="Select your favorite color"
                        />
                        <div className="color-picker__selector">
                            {colors.map(color => {
                                return <ColorSelector
                                    key={color.hex}
                                    hexColor={color.hex}
                                    className={isProfileSet ? (`color-picker__selector__color ${color.name} ${profileColor === color.hex ? "selected" : ""}`) : "color-picker__selector__loading"}
                                />
                            })}
                        </div>
                    </div>
                </>
            ) : (
                    <TextContainer
                        className=""
                        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                )}
        </div>
    );
}