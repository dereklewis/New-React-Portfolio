import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Derek Lewis</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
