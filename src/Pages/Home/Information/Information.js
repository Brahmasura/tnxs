import React, { useContext } from "react";
import info from "./information.module.scss";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../App";
// import infoOne from '../../../Assets/Information/infoOne.jpg';
// import infoTwo from '../../../Assets/Information/infoTwo.jpg';
// import infoThree from '../../../Assets/Information/infoThree.jpg';
// import infoFour from '../../../Assets/Information/infoFour.jpg';

const Information = () => {
  const { handleLinkClick } = useContext(LinkContext);

  return (
    <>
      <div className={`container-fluid ${info.infoContainer}`}>
        <div className="row">
          <div className={`col-md-6 col-lg-6 ${info.leftCol}`}>
            <NavLink
              to={"/lifeInRussia"}
              onClick={() => {
                handleLinkClick(3);
                window.scrollTo(0, 0);
              }}
            >
              <h1 className={info.upperText}>LIFE IN RUSSIA</h1>
            </NavLink>
            <hr className={info.hrStyle} />
            <NavLink
              to={"/accomodation"}
              onClick={() => {
                handleLinkClick(3);
                window.scrollTo(0, 0);
              }}
            >
              <h1>Accommodation for students</h1>
            </NavLink>
          </div>
          <div className={`col-md-6 col-lg-6 ${info.rightCol}`}>
            <div className="row">
              <div className={`col-md-12 col-lg-12 ${info.rightTopCol}`}>
                <NavLink
                  to={"/whyRussia"}
                  onClick={() => {
                    handleLinkClick(1);
                    window.scrollTo(0, 0);
                  }}
                >
                  <h1 className={info.upperText}>WHY RUSSIA</h1>
                </NavLink>
                <hr className={info.hrStyle} />
                <NavLink
                  to={"/advantages"}
                  onClick={() => {handleLinkClick(1); window.scrollTo(0, 0)}}
                >
                  <h1>Advantages of education in Russia </h1>
                </NavLink>
              </div>
              <div className={`col-md-12 col-lg-12 ${info.rightBottomCol}`}>
                <div className="row">
                  <div className={`col-md-6 col-lg-6 ${info.rightBotLeft}`}>
                    <NavLink
                      to={"/lifeInRussia"}
                      onClick={() => {
                        handleLinkClick(3);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <h1 className={info.upperText}>LIFE IN RUSSIA</h1>
                    </NavLink>
                    <hr className={info.hrStyle} />
                    <NavLink
                      to={"/prices"}
                      onClick={() => {handleLinkClick(3); window.scrollTo(0, 0)}}
                    >
                      <h1>Prices in Russia</h1>
                    </NavLink>
                  </div>
                  <div className={`col-md-6 col-lg-6 ${info.rightBotRight}`}>
                    <NavLink
                      to={"/studyInRussia"}
                      onClick={() => {
                        handleLinkClick(2);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <h1 className={info.upperText}>STUDY IN RUSSIA</h1>
                    </NavLink>
                    <hr className={info.hrStyle} />
                    <NavLink
                      to={"/ranking"}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <h1>Tution fee in Russia</h1>
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
