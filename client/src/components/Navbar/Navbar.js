import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" id="#nav-bar">
        <Container>
          <Navbar.Brand id="name">Derek Lewis</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Link to="/aboutme" className="nav-link">
              About Me
            </Link>
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
