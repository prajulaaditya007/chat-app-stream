import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import FullScreenCard from "../../components/FullScreenCard";
import {Link} from "../../components/Link";

export const AuthLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    return (
        <FullScreenCard>
            <FullScreenCard.Body>
                <Outlet/>
            </FullScreenCard.Body>
            <FullScreenCard.BelowCard><Link to={isLoginPage ? "/signup" : "/login"}>{isLoginPage ? "Create Account" : "Login"}</Link></FullScreenCard.BelowCard>
        </FullScreenCard>
    );
};
