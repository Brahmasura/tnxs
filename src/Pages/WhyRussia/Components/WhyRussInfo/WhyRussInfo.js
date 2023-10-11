import React, { useContext } from "react";
import whyRussInfo from "./whyRussInfo.module.scss";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../../App";

const WhyRussInfo = () => {
  const { activeLink, handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={whyRussInfo.RussInfoContainer}>
        <div className={`row ${whyRussInfo.infoRow}`}>
          <div className={`col-12 col-lg-6 ${whyRussInfo.colOneContainer}`}>
            <NavLink to={"/advantages"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={whyRussInfo.upperText}>ADVANTAGES</h1>
            </NavLink>
            <hr className={whyRussInfo.hrStyle} />
            <h1>Reasons to study in Russia</h1>
          </div>

          <div className={`col-12 col-lg-6 ${whyRussInfo.colTwoContainer}`}>
            <h1 className={whyRussInfo.upperText}>
              WORK OPPORTUNITIES FOR INTERNATIONAL STUDENTS
            </h1>
            <hr className={whyRussInfo.hrStyle} />
            <h1>Work permit, Part time jobs</h1>
          </div>

          <div className={`col-12 col-lg-6 ${whyRussInfo.colThreeContainer}`}>
          <NavLink to={"/whyRussTesti"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={whyRussInfo.upperText}>TESTIMONIALS</h1>
            </NavLink>
            <hr className={whyRussInfo.hrStyle} />
            <h1>Know what it's like to study in Russia</h1>
          </div>

          <div className={`col-12 col-lg-6 ${whyRussInfo.colFourContainer}`}>
           <NavLink to={"/ranking"} onClick={() => window.scrollTo(0, 0)}>
           <h1 className={whyRussInfo.upperText}>
              RUSSIAN UNIVERSITIES IN WORLD RANKING
            </h1>
           </NavLink> 
            <hr className={whyRussInfo.hrStyle} />
            <h1>Russian Universities in World Universities Ranking</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyRussInfo;
