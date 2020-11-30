import React, { useState } from "react"
import { Nav } from "reactstrap";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const navWrapper = styled.div`
  span {
    .fab {
      font-size: 30pt;
      margin-left: 50px;
    }
  }
  nav {
    margin-bottom: 20px;
    flex-direction: row;
  }
  
  @media screen and (max-width: 780) {
    #navbarNav {
      flex-direction: row;
      text-align: center;
      justify-items: space-between;
      align-content: center;
    }
    .items {
        display: flex;
        flex-direction: row;
      }
  }
`;

const NavBar = ({title}) => {
  let [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const links = [
    {
      link:"/",
      name:"Portfolio"
    },{
      link:"/about",
      name:"About"
    },{
      link:"/contact",
      name:"Contact"
    }
  ]

  return (
    <navWrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow ">
        <div className="box">
            <span className="title" href="/about"><h1>Jason Tilley</h1></span>
        </div>

        <div className="ml-auto" id="navbarNav">
            <ul className="navbar-nav ml-auto items">
              {links.map(({ name, link }) => (
                <li className="item">
                  <a className="nav-link" href={link}>{name}</a>
                </li>
              ))}
              <li className="icon">  
                <a className="nav-link" href="https://www.linkedin.com/in/jason-t-tilley/">  
                  <i className="fab fa-linkedin"> LinkedIn </i>  
                </a>
              </li>
              <li className="icon">
                <a className="nav-link" href="https://github.com/jttilley">  
                  <i className="fab fa-github"> GitHub </i>
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </navWrapper>
  );
}
export default NavBar;