import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
  img {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 400px;
  }

  .card-body {
    margin-right: 0;
  }

  .github {
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    font-size: 15pt;
  }

  span {
    font-size: 30px;
    margin-right: 50px;
  }
`;

const AppCard = ({title, github, deployed, img}) => {
  return (
    <DetailsWrapper>
      <Card>
        <a href={deployed}>
          <CardHeader>
            <span>{title} </span>
          </CardHeader>
          <CardBody>
              <img src={img} />
              <a className="github" href={github}>GitHub</a>
          </CardBody>
        </a>
      </Card>
    </DetailsWrapper>
  );
}

export default AppCard;