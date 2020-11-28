import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`

`;

const AppCard = ({title, github, deployed, img}) => {
  return (
    <DetailsWrapper>
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardBody>
          <a>
            <img src={img} />
          </a>

        </CardBody>
      </Card>
    </DetailsWrapper>
  );
}

export default AppCard;