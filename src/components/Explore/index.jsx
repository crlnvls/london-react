import React from "react";

import "./Explore.css";
import ExploreImg from "../ExploreImg";

const Explore = () => {
  return (
    <>
      <div className="explore">
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
            src={"/stpauls.jpg"}
            alt={"St. Pauls Cathedral"}
            text={"Text"}
          />
          <ExploreImg
            src={"/fishchips.jpg"}
            alt={"Telephone box "}
            text={"Text"}
          />
          <ExploreImg src={"/harrods.jpg"} alt={"Harrods"} text={"Text"} />
        </div>
      </div>
    </>
  );
};

export default Explore;
