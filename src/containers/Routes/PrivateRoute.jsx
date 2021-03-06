import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../hooks/CustomHooks/AuthHook";
import Loading from "../../components/Loading/Loading";

function PrivateRoute({ children }) {
    const { isAuthenticated, isAuthLoading } = useAuthState();
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

export default PrivateRoute;