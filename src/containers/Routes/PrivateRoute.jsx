import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../helper/Auth";
import Loading from "../../components/Loading/Loading";

export default function PrivateRoute({ children }) {
    const { isAuthenticated, isAuthLoading } = useAuthState();
    console.log("isAuthenticated", isAuthenticated);
    console.log("isAuthLoading", isAuthLoading);
    /** 
    * isAuthLoading state changes when onAuthStateChanges. It takes some time.
    * The first thernary is to manage this delta time and the second is to manage
    * if the system has a current user.
    */
    return (
        !isAuthLoading ? (isAuthenticated ? children : <Navigate to={"/login"} />)
            : <div className="loading-container">
                <Loading />
            </div>

    );
};