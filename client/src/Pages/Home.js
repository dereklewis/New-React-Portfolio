import React from "react";
import { Container, Row } from "react-bootstrap";
import YourImage from "../components/assets/fullbody.jpeg";
import CloudImage from "../components/assets/cloudimage.jpg";

const Home = () => {
  return (
    <Container
      style={{
        display: "Flex",
        backgroundImage: "url(${ CloudImage })",
      }}
    >
      <Row xs={4} classname="image-row">
        <div classname="image-div">
          <img className="image" src={YourImage} fluid />
        </div>
      </Row>
      <Row xs={8} classname="text-row">
        {/* <image classname="cloud-image" src={CloudImage} fluid /> */}
        <p className="text">
          After 20 years in the hospitality industry I am excited to make a
          change! I am originally from Binghamton, New York and I love going to
          see live music, traveling, cooking, golf and team trivia. I now live
          in beautiful Denver, Colorado. I want to be a web developer because I
          believe that websites tell the story of who you are to the world and I
          want to help people tell their best stories. Cheers -- Derek
        </p>
      </Row>
    </Container>
  );
};

export default Home;
