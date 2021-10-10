import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import Concert from "../components/assets/concert.png";
import GitOutside from "../components/assets/gitoutside.png";
import Workout from "../components/assets/workout.png";
import NoteTaker from "../components/assets/notetaker.png";
import Lyrific from "../components/assets/lyrific.png";
import DayPlanner from "../components/assets/dayplanner.png";

const Project = () => {
  return (
    <Container className="portfolio-cards">
      <Row>
        <Col>
          {/* <div className="flex-d flex-wrap justify-content-center"></div> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Concert} />
            <Card.Body>
              <Card.Title>Concert Carpool</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/New-React-Portfolio">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://boiling-reef-48460.herokuapp.com/">
                  <span className="navButtonText">Visit Concert Carpool</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Workout} />
            <Card.Body>
              <Card.Title>Workout Tracker</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/Workout-tracker">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://agile-sierra-81172.herokuapp.com/?id=6160c58e39f1400016275b76">
                  <span className="navButtonText">Visit Workout Tracker</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Lyrific} />
            <Card.Body>
              <Card.Title>Lyrific</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/music-project-main">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://dereklewis.github.io/music-project-main/">
                  <span className="navButtonText">Visit Lyrific</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={GitOutside} />
            <Card.Body>
              <Card.Title>Git Outside</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/Git-Outside">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://git-outside.herokuapp.com/">
                  <span className="navButtonText">Visit Git Outside</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={NoteTaker} />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/note-taker/settings">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://obscure-journey-60350.herokuapp.com/">
                  <span className="navButtonText">Visit Note Taker</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={DayPlanner} />
            <Card.Body>
              <Card.Title>Day Planner</Card.Title>
              <Card.Text>
                <ExternalLink href="https://github.com/dereklewis/day-planner">
                  <span>Github Repository</span>
                </ExternalLink>
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://dereklewis.github.io/day-planner/">
                  <span className="navButtonText">Visit Day Planner</span>
                </ExternalLink>
              </Button>
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
