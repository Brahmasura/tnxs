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
            </NavLink>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Availability 0f Hostels and Flats</h1>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colTwoContainer}`}>
            <NavLink to={"/prices"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>Prices in Russia</h1>
            </NavLink>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Monthly Expenditure including travel and food etc.</h1>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colThreeContainer}`}>
            <NavLink to={"/transport"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>Transportation</h1>
            </NavLink>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Touring around Cities and Countries</h1>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colFourContainer}`}>
            <h1 className={lifeInRussInfo.upperText}>Russian Lauguage</h1>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Strengthen your Communication Skills in Russian</h1>
          </div>

          <div className={`col-lg-3 ${lifeInRussInfo.colFiveContainer}`}>
            <h1 className={lifeInRussInfo.upperText}>About Russia</h1>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Geography,People and a lot more</h1>
          </div>

          <div className={`col-lg-6 ${lifeInRussInfo.colSixContainer}`}>
            <NavLink to={"/climate"} onClick={() => window.scrollTo(0, 0)}>
              <h1 className={lifeInRussInfo.upperText}>Climate</h1>
            </NavLink>
            <hr className={lifeInRussInfo.hrStyle} />
            <h1>Climatic variations across Russia</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeInRussInfo;
