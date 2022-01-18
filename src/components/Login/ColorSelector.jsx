import { ProfileConfigurationContext } from "../../hooks/ProfileConfiguration";
import { useContext } from "react";

export default function ColorSelector({ color }) {
    const { profileColor, setProfileColor } = useContext(ProfileConfigurationContext);
    return (
        <div
            className={`color-picker__colors__${color.name} ${profileColor === color.hex ? "selected" : null}`}
            onClick={() => setProfileColor(color.hex)}
        >

        </div>
    );
}