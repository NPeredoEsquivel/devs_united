import { ProfileConfigurationContext } from "../../hooks/ContextHooks/ProfileContext";
import { useContext } from "react";

function ColorSelector({ hexColor, className }) {
    const { profileConfiguration } = useContext(ProfileConfigurationContext);
    let handleProfileColor = profileConfiguration.profileColor.setProfileColor;

    return (
        <div
            className={className}
            onClick={() => handleProfileColor(hexColor)}
        >

        </div>
    );
}

export default ColorSelector;