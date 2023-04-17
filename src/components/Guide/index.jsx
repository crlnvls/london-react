import React from "react";

import "./Guide.css";
import Button from "../Button";

const Guide = () => {
  return (
    <>
      <div className="guide-div" id="guide">
        <div className="guide-flex">
          <img className="guide-img" src="/guide.png" alt="Tour Guide" />
          <div className="guide-heading">
            <h3 className="guide-h">
              Choose a <span className="cursive">knowledgeable</span> and{" "}
              <span className="cursive">experienced </span>guide
            </h3>
            <p className="guide-p">
              A reliable guide can enhance your London tourism experience by
              providing insightful information and personalized recommendations.
            </p>
            <Button text={"Book a guide"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
