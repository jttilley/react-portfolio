import React from "react"
import {Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import NavBar from "./nav";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col lg={12}>
            <ul>
              <li > GitHub: 
                  <a  href="https://github.com/jttilley">https://github.com/jttilley</a>
              </li>
              <li > LinkedIn: 
                  <a href="https://www.linkedin.com/in/jason-t-tilley/">https://www.linkedin.com/in/jason-t-tilley/</a>
              </li>
              <li>Email: jttilley007@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;