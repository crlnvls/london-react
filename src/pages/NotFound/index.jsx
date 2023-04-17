import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="not-found-div">
        <div className="center-div">
          <h3 className="not-found-h">Page Not Found</h3>
          <div className="animation-link">
            <Link className="link-return" to={"/"}>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
