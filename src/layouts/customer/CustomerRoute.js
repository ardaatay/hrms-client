import React from "react";
import { Route } from "react-router-dom";

import CustomerNavi from "./CustomerNavi";

const CustomerDashboard = ({ children }) => (
    <div>
        <CustomerNavi />
        {children}
    </div>
);

const CustomerRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <CustomerDashboard>
                    <Component {...props} />
                </CustomerDashboard>
            )}
        />
    );
};

export default CustomerRoute;
