import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../helper/Auth";
import Loading from "../../components/common/Loading";

export default function PrivateRoute({ children }) {
    const { isAuthLoading, isAuthenticated } = useAuthState();
    return (
        !isAuthLoading ? isAuthenticated ? children : <Navigate to={"/login"} />
            : (
                <Loading />
            )
    );
};