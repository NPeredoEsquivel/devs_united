import { AuthContext } from "../hooks/AuthContext";
import { useContext } from "react";

export const useAuthState = () => {
    const auth = useContext(AuthContext);
    console.log("currentUser", auth.currentUser);
    return {
        ...auth,
        isAuthenticated: auth.currentUser ? true : false
    }
}