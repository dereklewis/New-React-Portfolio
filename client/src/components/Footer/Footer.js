import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="light" fixed="bottom">
        <Container className="flexContainer">
          <Nav className="footerNav">
            <Nav.Item>
              <Link
                to="https://www.linkedin.com/in/derek-lewis-62343511/"
                target="_blank"
                className="navLink"
              >
                LinkedIn
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#features" className="navLink">
                Github
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#pricing" className="navLink">
                Stack Overflow
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
