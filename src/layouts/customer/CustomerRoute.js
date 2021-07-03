import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import CustomerNavi from "./CustomerNavi";

const CustomerDashboard = ({ children }) => (
    <div>
        <CustomerNavi />
        <Container>
            <div className="m-3">{children}</div>
        </Container>
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
