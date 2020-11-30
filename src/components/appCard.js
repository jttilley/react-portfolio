import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
  img {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 0px;
    border-width: 0px;
  }

  .card-body {
    margin-right: 0;
  }

  .card-header {
    align-content: center;
    flex-direction: row;
  }

  .github {
    display: flex;
    align-items: center;
    float: right;
    margin: auto;
    font-size: 15pt;
  }

  .title {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    img {
      display: flex;
      justify-content: center;
      width: 300px;
      height: auto;
    }

    .card-body {
      margin: 0px;
      padding: 0px;
    }

    .card-header {
      flex-direction: column;
    }
    .github {
      float: none;
    }

    .title {
      font-size: 30px;
      margin-right: 0px;
    }
  }
`;

const AppCard = ({title, github, deployed, img}) => {
  return (
    <DetailsWrapper>
      <div className="card">
        <a href={deployed}>
          <CardHeader>
            <span className="title">{title} </span>
            <a className="github" href={github}>GitHub</a>
          </CardHeader>
          <CardBody>
              <img src={img} />
          </CardBody>
        </a>
      </div>
    </DetailsWrapper>
  );
}

export default AppCard;