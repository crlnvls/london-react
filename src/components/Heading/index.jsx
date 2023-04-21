import React from "react";

import "./Heading.css";
import Button from "../Button";

const Heading = () => {
  return (
    <>
      <div className="heading">
        <p className="tour-item">Tour</p>
        <p className="london-item">London</p>
      </div>
      <div className="buttons">
        <div className="heading-btn">
          <Button text={"Book a tour"} />
        </div>
        <div className="heading-btn">
          <Button text={"Learn More"} />
        </div>
      </div>
    </>
  );
};

export default Heading;
