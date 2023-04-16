import React from "react";

import "./Home.css";
import Header from "../../components/Header";
import Explore from "../../components/Explore";
import Guide from "../../components/Guide";

const Home = () => {
  return (
    <>
      <Header />
      <Explore />
      <Guide />
    </>
  );
};

export default Home;
