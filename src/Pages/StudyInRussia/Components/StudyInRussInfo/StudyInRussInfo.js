import React from "react";
import studyInRussInfo from "./studyInRussInfo.module.scss";
import { NavLink } from "react-router-dom";

const StudyInRussInfo = () => {
  return (
    <div className={studyInRussInfo.studyInfoContainer}>
      <div className={`row ${studyInRussInfo.infoRow}`}>
        <div className={`col-lg-6 ${studyInRussInfo.colOneContainer}`}>
          <NavLink to={"/mbbsInRussia"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={studyInRussInfo.upperText}>MBBS in Russia</h1>

            <hr className={studyInRussInfo.hrStyle} />
            <h1>General Information</h1>
          </NavLink>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colTwoContainer}`}>
          <NavLink to={"/mbbsInRussia"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={studyInRussInfo.upperText}>Study in English</h1>
            <hr className={studyInRussInfo.hrStyle} />
            <h1>Study in Russia without knowing Russian</h1>
          </NavLink>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colThreeContainer}`}>
          <NavLink to={"/preparatory"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={studyInRussInfo.upperText}>
              Preparatory Department
            </h1>
            <hr className={studyInRussInfo.hrStyle} />
            <h1>Learn and Study in Russian</h1>
          </NavLink>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colFourContainer}`}>
          <NavLink to={"/studyUni"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={studyInRussInfo.upperText}>Top Universities</h1>
            <hr className={studyInRussInfo.hrStyle} />
            <h1>Choose among top Russian Universities</h1>
          </NavLink>
        </div>

        <div className={`col-lg-3 ${studyInRussInfo.colFiveContainer}`}>
          <NavLink
            to={"/degreeValidation"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <h1 className={studyInRussInfo.upperText}>Validation Of Degree</h1>
            <hr className={studyInRussInfo.hrStyle} />
            <h1>How To Get Your Degree Recognised</h1>
          </NavLink>
        </div>

        <div className={`col-lg-6 ${studyInRussInfo.colSixContainer}`}>
        <NavLink
            to={"/tuitionFee"}
            onClick={() => window.scrollTo(0, 0)}
          >
          <h1 className={studyInRussInfo.upperText}>Tuition Fee</h1>
          <hr className={studyInRussInfo.hrStyle} />
          <h1>Step By Step Guidance</h1></NavLink>
        </div>
      </div>
    </div>
  );
};

export default StudyInRussInfo;
