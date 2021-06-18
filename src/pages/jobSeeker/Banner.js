import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Dropdown,
    Segment,
} from "semantic-ui-react";
import PositionService from "../../services/positionService";

export default function Banner() {

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        let positionService = new PositionService();
        positionService
            .getPositions()
            .then((result) => setPositions(result.data.data));
    });

    const options=[]
    positions.map((position,i)=>options.push({key:i,value:position.value,text:position.text}))

    return (
        <div>
            <Segment placeholder>
                <Container>
                    <Grid columns={2} stackable textAlign="center">
                        <Divider vertical>Or</Divider>
                        <Grid.Row verticalAlign="middle">
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="search" />
                                    Find Position
                                </Header>

                                <Dropdown
                                    placeholder="Select Position"
                                    fluid
                                    selection
                                    options={options}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Header icon>
                                    <Icon name="file" />
                                    Add New Resume
                                </Header>
                                <Button as={NavLink} to="/jobseeker/resume/add" primary>Create</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}
