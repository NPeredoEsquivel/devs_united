import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";

export default function PrivateRoute({ children }) {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    return (
        currentUser ? children : <Navigate to={"/login"} />
    );
    /* return (
        <Route
            {...rest}
            render={routeProps => (
                currentUser ? (
                    <Outlet {...rest} />
                ) : (
                        <Navigate to={"/login"} />
                    )
            )}>
        </Route>
    ); */
};