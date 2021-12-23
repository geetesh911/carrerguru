import { FC } from "react";
import FooterLinks from "./svgs/FooterLinks";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="./assets/logo.png" alt="logo" />
        <div className="divider"></div>
        <div className="logo-text">Virtual Class for Zoom</div>
      </div>
      <div className="sub-heading">Subscribe to get our Newsletter</div>
      <div className="subscribe">
        <input className="subscribe-input" placeholder="Your Email" />
        <div className="subscribe-button">Subscribe</div>
      </div>
      <div className="download-buttons">
        <img src="./assets/download-buttons.png" alt="download-buttons" />
      </div>
      <div className="footer-links">
        <FooterLinks />
        <div className="copyright">© 2021 Website Dokan.</div>
      </div>
    </div>
  );
};

export default Footer;
