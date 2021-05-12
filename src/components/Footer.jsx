import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src="" alt="logo" />
          </div>
          <div className="col-4">
            <nav>
              <ul>
                Features
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>

              <ul>
                Resources
                <li>Blog</li>
                <li> Developers</li>
                <li>Support</li>
              </ul>

              <ul>
                Company
                <li> About</li>
                <li> Our</li>
                <li>Team</li>
                <li> Careers</li>
                <li> Contact</li>
              </ul>
            </nav>
          </div>
          <div className="col-3">
            <img src="" alt="facebook" />
            <img src="" alt="twitter" />
            <img src="" alt="pinterest" />
            <img src="" alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
