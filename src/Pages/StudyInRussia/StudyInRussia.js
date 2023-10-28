import React, { useContext, useEffect } from "react";
import StudyInRussIntro from "./Components/StudyInRussIntro/StudyInRussIntro";
import StudyInRussInfo from "./Components/StudyInRussInfo/StudyInRussInfo";
import Steps from "../Home/Steps/Steps";
import { LinkContext } from "../../App";

const StudyInRussia = () => {
  const { handleLinkClick } = useContext(LinkContext);

  useEffect(() => {
    handleLinkClick(2);
  }, [handleLinkClick]);
  
  return (
    <>
     
      <div>
        <StudyInRussIntro />
        <StudyInRussInfo />
        <Steps />
      </div>
    </>
  );
};

export default StudyInRussia;
