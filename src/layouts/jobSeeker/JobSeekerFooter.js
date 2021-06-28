import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

export default function JobSeekerFooter() {
    return (
        <div>
            <Segment inverted color="blue" vertical style={{ padding: "5em 0em" }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header as="h4" inverted content="Hakkımızda" />
                                <List link inverted>
                                    <List.Item as="a">Site Haritası</List.Item>
                                    <List.Item as="a">İletişime Geç</List.Item>
                                    <List.Item as="a">
                                        Religious Ceremonies
                                    </List.Item>
                                    <List.Item as="a">Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header as="h4" inverted content="Services" />
                                <List link inverted>
                                    <List.Item as="a">
                                        Banana Pre-Order
                                    </List.Item>
                                    <List.Item as="a">DNA FAQ</List.Item>
                                    <List.Item as="a">How To Access</List.Item>
                                    <List.Item as="a">Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as="h4" inverted>Arda ATAY Present</Header>
                                <p>
                                    Her hakkı saklıdır. @2021
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}
