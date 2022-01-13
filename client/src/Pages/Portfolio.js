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
        <div className="spacingDiv"></div>
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
              <Card.Text className="card-text">
                This is a full stack application built using the MERN stack. We
                utilized the SeatGeek API to automatically pull the local event
                information and populate the site. MongoDB Atlas is used to
                retain user data. The user verification is done with JSON web
                tokens.
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
              <Card.Text>
                This application was built to track users workout data. The user
                is able to enter in various workout activities which are broken
                down into resistance and cardio categories. From there, the user
                can track weight, sets, repatitions, duration and milage. The
                application then aggregates the totals for the user to see
                across time.
              </Card.Text>
              <Card.Text>
                The full stack application was built using HTML and CSS on the
                front end and Mongoose for the back end.
              </Card.Text>
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
          <div className="spacingDiv"></div>

          {/* <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={Lyrific} />
            <Card.Body>
              <Card.Title className="cardTitle">Lyrific</Card.Title>
              <Card.Text>
                The Lyrific application was designed to help Karaoke aficionados
                find lyrics to songs they would like to sing for practice
                purposes. They can also utilize it as a way to brush up on the
                lyrics prior to a performance. There is also a current Top 10
                song list for those who would like to learn the most current
                hits.
              </Card.Text>
              <Card.Text>
                The application is built simply with HTML, CSS and Javascript.
                Two APIs are used to pull the lyric information and to populate
                the Top 10 list. While the lyrics feature only displays 30% of
                each song, the idea was to pay for the full lyrics once the
                application was monetized.
              </Card.Text>
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
          </Card> */}
        </Col>
        <Col id="portfolio-column">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={GitOutside} />
            <Card.Body>
              <Card.Title className="cardTitle">Git Outside</Card.Title>
              <Card.Text>
                Outdoor activities experience a significant uptick since the
                beginning of the pandemic. Camping is perfect for social
                distancing while still letting people get out of the house. As a
                result, campsites have been used more than ever and it has
                created a need for more campsites to get on the map. Git Outside
                was created to allow campers to share their feedback on
                campsites all over the country so that others can enjoy the best
                that the great outdoors has to offer.
              </Card.Text>
              <Card.Text>
                The technologies used to create this application were HTML, CSS,
                Bootswatch, NodeJS, Heroku, MySQL Workbench, MySQL@, Handlebars,
                Cloudinaary, JawsDB and ExpressJs.
              </Card.Text>
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
            <Card.Img variant="top" src={Lyrific} />
            <Card.Body>
              <Card.Title className="cardTitle">Lyrific</Card.Title>
              <Card.Text>
                The Lyrific application was designed to help Karaoke aficionados
                find lyrics to songs they would like to sing for practice
                purposes. They can also utilize it as a way to brush up on the
                lyrics prior to a performance. There is also a current Top 10
                song list for those who would like to learn the most current
                hits.
              </Card.Text>
              <Card.Text>
                The application is built simply with HTML, CSS and Javascript.
                Two APIs are used to pull the lyric information and to populate
                the Top 10 list. While the lyrics feature only displays 30% of
                each song, the idea was to pay for the full lyrics once the
                application was monetized.
              </Card.Text>
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
          {/* <Card style={{ width: "30rem" }}>
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
          </Card> */}
        </Col>
        {/* </div>
        </div> */}
      </Row>
    </Container>
  );
};

export default Project;
