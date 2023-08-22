import React from "react";
import studyInRussInfo from "./studyInRussInfo.module.scss";
import { NavLink } from "react-router-dom";

const StudyInRussInfo = () => {
  return (
    <div className={studyInRussInfo.studyInfoContainer}>
      <div className="row">
        <div className={`col-lg-6 ${studyInRussInfo.colOneContainer}`}>
          <NavLink to={"/mbbsInRussia"}>
            <h1 className={studyInRussInfo.upperText}>MBBS in Russia</h1>
          </NavLink>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>General Information</h1>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colTwoContainer}`}>
          <h1 className={studyInRussInfo.upperText}>Study in English</h1>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>Study in Russia without knowing Russian</h1>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colThreeContainer}`}>
          <h1 className={studyInRussInfo.upperText}>Preparatory Department</h1>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>Learn and Study in Russian</h1>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colFourContainer}`}>
          <h1 className={studyInRussInfo.upperText}>Top Universities</h1>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>Choose among top Russian Universities</h1>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colFiveContainer}`}>
          <h1 className={studyInRussInfo.upperText}>Validation Of Degree</h1>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>How To Get Your Degree Recognised</h1>
        </div>

        <div className={`col-lg-6 ${studyInRussInfo.colSixContainer}`}>
          <h1 className={studyInRussInfo.upperText}>Steps To Apply</h1>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>Step By Step Guidance</h1>
        </div>
      </div>
    </div>
  );
};

export default StudyInRussInfo;
