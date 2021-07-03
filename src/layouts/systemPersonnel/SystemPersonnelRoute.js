import React from "react";
import { Route } from "react-router";
import Pannel from "./Pannel";
import SystemPersonnelNavi from "./SystemPersonnelNavi";

const SystemPersonnelDashboard = ({ children }) => (
    <div>
        <SystemPersonnelNavi />
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Pannel />
                </div>
                <div className="col-9">{children}</div>
            </div>
        </div>
    </div>
);

const SystemPersonnelRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <SystemPersonnelDashboard>
                    <Component {...props} />
                </SystemPersonnelDashboard>
            )}
        />
    );
};

export default SystemPersonnelRoute;
