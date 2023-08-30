import React from "react";
import info from "./information.module.scss";
import { NavLink } from "react-router-dom";
// import infoOne from '../../../Assets/Information/infoOne.jpg';
// import infoTwo from '../../../Assets/Information/infoTwo.jpg';
// import infoThree from '../../../Assets/Information/infoThree.jpg';
// import infoFour from '../../../Assets/Information/infoFour.jpg';

const Information = () => {
  return (
    <>
      <div className={`container-fluid ${info.infoContainer}`}>
        <div className="row">
          <div className={`col-md-6 col-lg-6 ${info.leftCol}`}>
            <h1 className={info.upperText}>LIFE IN RUSSIA</h1>
            <hr className={info.hrStyle} />
            <NavLink
              to={"/accomodation"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <h1>Accommodation for students</h1>
            </NavLink>
          </div>
          <div className={`col-md-6 col-lg-6 ${info.rightCol}`}>
            <div className="row">
              <div className={`col-md-12 col-lg-12 ${info.rightTopCol}`}>
                <h1 className={info.upperText}>WHY RUSSIA</h1>
                <hr className={info.hrStyle} />
                <NavLink
                  to={"/advantages"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <h1>Advantages of education in Russia </h1>
                </NavLink>
              </div>
              <div className={`col-md-12 col-lg-12 ${info.rightBottomCol}`}>
                <div className="row">
                  <div className={`col-md-6 col-lg-6 ${info.rightBotLeft}`}>
                    <h1 className={info.upperText}>LIFE IN RUSSIA</h1>
                    <hr className={info.hrStyle} />
                    <NavLink
                      to={"/prices"}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <h1>Prices in Russia</h1>
                    </NavLink>
                  </div>
                  <div className={`col-md-6 col-lg-6 ${info.rightBotRight}`}>
                    <h1 className={info.upperText}>WHY RUSSIA</h1>
                    <hr className={info.hrStyle} />
                    <NavLink
                      to={"/ranking"}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <h1>Russian Universities in World Ranking</h1>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
