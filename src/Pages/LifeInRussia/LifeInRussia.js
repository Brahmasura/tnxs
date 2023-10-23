import React, { useContext, useEffect } from "react";
import LifeInRussIntro from "./Components/LifeInRussiaIntro/LifeInRussIntro";
import Steps from "../Home/Steps/Steps";
import LifeInRussInfo from "./Components/LifeInRussiaInfo/LifeInRussInfo";
import { LinkContext } from "../../App";

const LifeInRussia = () => {
  const { handleLinkClick } = useContext(LinkContext);

  useEffect(() => {
    handleLinkClick(3);
  }, [handleLinkClick]);

  return (
    <>
      {/* <div onLoad={handleLinkClick(3)}> */}
      <div>
        <LifeInRussIntro />
        <LifeInRussInfo />
        <Steps />
      </div>
    </>
  );
};

export default LifeInRussia;
