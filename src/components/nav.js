import React, { useState } from "react"
import { Nav } from "reactstrap";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const navWrapper = styled.nav`
  nav {
    /* background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); */
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-bottom: 30px;
  }
  navbar {
    margin-bottom: 30px;
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
    <navWrapper className="navbar navbar-expand-lg navbar-light bg-light shadow" >
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>  */}

      <div className="box">
          <span className="title" href=""><h1>Jason Tilley</h1></span>
          <span><h2>{title}</h2></span>
      </div>

      <div className="ml-auto" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {links.map(({ name, link }) => (
              <li className="nav-item">
                <a className="nav-link" href={link}>{name}</a>
              </li>
            ))}
          </ul>
      </div>
    </navWrapper>
  );
}
export default NavBar;