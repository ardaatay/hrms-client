import React from "react";
import { Route } from "react-router-dom";

const CustomerDashboard = ({ children }) => <div>{children}</div>;

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
