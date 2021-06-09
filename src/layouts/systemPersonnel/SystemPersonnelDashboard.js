import React from "react";
import { Container, Grid } from "semantic-ui-react";
import PositionList from "../../pages/systemPersonnel/PositionList";
import Pannel from "./Pannel";
import SystemPersonnelNavi from "./SystemPersonnelNavi";

export default function SystemPersonnelDashboard() {
    return (
        <div>
            <SystemPersonnelNavi />
            <Container className="main">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Pannel />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <PositionList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}
