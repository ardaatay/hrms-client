import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import SystemPersonnelLogin from "./SystemPersonnelLogin";

export default function SystemPersonnelNavi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name="home" />
                    <Menu.Item name="messages" />

                    <Menu.Menu position="right">
                        <SystemPersonnelLogin />

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
