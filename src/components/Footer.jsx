import React from "react";

import "../assets/styles/components/Footer.scss";

import logo from "../assets/img/logo.svg";
import facebook from "../assets/img/icon-facebook.svg";
import instagram from "../assets/img/icon-instagram.svg";
import twitter from "../assets/img/icon-twitter.svg";
import pinterest from "../assets/img/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="bg--dark-violet">
      <div className="container">
        <div className="row footer">
          <div className="col-lg-4 col-md-3 col-sm-12 footer__img">
            <img className="footer__img__logo" src={logo} alt="logo" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 footer__links">
            <nav className="footer__links__nav">
              <ul>
                <p>Features</p>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>

              <ul>
                <p>Resources</p>
                <li>Blog</li>
                <li> Developers</li>
                <li>Support</li>
              </ul>

              <ul>
                <p>Company</p>
                <li> About</li>
                <li> Our</li>
                <li>Team</li>
                <li> Careers</li>
                <li> Contact</li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 col-sm-12 footer__social">
            <img
              className="footer__social__img"
              src={facebook}
              alt="facebook"
            />
            <img className="footer__social__img" src={twitter} alt="twitter" />
            <img
              className="footer__social__img"
              src={pinterest}
              alt="pinterest"
            />
            <img
              className="footer__social__img"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
