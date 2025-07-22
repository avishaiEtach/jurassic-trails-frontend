import React from "react";
import FacebookIcon from "../../../assets/images/facebook.svg?react";
import XIcon from "../../../assets/images/X.svg?react";
import InstagramIcon from "../../../assets/images/instagram.svg?react";
import LinkedinIcon from "../../../assets/images/linkedin.svg?react";
import { Pressable } from "react-aria-components";

export const AppFooterComps = () => {
  const pages = ["Articles", "Categories", "About us", "Contact"];
  const legalAndAccessibility = ["Privacy Policy", "Terms Of Use", "FAQ"];
  const links = [
    <FacebookIcon />,
    <XIcon />,
    <InstagramIcon />,
    <LinkedinIcon />,
  ];

  const FooterInfo = () => {
    return (
      <div className="footer-info-container">
        <Pressable>
          <span className="footer-logo">Jurassic Trails</span>
        </Pressable>
        <p className="footer-description">
          At Jurassic Trails, we strive to uncover the secrets of the
          prehistoric world and share fascinating insights into the age of
          dinosaurs. Join us on a journey through the Mesozoic Era and discover
          articles, research, and stories that spark the imagination. Follow us
          on social media to stay updated with our latest discoveries and
          content!
        </p>
      </div>
    );
  };

  const FooterLinkTree = () => {
    return (
      <div className="footer-nav-bar">
        <div className="footer-nav-bar-item">
          <h4 className="footer-nav-bar-item-header">Pages</h4>
          <ul className="footer-nav-bar-item-list">
            {pages.map((page) => (
              <li key={page}>{page}</li>
            ))}
          </ul>
        </div>
        <div className="footer-nav-bar-item">
          <h4 className="footer-nav-bar-item-header">Legal & Accessibility</h4>
          <ul className="footer-nav-bar-item-list">
            {legalAndAccessibility.map((item) => (
              <Pressable key={item}>
                <li>{item}</li>
              </Pressable>
            ))}
          </ul>
        </div>
        <div className="footer-nav-bar-item">
          <h4 className="footer-nav-bar-item-header">Follow</h4>
          <ul className="footer-nav-bar-item-list icons">
            {links.map((Link, index) => (
              <Pressable key={index}>
                <li>{Link}</li>
              </Pressable>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return { FooterInfo, FooterLinkTree };
};
