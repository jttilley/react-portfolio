import React from "react"
import {Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Footer from "./footer";
import NavBar from "./nav";

const ContactWrapper = styled.div`
    .fullbackground {
    background-image: url("./images/background.jpeg");
    background-size: cover;
    background-position: center;
    height: 800px;
  }
  .container {
    height: 600px;
    margin-top: 30px;
  }
  .info {
    font-size: 20pt;

    li {
      margin: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    .container { 
      height: 50%;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="fullbackground">
        <NavBar />
        <Container>
          <Row>
            <Col lg={12}>
              <ul className="info">
                <li > GitHub: <a  href="https://github.com/jttilley">jttilley</a>
                </li>
                <li > LinkedIn: <a href="https://www.linkedin.com/in/jason-t-tilley/">jason-t-tilley</a>
                </li>
                <li>Email: jttilley007@gmail.com</li>
                <li>Resume: <a href="https://docs.google.com/document/d/1JZmUQ6V4Xdrd1v8K9TQgww6I28AzIHfSSeBME6vDJ1w/edit?usp=sharing">Jason Tilley</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </ContactWrapper>
  );
}

export default Contact;