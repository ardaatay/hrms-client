import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

import CustomerLogin from "./CustomerLogin";

const iconPath = process.env.PUBLIC_URL + "/assets/";

export default function CustomerNavi() {
    return (
        <div>
            <Menu color="orange" inverted>
                <Container>
                    <Menu.Menu position="left">
                        <Menu.Item>
                            <img
                                src={`${iconPath}avengers64px.png`}
                                alt="logo"
                            />
                        </Menu.Item>
                        <Menu.Item name="home" link as={Link} to="/jobseeker">
                            İş Arama
                        </Menu.Item>
                        <Menu.Item
                            name="job_list"
                            link
                            as={Link}
                            to="/customer/job/list"
                        >
                            İş İlanlarım
                        </Menu.Item>
                        <Menu.Item
                            name="job_add"
                            link
                            as={Link}
                            to="/customer/job/add"
                        >
                            İlan Ekle
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <CustomerLogin />
                        <Menu.Item>
                            <Button inverted color="twitter" as={Link} to="/customer/signup">
                                Sign Up
                            </Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button inverted color="twitter">
                                Sign In
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
