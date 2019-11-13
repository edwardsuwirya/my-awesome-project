import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {UTILS} from "../utils/authUtils";

const PrivateRoute = ({Component, path, ...rest}) => {
    return (
        <Route path={path} render={(props) => {
            return UTILS.auth.isAuthenticated ? <Component {...props}
                                                           userInfo={UTILS.auth.userInfo}
                                                           rubahSesiKeluar={UTILS.auth.sessionStateChange}/> :
                <Redirect to='/'/>
        }}/>
    )
};

export default PrivateRoute;
