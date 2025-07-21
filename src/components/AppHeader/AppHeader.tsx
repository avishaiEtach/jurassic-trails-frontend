import React from "react";
import logo from "../../assets/images/logo2.png";

export const AppHeader = () => {
  return (
    <header className="header-background">
      <div className="wrapper header-container">
        <div className="logo-image-container">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>Articles</li>
          <li>Categories</li>
          <li>About</li>
          <li>Concat</li>
        </ul>
        <div className="demo"></div>
      </div>
    </header>
  );
};
