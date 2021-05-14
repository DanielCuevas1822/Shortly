import React from "react";
import logo from "../assets/img/logo.svg";

import "../assets/styles/components/Header.scss";
import "../assets/styles/components/Buttons.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row header">
          <div className="col-md-2 col-sm-12 header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-md-6 col-sm-12 header__nav">
            <nav>
              <ul>
                <li className="header__nav__item">Features</li>
                <li className="header__nav__item">Pricing</li>
                <li className="header__nav__item">Resources</li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 col-sm-12 header__profile">
            <button className="header__profile__loginbtn btn--white">
              Login
            </button>
            <button className="header__profile__signupbtn  btn--green">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
