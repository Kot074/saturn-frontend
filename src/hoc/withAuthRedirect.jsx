import React from "react";
import {Navigate} from "react-router-dom";
import {getCurrentUser} from "../Api/UsersApi";

const withAuthRedirect = (Component) => {
        return () => {
            const token = getCurrentUser().token;
            if (token === null || token === '') {
                return <Navigate to={'/login'}/>
            }
            return (
                <Component />
            )
        }
}

export default withAuthRedirect;
