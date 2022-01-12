import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" fixed="top" id="#nav-bar">
        <Container className="justify-content-right">
          <Link to="/aboutme" className="brandName">
            Derek Lewis
          </Link>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Link to="/New-React-Portfolio" className="navLink">
                About Me
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/portfolio" className="navLink">
                Portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/resume" className="navLink">
                Resume
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
