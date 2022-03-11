import { AuthContext } from "../ContextHooks/AuthContext";
import { useContext } from "react";

export const useAuthState = () => {
    const auth = useContext(AuthContext);
    console.log("currentUser", auth.currentUser);
    return {
        ...auth,
        isAuthenticated: auth.currentUser ? true : false
    }
}