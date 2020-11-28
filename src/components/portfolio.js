import React from "react"
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import myApps from "../assets/data/portfolio-apps.json"
import AppCard from "./appCard"

const PortfolioWrapper = styled.div`

`;



const Portfolio = () => {

  return (
    <PortfolioWrapper>
      <Container >
        <Row>
          {myApps.map(app => (
            <Col key={app.title}>
              <AppCard 
                title={app.title}
                img={app.img}
                github={app.github}
                deployed={app.deployed}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </PortfolioWrapper>
  );
}

export default Portfolio;