import React from "react";

import "./Explore.css";
import ExploreImg from "../ExploreImg";

const Explore = () => {
  return (
    <>
      <div className="explore" id="explore">
        <div className="explore-heading">
          <p className="explore-item">Explore</p>
          <p className="culture-item">Culture & Royalty</p>
          <p className="text-item">
            We offer a variety of tours, ranging from guided walking tours of
            historic neighborhoods to comprehensive sightseeing tours of the
            city's most iconic landmarks.
          </p>
        </div>
        <div className="img-flex">
          <ExploreImg
            src={"/booth.jpg"}
            alt={"Big Ben"}
            text={"Historical London Walk"}
          />
          <ExploreImg
            src={"/harrods.jpg"}
            alt={"Harrods"}
            text={"Fashion Capital Tour:"}
          />
          <ExploreImg
            src={"/fishchips.jpg"}
            alt={"Telephone box "}
            text={"A Taste of London"}
          />
        </div>
      </div>
    </>
  );
};

export default Explore;
