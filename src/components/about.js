import React from "react"
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";
import NavBar from "./nav";

const AboutWrapper = styled(Container)`
  .aboutPic {
    width: 300px;
    float: left;
    margin-right: 20px;

  }
  .about {
      margin-top: 20px;
      padding: 10px;
      background-color: white;
  }
  
  .row{
    margin-top: 20px;
  }
`;

const About = () => {
  return (
    <>
      <NavBar Title="About Me" />

      <AboutWrapper>
        <Row>
        <Col lg={8} className="fullsheet">
            <Row>
              <Col lg={12}>
                <h2>About Me</h2>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="about">
                <img className="aboutPic" alt="Picture of Jason Tilley" src="./images/Family.jpeg" />
                <p>
                  I enjoy analyzing and problem solving. I am great with math and logic and love learning new things. I got into coding when I was in middle school and have enjoyed doing it ever since. I have a heart for helping others, am a good listener, and value accuracy, honesty, and truth. I love coding because I'm able to make very helpful tools and functions for myself and others and it gives me the ability to create unique and super useful solutions for people. 
                </p>
                <p>
                  For the last few years, I have been innovating computer improvements in efficiency, error checking, and ease for every day tasks, in every department for Lazer Designs, where I currently work, and a few other companies on the side. With all the changes and programs I’ve created, I’ve saved Lazer Designs 10s of 1000s of dollars in time, man power and mistakes.
                </p>
                <p>
                  My creativity is not only in programming. I have also made many movies with my friends since elementary school. Over the years I got better at making videos and editing them together. I've even helped edit award winning documentaries, and have made many training videos. 
                </p>
                <p>
                  I have a heart for teaching others about the facinating things I've learned. Some of my favorite passtimes are playing with my kids, playing volleyball, and writing about things I've learned. I would love to find a job were I can create helpful and exciting apps full time. 
                </p>
                <p>
                  Technology Proficiencies: Javascript, jQuery, HTML, CSS, Bootstrap, React, Ajax, APIs, Node.js, express, express-handlebars, Visual Basic for Applications in Excel and CorelDraw, and AutoHotKeys
                </p>
                <p>
                  Linkedin: <a href="https://www.linkedin.com/in/jason-t-tilley/">jason-t-tilley</a>
                </p>
                <p>
                  GitHub: <a href="https://github.com/jttilley">jttilley</a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </AboutWrapper>
    </>
  );
}

export default About;