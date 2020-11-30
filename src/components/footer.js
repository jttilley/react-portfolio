import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const FooterWrapper = styled.div`
  span {
    margin: 0 20px;
    color: white;
  }

  i {
    font-size: 30pt;
    color: white;
  }

  footer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-end;
    padding: 30px 200px;
    background-color: black;
  }

  @media screen and (max-width: 480px) {
    span {
      margin: 0 20px;
      color: white;
    }

    i {
      font-size: 30pt;
      color: white;
    }

    footer {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: flex-end;
      padding: 30px 10px;
      width: 100%
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <footer>
        <span>  
          <a href="https://www.linkedin.com/in/jason-t-tilley/">  
            <i className="fab fa-linkedin">  </i>  
          </a>
        </span>
        <span>
          <a href="https://github.com/jttilley">  
            <i className="fab fa-github">  </i>
          </a>
        </span>
        <span>
          &copy; Copyright 2020
        </span>
      </footer>
    </FooterWrapper>
  );
}

export default Footer;