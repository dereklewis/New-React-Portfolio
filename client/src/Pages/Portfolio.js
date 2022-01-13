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
        <Col xs={6}>
          {/* <div className="flex-d flex-wrap justify-content-center"></div> */}
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={Concert} />
            <Card.Body>
              <Card.Title className="cardTitle">Concert Carpool</Card.Title>
              <Card.Text className="card-text">
                Going to live concerts can be incredibly enriching and
                fulfilling events. However, getting to the venue and back home
                safely is usually a difficult situation to navigate. While "Ride
                Sharing" services seem like a suitable alternative to driving
                yourself, often times it comes at a great cost, you are unable
                to locate your driver in a sea of fans or there is not enough
                bandwith to properly load the app. That is why we created
                Concert Carpool. Concert Carpool is a full stack web application
                designed to connect people who truly want to share rides. You
                can find like-minded people close to your neighborhood to get a
                ride with or ride with you to your favorite concert. Who knows,
                you may even find a new best friend in the process.
              </Card.Text>
              <Button className="gitButton" variant="primary">
                <ExternalLink href="https://github.com/dereklewis/New-React-Portfolio">
                  <span className="navButtonText">GitHub Repository</span>
                </ExternalLink>
              </Button>
              <Button className="siteButton" variant="primary">
                <ExternalLink href="https://boiling-reef-48460.herokuapp.com/">
                  <span className="navButtonText">Visit Concert Carpool</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={Workout} />
            <Card.Body>
              <Card.Title className="cardTitle">Workout Tracker</Card.Title>
              <Card.Text>Description goes here</Card.Text>
              <Button className="gitButton" variant="primary">
                <ExternalLink href="https://github.com/dereklewis/Workout-tracker">
                  <span className="navButtonText">GitHub Repository</span>
                </ExternalLink>
              </Button>
              <Button className="siteButton" variant="primary">
                <ExternalLink href="https://agile-sierra-81172.herokuapp.com/?id=6160c58e39f1400016275b76">
                  <span className="navButtonText">Visit Workout Tracker</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={Lyrific} />
            <Card.Body>
              <Card.Title className="cardTitle">Lyrific</Card.Title>
              <Card.Text>Description goes here</Card.Text>
              <Button className="gitButton" variant="primary">
                <ExternalLink href="https://github.com/dereklewis/music-project-main">
                  <span className="navButtonText">GitHub Repository</span>
                </ExternalLink>
              </Button>
              <Button className="siteButton" variant="primary">
                <ExternalLink href="https://dereklewis.github.io/music-project-main/">
                  <span className="navButtonText">Visit Lyrific</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col id="portfolio-column">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={GitOutside} />
            <Card.Body>
              <Card.Title className="cardTitle">Git Outside</Card.Title>
              <Card.Text>Description goes here</Card.Text>
              <Button className="gitButton" variant="primary">
                <ExternalLink href="https://github.com/dereklewis/Git-Outside">
                  <span className="navButtonText">GitHub Repository</span>
                </ExternalLink>
              </Button>
              <Button className="siteButton" variant="primary">
                <ExternalLink href="https://git-outside.herokuapp.com/">
                  <span className="navButtonText">Visit Git Outside</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={NoteTaker} />
            <Card.Body>
              <Card.Title className="cardTitle">Note Taker</Card.Title>
              <Card.Text>Description goes here</Card.Text>
              <Button className="gitButton" variant="primary">
                <ExternalLink href="https://github.com/dereklewis/note-taker/settings">
                  <span className="navButtonText">Visit Note Taker</span>
                </ExternalLink>
              </Button>
              <Button className="siteButton" variant="primary">
                <ExternalLink href="https://obscure-journey-60350.herokuapp.com/">
                  <span className="navButtonText">Visit Note Taker</span>
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={DayPlanner} />
            <Card.Body>
              <Card.Title className="cardTitle">Day Planner</Card.Title>
              <Card.Text>Description goes here</Card.Text>
              <Button className="gitButton" variant="primary">
                <ExternalLink href="https://github.com/dereklewis/day-planner">
                  <span className="navButtonText">Visit Day Planner</span>
                </ExternalLink>
              </Button>
              <Button className="siteButton" variant="primary">
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
