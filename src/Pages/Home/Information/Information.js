import React from "react";
import info from "./information.module.scss";
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
            <h1>Accommodation for students</h1>
          </div>
          <div className={`col-md-6 col-lg-6 ${info.rightCol}`}>
            <div className="row">
              <div className={`col-md-12 col-lg-12 ${info.rightTopCol}`}>
                <h1 className={info.upperText}>WHY RUSSIA</h1>
                <hr className={info.hrStyle} />
                <h1>Advantages of education in Russia </h1>
              </div>
              <div className={`col-md-12 col-lg-12 ${info.rightBottomCol}`}>
                <div className="row">
                  <div className={`col-md-6 col-lg-6 ${info.rightBotLeft}`}>
                    <h1 className={info.upperText}>LIFE IN RUSSIA</h1>
                    <hr className={info.hrStyle} />
                    <h1>Prices in Russia</h1>
                  </div>
                  <div className={`col-md-6 col-lg-6 ${info.rightBotRight}`}>
                    <h1 className={info.upperText}>WHY RUSSIA</h1>
                    <hr className={info.hrStyle} />
                    <h1>Russian Universities in World Ranking</h1>
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
