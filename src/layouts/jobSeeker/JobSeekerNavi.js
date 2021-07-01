import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import JobSearch from "./JobSearch";
import JobSeekerLogin from "./JobSeekerLogin";

const iconPath = process.env.PUBLIC_URL + "/assets/";

export default function JobSeekerNavi() {
    return (
        <div>
            <Menu color="blue" inverted>
                <Container>
                    <Menu.Menu position="left">
                        <Menu.Item>
                            <img
                                src={`${iconPath}avengers64px.png`}
                                alt="logo"
                            />
                        </Menu.Item>
                        <Menu.Item
                            name="home"
                            link
                            as={Link}
                            to="/jobseeker"
                        >
                            İş Ara
                        </Menu.Item>
                        <Menu.Item
                            name="resume_list"
                            link
                            as={Link}
                            to="/jobseeker/resume/list"
                        >
                            Cv Listem
                        </Menu.Item>
                        <Menu.Item
                            name="resume_add"
                            link
                            as={Link}
                            to="/jobseeker/resume/add"
                        >
                            Cv Ekle
                        </Menu.Item>
                        <Menu.Item>
                            <JobSearch />
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <JobSeekerLogin />
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Sign In</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
