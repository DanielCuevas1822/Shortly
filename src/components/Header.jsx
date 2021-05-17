import React from "react";
import { useState } from "react";

import logo from "../assets/img/logo.svg";

import "../assets/styles/components/Header.scss";
import "../assets/styles/components/Buttons.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <header>
      <div className="container">
        <div className="row header">
          <div className="col-md-2 col-sm-12 header__logo">
            <img src={logo} alt="logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleActive}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div
            className={`col-md-6 col-sm-12 header__nav ${
              isActive ? "my-d-block" : "my-d-none"
            }`}
          >
            <nav>
              <ul>
                <li className="header__nav__item">Features</li>
                <li className="header__nav__item">Pricing</li>
                <li className="header__nav__item">Resources</li>
              </ul>
            </nav>
          </div>
          <div
            className={`col-md-4 col-sm-12 header__profile ${
              isActive ? "my-d-block" : "my-d-none"
            }`}
          >
            <hr />
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
