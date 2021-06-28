import React from "react";
import { Route } from "react-router-dom";
import JobSeekerNavi from "./JobSeekerNavi";
import JobSeekerFooter from "./JobSeekerFooter";

const JobSeekerDashboard = ({ children }) => (
    <div>
        <JobSeekerNavi />
        {children}
        <JobSeekerFooter />
    </div>
);

const JobSeekerRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <JobSeekerDashboard>
                    <Component {...props} />
                </JobSeekerDashboard>
            )}
        />
    );
};

export default JobSeekerRoute;
