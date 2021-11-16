import React from "react";
import { Container } from "react-bootstrap";
import YourImage from "../components/assets/headshotround.jpg";

const AboutMe = () => {
  return (
    <Container className="about-block">
      <>
        <div>
          <img className="image" src={YourImage} fluid />
        </div>
        <p className="text">
          After 20 years in the hospitality industry I am excited to make a
          change! I am originally from Binghamton, New York and I love going to
          see live music, traveling, cooking, golf and team trivia. I now live
          in beautiful Denver, Colorado. I want to be a web developer because I
          believe that websites tell the story of who you are to the world and I
          want to help people tell their best stories.
        </p>

        <p className="text">Cheers -- Derek</p>
      </>
    </Container>
  );
};

export default AboutMe;
