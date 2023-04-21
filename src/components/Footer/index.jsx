import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div>
          <h3 className="footer-h">Contact Us</h3>
          <div>
            <img src="/email.png" alt="email icon" className="socials" />
            <img
              src="/instagram.png"
              alt="instagram icon"
              className="socials"
            />
            <img src="/facebook.png" alt="facebook icon" className="socials" />
            <img src="/twitter.png" alt="twitter icon" className="socials" />
            <p className="info-footer">Info · Support · Marketing</p>
            <p className="info-footer">Terms of Use · Privacy Policy</p>
            <p className="info-footer">© 2023 London</p>
          </div>
        </div>
        <img src="/underground.png" alt="underground icon" />
      </div>
    </>
  );
};

export default Footer;
