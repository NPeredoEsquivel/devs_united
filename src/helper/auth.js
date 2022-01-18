import { AuthContext } from "../hooks/AuthContext";
import { useContext } from "react";

export const useAuthState = () => {
    const auth = useContext(AuthContext)
    return {
        ...auth,
        isAuthenticated: auth.currentUser
    }
}