import React from "react";

import "./Guide.css";

const Guide = () => {
  return (
    <>
      <div className="guide">
        <div className="guide-flex">
          <h3 className="guide-heading">
            Choose a knowledgeable and experienced local guide
          </h3>
          <img className="guide-img" src="/guide.png" alt="Tour Guide" />
        </div>
      </div>
    </>
  );
};

export default Guide;
