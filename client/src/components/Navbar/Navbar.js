import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Derek Lewis</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link to="/portfolio">Portfolio</Nav.Link>
            <Link to="/contact">Contact</Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
