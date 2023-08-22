import React from "react";
import destination from './destination.module.scss';
import destiOne from "../../../Assets/Destination/russia.jpeg";
import destiTwo from "../../../Assets/Destination/kazakhstan.jpg";
import destiThree from "../../../Assets/Destination/uzbekistan.webp";
import destiFour from "../../../Assets/Destination/italy.webp";

const eduList = [
  { image: destiOne, text: "RUSSIA" },
  { image: destiTwo, text: "KAZAKHSTAN" },
  { image: destiThree, text: "UZBEKISTAN" },
  { image: destiFour, text: "ITALY" },
];

const Destinations = () => {
  return (
    <div className={destination.destiContainer}>
      <h1 className={destination.destiTitle}>Destinations to Study Abroad</h1>
      <div className={`container-fluid ${destination.colsContainer}`}>
        <div className={`row ${destination.rowOptions}`}>
          {eduList.map((option) => (
            <div className={`col-md-3 col-lg-3 ${destination.optionContainer}`}>
              <div className="row">
                <div
                  className={`col-md-12 col-lg-12 ${destination.optionUpper}`}
                  style={{
                    backgroundImage: `url(${option.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className={`col-md-12 col-lg-12 ${destination.optionLower}`}>
                  <p>{option.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;