import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = (props) => {
    return (
        <div>
            <h1>NOT FOUND</h1>
            <NavLink to="/">Go home</NavLink>
        </div>
    );
};

export default PageNotFound;




