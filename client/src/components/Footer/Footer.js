import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="light" fixed="bottom">
        <Container className="flexContainer">
          <Nav className="footerNav">
            <Nav.Item>
              <ExternalLink
                href="https://www.linkedin.com/in/derek-lewis-62343511/"
                className="navLink"
              >
                <span>LinkedIn</span>
              </ExternalLink>
            </Nav.Item>
            <Nav.Item>
              <ExternalLink
                href="https://github.com/dereklewis"
                className="navLink"
              >
                <span>Github</span>
              </ExternalLink>
            </Nav.Item>
            <Nav.Item>
              <ExternalLink
                href="https://stackoverflow.com/users/16268162/derek"
                className="navLink"
              >
                <span>Stack Overflow</span>
              </ExternalLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
