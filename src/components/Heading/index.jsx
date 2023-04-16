import React from "react";

import "./Heading.css";

const Heading = () => {
  return (
    <>
      <div className="heading">
        <p className="visit-item">Tour</p>
        <p className="london-item">London</p>
      </div>
      <div className="buttons">
        <button className="heading-btn">Book a guide</button>
        <button className="heading-btn">Learn More</button>
      </div>
    </>
  );
};

export default Heading;
