import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Container>
          <Nav className="align-content-between" activeKey="/home">
            <Nav.Link
              href="https://www.linkedin.com/in/derek-lewis-62343511/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="#features">Github</Nav.Link>
            <Nav.Link href="#pricing">Stack Overflow</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
