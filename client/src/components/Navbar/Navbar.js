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
            <Link to="/aboutme">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
