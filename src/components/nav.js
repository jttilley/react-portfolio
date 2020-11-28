import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const navWrapper = styled.nav`

`;

const nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <nav>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
            </Link>
        </li>
        
      </ul>
    </nav>
  );
}