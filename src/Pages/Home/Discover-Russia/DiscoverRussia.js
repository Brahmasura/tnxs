import React from "react";
import discover from "./discover.module.scss";
import destiOne from "../../../Assets/Destination/russia.jpeg";
import destiTwo from "../../../Assets/Destination/kazakhstan.jpg";
import destiThree from "../../../Assets/Destination/uzbekistan.webp";
import destiFour from "../../../Assets/Destination/italy.webp";
import { NavLink } from "react-router-dom";

const eduList = [
  {
    image: destiOne,
    text: "RUSSIA",
    link: "/mbbsRuss",
    textOne: "universities",
    uValue: "12",
    textTwo: "population",
    pValue: "144.5 million",
    textThree: "Capital",
    cValue: "MOSCOW",
  },
  {
    image: destiTwo,
    text: "KAZAKHSTAN",
    link: "/mbbsKazak",
    textOne: "universities",
    uValue: "4",
    textTwo: "population",
    pValue: "18.3 million",
    textThree: "Capital",
    cValue: "ALMATY",
  },
  {
    image: destiThree,
    text: "UZBEKISTAN",
    link: "/mbbsUzbek",
    textOne: "universities",
    uValue: "2",
    textTwo: "population",
    pValue: "33 million",
    textThree: "Capital",
    cValue: "TASHKENT",
  },
  {
    image: destiFour,
    text: "ITALY",
    link:"/mbbsRuss",
    textOne: "universities",
    uValue: "28",
    textTwo: "population",
    pValue: "60.4 million",
    textThree: "Capital",
    cValue: "ROME",
  },
];

const DiscoverRussia = () => {
  return (
    <div className={discover.discoverContainer}>
      <h1 className={discover.discoverTitle}>Destinations to Study Abroad</h1>
      <div className={`container-fluid ${discover.colsContainer}`}>
        <div className={`row ${discover.rowOptions}`}>
          {eduList.map((option) => (
            <div className={`col-md-3 col-lg-3 ${discover.optionContainer}`}>
              <div className="row">
                <NavLink to={option.link} onClick={() => window.scrollTo(0, 0)}>
                  <div
                    className={`col-md-12 col-lg-12 ${discover.optionUpper}`}
                    style={{
                      backgroundImage: `url(${option.image})`,
                      backgroundSize: "100% 93%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {" "}
                    <p>{option.text}</p>
                  </div>
                  <div
                    className={`col-md-12 col-lg-12 container-fluid ${discover.optionLower}`}
                  >
                    <div className="row">
                      <div className={`col-12 ${discover.lowerText}`}>
                        <div className="row">
                          <div className={`col-6 ${discover.lowerTextLeft}`}>
                            <p>{option.textOne}</p>
                          </div>
                          <div className={`col-6 ${discover.lowerTextRight}`}>
                            <p>{option.uValue}</p>
                          </div>
                        </div>
                      </div>

                      <div className={discover.hrDiv}>
                        <hr className={discover.discoverHr} />
                      </div>

                      <div className={`col-12 ${discover.lowerText}`}>
                        <div className="row">
                          <div className={`col-6 ${discover.lowerTextLeft}`}>
                            <p>{option.textTwo}</p>
                          </div>
                          <div className={`col-6 ${discover.lowerTextRight}`}>
                            <p>{option.pValue}</p>
                          </div>
                        </div>
                      </div>

                      <div className={discover.hrDiv}>
                        <hr className={discover.discoverHr} />
                      </div>

                      <div className={`col-12 ${discover.lowerText}`}>
                        <div className="row">
                          <div className={`col-6 ${discover.lowerTextLeft}`}>
                            <p>{option.textThree}</p>
                          </div>
                          <div className={`col-6 ${discover.lowerTextRight}`}>
                            <p>{option.cValue}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverRussia;
