import React, { useState, useEffect } from "react";
import "./Header.scss";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components'
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ColorWhite = styled.p`
    color: white;
    font-size: 25px;
    font-family: Bahnscrift;
    margin-bottom: 0rem;
`;

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
        <ColorWhite>NOUS SUIVRE</ColorWhite> 
          <a href="https://instagram.com/labelcartelrecords?igshid=nh4nxlohgzgi"><FaInstagram/></a>
          <a href="https://www.facebook.com/Studio-Cartel-Records-164293067112349/"><FaFacebook/></a> <br/>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
       <ColorWhite>NOUS SUIVRE</ColorWhite>
      </button>
    </header>
  );
}