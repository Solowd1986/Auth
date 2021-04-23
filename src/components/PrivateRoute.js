import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ isAuth = true, component: Component, ...props}) => {

    //console.log('here');
    return (
        <Route {...props} component={(props) => isAuth ? <Component {...props}/> : <Redirect to="/"/>}/>
    )

};

export default PrivateRoute;


