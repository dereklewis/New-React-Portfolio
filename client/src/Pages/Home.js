import React from "react";
import { Container, Row } from "react-bootstrap";
import YourImage from "../components/assets/fullbody.jpeg";

const Home = () => {
  return (
    <Container
      className="homeContainer"
      // style={{
      //   display: "Flex",
      //   backgroundImage: "url(${ CloudImage })",
      // }}
    >
      {/* <Row xs={4} classname="image-row"> */}
      <div classname="image-div">
        <img className="image" src={YourImage} fluid />
      </div>
      {/* </Row> */}
      {/* <Row xs={8} classname="text-row"> */}
      {/* <image classname="cloud-image" src={CloudImage} fluid /> */}
      <div className="textDiv">
        {/* <p className="text"> */}I am a Full Stack Web Developer with a Web
        Development Certificate from the University of Denver. Experienced at
        building full stack web applications from the ground up utilizing the
        MERN stack and other frameworks/libraries and databases. Adept at
        working within diverse groups of all sizes. Strong interpersonal skills
        and a team player that is passionate about the success of the
        organization. Experience with large complex projects with multiple
        stakeholders such as new restaurant/hotel openings and transitions.
        {/* </p> */}
      </div>
      {/* </Row> */}
    </Container>
  );
};

export default Home;
