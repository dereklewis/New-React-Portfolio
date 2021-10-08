import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Container className="flexContainer">
          <Nav className="footerNav">
            <Nav.Link
              href="https://www.linkedin.com/in/derek-lewis-62343511/"
              target="_blank"
              id="navLink"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="#features" id="navLink">
              Github
            </Nav.Link>
            <Nav.Link href="#pricing" id="navLink">
              Stack Overflow
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
