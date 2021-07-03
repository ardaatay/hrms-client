import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const iconPath = process.env.PUBLIC_URL + "/assets/";

export default function CustomerNavi() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/customer">
                    <img
                        src={`${iconPath}avengers64px.png`}
                        alt=""
                        width="30"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/customer/job/list">
                            İş İlanlarım
                        </Nav.Link>
                        <Nav.Link as={Link} to="/customer/job/add">
                            İlan Ekle
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/customer/signup">
                            Üye Ol
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>                
            </Container>
        </Navbar>
    );
}
