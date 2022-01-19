import { ProfileConfigurationContext } from "../../hooks/ProfileConfiguration";
import { useContext, useState } from "react";

export default function ColorSelector({ color }) {
    const { profileColor, setProfileColor } = useContext(ProfileConfigurationContext);

    return (
        <div
            className={`color-picker__colors__${color.name} ${profileColor === color.hex ? "selected" : ""}`}
            onClick={() => setProfileColor(color.hex)}
        >

        </div>
    );
}