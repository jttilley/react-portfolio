import React from "react"
import {Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Footer from "./footer";
import NavBar from "./nav";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col lg={12}>
            <ul>
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
    </>
  );
}

export default Contact;