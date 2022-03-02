import { ProfileConfigurationContext } from "../hooks/ProfileConfiguration";
import { useContext } from "react";

export default function ColorSelector({ hexColor, className }) {
    const { setProfileColor } = useContext(ProfileConfigurationContext);

    return (
        <div
            className={className}
            onClick={() => setProfileColor(hexColor)}
        >

        </div>
    );
}