import React, { Children } from "react"
import styled from "styled-components";

const FullBackgroundWrapper = styled.div`
  .fullbackground {
    background-image: url("https://github.com/jttilley/react-portfolio/blob/main/images/background.jpeg?raw=true");
    background-size: cover;
    background-position: center;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    .fullbackground {
      background-image: none;
    }
  }
`;

function Background({ children }) {
  return(
    <FullBackgroundWrapper>
      <div className="fullbackground">{children}</div>
    </FullBackgroundWrapper>
  );
}

export default Background;