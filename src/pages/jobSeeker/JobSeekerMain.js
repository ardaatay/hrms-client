import React from "react";
import { Container } from "semantic-ui-react";
import Banner from "./Banner";

export default function JobSeekerMain() {
    return (
        <div>
            <Banner />
            <Container className="main"></Container>
        </div>
    );
}
