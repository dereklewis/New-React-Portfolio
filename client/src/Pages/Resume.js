import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import ButtonMailto from "./MailToButton";
// import AllPagesPDFViewer from "../components/pdf/all-pages";
// import samplePDF from "../components/derekresume.docx.pdf";

const Resume = () => {
  return (
    <Container className="resume-block">
      <>
        <div>
          <Button
            className="resumeButton"
            href="https://drive.google.com/file/d/1_3A9yxtqV1amNaLuWnGXHJgKU_bNQ7sc/view?usp=sharing"
            target="_blank"
          >
            Download Derek's Resume
          </Button>{" "}
        </div>
        <div>
          <Button
            className="mailTo"
            href="mailto:derek.lewis513@gmail.com"
            target="_blank"
          >
            E-Mail Derek
          </Button>{" "}
        </div>
      </>
    </Container>
  );
};

export default Resume;
