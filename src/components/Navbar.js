import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavLink, MobileIcon, NavMenu } from "./NavbarElements";
import './Navbar.css'

export function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h3>Texnikum.uz</h3>
        </NavLink>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click} >
          <NavLink to="/" style={{paddingTop:'13px'}}>Bosh sahifa</NavLink>
          <NavLink to="/tuzilma"  style={{paddingTop:'13px'}} activeStyle>
            Tuzilma
          </NavLink>
          <NavLink to="/faoliyat"  style={{paddingTop:'13px'}} activeStyle>
            Faoliyat
          </NavLink>
          <NavLink to="/talabalar"  style={{paddingTop:'13px'}} activeStyle>
            Talabalarga
          </NavLink>
          <NavLink to="/news"  style={{paddingTop:'13px'}} activeStyle>
            Yangiliklar
          </NavLink>
          <NavLink to="/aloqa"  style={{paddingTop:'13px'}} activeStyle>
            Bog'lanish
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}
