import React from "react";
import home from "./home.module.scss";
import Education from "./Education/Education";
import Students from "./Students/Students";
import Steps from "./Steps/Steps";
import Information from "./Information/Information";
import Destinations from "./Destinations/Destinations";
import UsefulInfo from "./UsefulInfo/UsefulInfo";
import DiscoverRussia from "./Discover-Russia/DiscoverRussia";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Students />
      <Education />
      <Steps />
      <Information />
      <DiscoverRussia />
      <UsefulInfo />
      {/* <Destinations /> */}
      <Testimonial />
    </>
  );
};

export default Home;
