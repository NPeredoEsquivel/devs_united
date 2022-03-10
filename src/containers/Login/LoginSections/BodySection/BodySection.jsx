import { useAuthState } from "../../../../helper/Auth";
import { ProfileConfigurationContext } from "../../../../hooks/ProfileConfiguration";
import InputText, { LoadingInputText } from "../../../../components/InputText/InputText";
import Span from "../../../../components/Span/Span"
import TextContainer from "../../../../components/TextContainer";
import ColorSelector from "../../../../components/ColorSelector";
import { useContext, useState } from "react";
import { colors } from "../../../../hooks/ProfileConfiguration";
import { getUsers } from "../../../../hooks/StatesContext";

export default function AuthContainerBody() {
    const { currentUser } = useAuthState();
    const { profileConfiguration } = useContext(ProfileConfigurationContext);

    const handleValueChange = (e) => {
        const nickNameValue = e.target.value.replace(/\s/g, '');
        getUsers().then((users) => {
            const filteredUser = users.find((user) => {
                return user.nickName.toLowerCase() === nickNameValue.toLowerCase() && user.user_uid != currentUser.uid
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

    const isProfileSet = (nickNameConfigured || profileColorConfigured) ?? false;
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
                                    className={isProfileSet ? (`color-picker__selector__color ${color.name} ${profileColorConfigured === color.hex ? "selected" : ""}`) : "color-picker__selector__loading"}
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