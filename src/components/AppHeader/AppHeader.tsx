import logo from "../../assets/images/logo2.png";
import { Button, Pressable } from "react-aria-components";
import HamburgerIcon from "../../assets/images/hamburger.svg?react";
import { useAppHeader } from "./hooks/useAppHeader";
import { navRoutes } from "../routes/routesConfig";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  const { showNav, onClickCloseNav, onClickHamburger, navRef, onClickLogo } =
    useAppHeader();
  return (
    <header className="header-background">
      <div data-show={showNav} className="nav-over-bg"></div>
      <div className="wrapper header-container">
        <Pressable onClick={onClickLogo}>
          <div className="logo-image-container">
            <img src={logo} alt="" />
          </div>
        </Pressable>
        <ul ref={navRef} data-open={showNav}>
          {navRoutes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path}>{route.label}</NavLink>
            </li>
          ))}
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
