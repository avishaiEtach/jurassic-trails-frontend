import { ReactElement, useState } from "react";
import FacebookIcon from "../../../assets/images/facebook.svg?react";
import XIcon from "../../../assets/images/x.svg?react";
import InstagramIcon from "../../../assets/images/instagram.svg?react";
import LinkedinIcon from "../../../assets/images/linkedin.svg?react";
import { Pressable } from "react-aria-components";
import { navRoutes } from "../../routes/routesConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { Modal } from "../../Modal/Modal";
import { PrivacyPolicy } from "../../PrivacyPolicy/PrivacyPolicy";
import { TermsOfUse } from "../../TermsOfUse/TermsOfUse";
import { FAQ } from "../../FAQ/FAQ";

export const AppFooterComps = () => {
  const [chosenLegal, setChosenLegal] = useState<{
    label: string;
    comp: ReactElement;
  } | null>(null);

  const legalAndAccessibility = [
    { label: "Privacy Policy", comp: <PrivacyPolicy /> },
    { label: "Terms Of Use", comp: <TermsOfUse /> },
    { label: "FAQ", comp: <FAQ /> },
  ];
  const links = [
    <FacebookIcon />,
    <XIcon />,
    <InstagramIcon />,
    <LinkedinIcon />,
  ];
  const navigate = useNavigate();

  const FooterInfo = () => {
    return (
      <div className="footer-info-container">
        <Pressable
          onClick={() => {
            navigate(ROUTES.HOME);
          }}
        >
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
            <li>
              <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            {navRoutes.map((route) => (
              <li key={route.path}>
                <NavLink to={route.path}>{route.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-nav-bar-item">
          <h4 className="footer-nav-bar-item-header">Legal & Accessibility</h4>
          <ul className="footer-nav-bar-item-list">
            {legalAndAccessibility.map((item) => (
              <Pressable
                onClick={() => {
                  setChosenLegal(item);
                }}
                key={item.label}
              >
                <li>{item.label}</li>
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
        <Modal
          isOpen={!!chosenLegal}
          onOpenChange={() => {
            setChosenLegal(null);
          }}
          modalChildElement={chosenLegal?.comp ?? <></>}
        />
      </div>
    );
  };
  return { FooterInfo, FooterLinkTree };
};
