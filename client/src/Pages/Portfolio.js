import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import Concert from "../components/assets/concert.png";
import YourImage from "../components/assets/IMG3466.png";

const Project = () => {
  return (
    <Container className="portfolio-cards">
      <Row>
        <Col>
          {/* <div className="flex-d flex-wrap justify-content-center">
            <div> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Concert} />
            <Card.Body>
              <Card.Title>Concert Carpool</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/New-React-Portfolio">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={YourImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={YourImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={YourImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={YourImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={YourImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* </div>
        </div> */}
      </Row>
    </Container>
  );
};

export default Project;
