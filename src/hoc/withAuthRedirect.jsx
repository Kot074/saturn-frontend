import React from "react";
import {Navigate} from "react-router-dom";

const withAuthRedirect = (Component) => {
        return () => {
            const token = localStorage.getItem('auth-token');
            if (token === null || token === '') {
                return <Navigate to={'/login'}/>
            }
            return (
                <Component />
            )
        }
}

export default withAuthRedirect;
