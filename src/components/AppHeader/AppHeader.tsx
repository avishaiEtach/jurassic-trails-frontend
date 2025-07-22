import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo2.png";
import { Button } from "react-aria-components";
import HamburgerIcon from "../../assets/images/hamburger.svg?react";
import { useAppHeader } from "./hooks/useAppHeader";

export const AppHeader = () => {
  const { showNav, onClickCloseNav, onClickHamburger, navRef } = useAppHeader();
  return (
    <header className="header-background">
      <div data-show={showNav} className="nav-over-bg"></div>
      <div className="wrapper header-container">
        <div className="logo-image-container">
          <img src={logo} alt="" />
        </div>
        <ul ref={navRef} data-open={showNav}>
          <li>Articles</li>
          <li>Categories</li>
          <li>About</li>
          <li>Concat</li>
          <li className="nav-button-close">
            <Button onClick={onClickCloseNav}>
              <span>close</span>
            </Button>
          </li>
        </ul>
        <div className="demo"></div>
        <button className="hamburger" onClick={onClickHamburger}>
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
};
