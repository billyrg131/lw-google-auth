import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./App.css";

export default function NavBar(){
    return(
        <>
            <Navbar bg="primary" variant="dark" className="nav-bar">
            <Container>
                <Navbar.Brand href="#home" style={{fontSize:"22px"}}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/h">Home</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </>
    )
}