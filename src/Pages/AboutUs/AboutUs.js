import React, { useContext, useEffect } from "react";
import AboutIntro from "./AboutIntro/AboutIntro";
import OurServices from "./OurServices/OurServices";
import Steps from "../Home/Steps/Steps";
import { LinkContext } from "../../App";

const AboutUs = () => {
  const { handleLinkClick } = useContext(LinkContext);

  useEffect(() => {
    handleLinkClick(5);
  }, [handleLinkClick]);

  return (
    <>
      {/* <div onLoad={handleLinkClick(5)}> */}
      <div>
        <AboutIntro />
        <OurServices />
        <Steps />
      </div>
    </>
  );
};

export default AboutUs;
