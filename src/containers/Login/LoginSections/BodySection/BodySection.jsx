import { useContext, memo } from "react";
import { useAuthState } from "../../../../hooks/CustomHooks/AuthHook";
import { ProfileConfigurationContext, colors } from "../../../../hooks/ContextHooks/ProfileContext";
import { getUsers } from "../../../../hooks/ContextHooks/StatesContext";
import InputText, { LoadingInputText } from "../../../../components/InputText/InputText";
import TextContainer from "../../../../components/TextContainer/TextContainer";
import ColorSelector from "../../../../components/ColorSelector/ColorSelector";
import Span from "../../../../components/Span/Span"
import TranslatedContainer from "../../../../components/AnimatedContainer/TranslationContainer"

function AuthContainerBody() {
    const { isAuthLoading, currentUser } = useAuthState();
    const { profileConfiguration } = useContext(ProfileConfigurationContext);

    //Unique nickname handler.
    const handleValueChange = (e) => {
        const nickNameValue = e.target.value.replace(/\s/g, '');
        getUsers().then((users) => {
            const filteredUser = users.find((user) => {
                return user.nickName.toLowerCase() === nickNameValue.toLowerCase() && user.user_uid !== currentUser.uid
            })
            if (filteredUser) {
                profileConfiguration.nickName.setNickNameUnique(false);
            } else {
                profileConfiguration.nickName.setNickNameUnique(true);
            }
        })
        profileConfiguration.nickName.setNickName(nickNameValue.toLowerCase());
    }

    const nickNameConfigured = profileConfiguration.nickName.getNickName;
    const profileColorConfigured = profileConfiguration.profileColor.getProfileColor;
    const isNickNameUnique = profileConfiguration.nickName.isNickNameUnique;

    //If auth isn't loading, and it doesnt have any profile configured
    const isProfileSet = ((nickNameConfigured !== null && nickNameConfigured) || (profileColorConfigured !== null && profileColorConfigured)) ?? false;
    return (
        <div className="auth-container-body__body">
            {currentUser ? (
                <>
                    <div className="body-input">
                        {isProfileSet ? (
                            <>
                                <InputText
                                    placeHolder="Type your username"
                                    inputValue={nickNameConfigured ?? ''}
                                    handleValue={handleValueChange}
                                    className={!isNickNameUnique ? "validation-error" : ""}
                                />
                                {!isNickNameUnique ?
                                    (
                                        <Span
                                            className="validation-error"
                                            contentOfSpan="El nickname ya está en uso"
                                        />
                                    ) : null
                                }
                            </>
                        ) :

                            <TranslatedContainer>
                                <LoadingInputText className="body-input__loading-input" />
                            </TranslatedContainer>
                        }
                    </div>
                    <div className="body__color-picker">
                        <TextContainer
                            className="color-picker__title"
                            contentText="Select your favorite color"
                        />
                        <TranslatedContainer>
                            <div className="color-picker__selector">
                                {colors.map(color => {
                                    return <ColorSelector
                                        key={color.hex}
                                        hexColor={color.hex}
                                        className={isProfileSet ? (`color-picker__selector__color ${color.name} ${profileColorConfigured === color.hex ? "selected" : ""}`) : "color-picker__selector__loading"}
                                    />
                                })}
                            </div>
                        </TranslatedContainer>
                    </div>
                </>
            ) : (
                <TextContainer
                    className="auth-container-body__body__text"
                    contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
            )}
        </div>
    );
}

export default memo(AuthContainerBody);