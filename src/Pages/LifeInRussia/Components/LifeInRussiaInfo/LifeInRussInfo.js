import React from "react";
import lifeInRussInfo from "./lifeInRussInfo.module.scss";

import { NavLink } from "react-router-dom";

const LifeInRussInfo = () => {
  return (
    <>
      <div className={lifeInRussInfo.lifeInfoContainer}>
        <div className={`row ${lifeInRussInfo.infoRow}`}>
          <div className={`col-lg-6 ${lifeInRussInfo.colOneContainer}`}>
            <NavLink to={"/accomodation"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>
                Accomodation For Students
              </h1>
              <hr className={lifeInRussInfo.hrStyle} />
              <h1>Availability of Hostels and Flats</h1>{" "}
            </NavLink>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colTwoContainer}`}>
            <NavLink to={"/prices"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>Prices in Russia</h1>
              <hr className={lifeInRussInfo.hrStyle} />
              <h1>Monthly Expenditure including travel and food etc.</h1>{" "}
            </NavLink>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colThreeContainer}`}>
            <NavLink to={"/transport"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>Transportation</h1>
              <hr className={lifeInRussInfo.hrStyle} />
              <h1>Touring around Cities and Countries</h1>{" "}
            </NavLink>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colFourContainer}`}>
          <NavLink to={"/safety"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={lifeInRussInfo.upperText}>Safety</h1>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Basic safety and emergency numbers</h1> </NavLink>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colFiveContainer}`}>
          <NavLink to={"/Healthcare"} onClick={() => window.scrollTo(0, 0)}>
            <h1 className={lifeInRussInfo.upperText}>Healthcare</h1>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Learn about basic healthcare and insurance</h1> </NavLink>
          </div>

          <div className={`col-lg-6 ${lifeInRussInfo.colSixContainer}`}>
            <NavLink to={"/climate"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>Climate</h1>
              <hr className={lifeInRussInfo.hrStyle} />
              <h1>Climatic variations across Russia</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeInRussInfo;
