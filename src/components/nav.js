import React, { useState } from "react"
import { Nav } from "reactstrap";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const navWrapper = styled.nav`
.navbar {
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .nav {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }
`;

const NavBar = () => {
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
      <Nav>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {links.map(({ name, link }) => (
            <li className='nav-item'>
                <Link to={link} className='nav-links' onClick={closeMobileMenu}>
                    {name}
                </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </navWrapper>
  );
}
export default NavBar;