import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="flex items">
        <div>
          <span>Tours</span>
        </div>
        <div>
          <span>Guides</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
