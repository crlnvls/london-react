import React from "react";

import "./ExploreImg.css";

const ExploreImg = ({ text, src, alt }) => {
  return (
    <>
      <div className="img-container ">
        <img className="explore-img" src={src} alt={alt} />
        <div className="text-overlay">{text}</div>
      </div>
    </>
  );
};

export default ExploreImg;
