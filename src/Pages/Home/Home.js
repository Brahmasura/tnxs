import React from "react";
import home from "./home.module.scss";
import Education from "./Education/Education";
import Students from "./Students/Students";
import Steps from "./Steps/Steps";
import Information from "./Information/Information";
import Destinations from "./Destinations/Destinations";
import Faq from "./Faq/Faq";
import DiscoverRussia from "./Discover-Russia/DiscoverRussia";

const Home = () => {
  return (
    <>
      <Students />
      <Education />
      <Steps />
      <Information />
      <DiscoverRussia/>
      <Faq />
      <Destinations />
    </>
  );
};

export default Home;
