import { AppFooterComps } from "./hooks/AppFooterComps";

export const AppFooter = () => {
  const { FooterInfo, FooterLinkTree } = AppFooterComps();
  return (
    <footer>
      <div className="footer-background-container">
        <div className="wrapper footer-main-container">
          <FooterInfo />
          <FooterLinkTree />
        </div>
        <div className="wrapper footer-separator"></div>
        <span className="footer-copyright">
          ©Copyright {new Date().getFullYear()}. All right reserved
        </span>
      </div>
    </footer>
  );
};
