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
            <span className="item">About</span>
          </div>
          <div>
            <span className="item">Tours</span>
          </div>
          <div>
            <span className="item">Guides</span>
          </div>
          <div>
            <span className="item">Contact</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
