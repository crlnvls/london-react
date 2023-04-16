import React from "react";

import "./Header.css";

import NavBar from "../NavBar";
import Heading from "../Heading";

const Header = () => {
  return (
    <>
      <div className="header">
        <NavBar />
        <Heading />
      </div>
    </>
  );
};

export default Header;
