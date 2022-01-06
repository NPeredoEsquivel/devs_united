import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../helper/auth";
import Loading from "../../components/common/Loading";

export default function PrivateRoute({ children }) {
    const { isLoading, isAuthenticated } = useAuthState();
    console.log(isLoading);
    return (
        !isLoading ?
            isAuthenticated ? children : <Navigate to={"/login"} />
            : (
                <Loading />
            )
    );
};