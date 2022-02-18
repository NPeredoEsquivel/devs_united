import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../helper/Auth";

export default function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuthState();

    return (
        isAuthenticated ? children : <Navigate to={"/login"} />

    );
};