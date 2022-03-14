import { ProfileConfigurationContext } from "../../hooks/ContextHooks/ProfileContext";
import { useContext } from "react";

function ColorSelector({ hexColor, className }) {
    const { setProfileColor } = useContext(ProfileConfigurationContext);

    return (
        <div
            className={className}
            onClick={() => setProfileColor(hexColor)}
        >

        </div>
    );
}

export default ColorSelector;