import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="nav-items">
          <div className="item">
            <img
              className="nav-img"
              src="/underground.png"
              alt="underground icon"
            />
          </div>
          <div>
            <span className="item"></span>
          </div>
          <div>
            <a className="item" href="#explore">
              Tours
            </a>
          </div>
          <div>
            <a className="item" href="#guide">
              Guides
            </a>
          </div>
          <div>
            <a className="item" href="#footer">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
