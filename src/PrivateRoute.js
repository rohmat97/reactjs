import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./context/auth";
function PrivateRoute({ component: Component, ...rest }) {
    const {authTokens} = useAuth();
    // console.log("PRIVATE ROUTE :" + authTokens);
    return(
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ):(
                    
                    <Redirect to={{ pathname: "/Login", state: { referer: props.location } }} />
                    // <Redirect to='/login' />
                )
            }
        />
    );
}

export default PrivateRoute;