import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src="" alt="logo" />
          </div>
          <div className="col-6">
            <nav>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </nav>
          </div>
          <div className="col-3">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
