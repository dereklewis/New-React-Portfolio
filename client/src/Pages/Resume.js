import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Resume = () => {
  return (
    <Container className="resume-block">
      <>
        <div>
          <h1 className="header1">RESUME</h1>
          <Button
            className="resumeButton"
            href="https://drive.google.com/file/d/1_3A9yxtqV1amNaLuWnGXHJgKU_bNQ7sc/view?usp=sharing"
            target="_blank"
          >
            Download Derek's Resume
          </Button>{" "}
        </div>
      </>
    </Container>
  );
};

export default Resume;
