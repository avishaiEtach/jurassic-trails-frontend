import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export const useAppHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    };
  }, [showNav]);

  const handleClick = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    const clickedInsideNav = navRef.current?.contains(target);
    const clickedOnHamburgerButton = target.closest(".hamburger");

    if (showNav && !clickedInsideNav && !clickedOnHamburgerButton) {
      setShowNav(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && showNav) {
      setShowNav(false);
    }
  };

  const onClickCloseNav = () => {
    setShowNav(false);
  };

  const onClickHamburger = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setShowNav(!showNav);
  };

  const onClickLogo = () => {
    navigate(ROUTES.HOME);
  };

  return { showNav, onClickCloseNav, onClickHamburger, navRef, onClickLogo };
};
