import React from "react";
import { Route } from "react-router";
import { Container, Grid } from "semantic-ui-react";
import Pannel from "./Pannel";
import SystemPersonnelNavi from "./SystemPersonnelNavi";

const SystemPersonnelDashboard = ({ children }) => (
    <div>
        <SystemPersonnelNavi />
        <Container className="main">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Pannel />
                    </Grid.Column>
                    <Grid.Column floated="left" width={12}>
                        {children}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
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
