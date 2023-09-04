import React from "react";
import education from "./education.module.scss";
import imgFive from "../../../Assets/Education/imgFive.jpg";
import imgSix from "../../../Assets/Education/imgSix.jpg";
import imgSeven from "../../../Assets/Education/imgSeven.jpg";
import imgEight from "../../../Assets/Education/imgEight.webp";

const eduList = [
  { image: imgFive, text: "TOP RUSSIAN UNIVERSITIES" },
  { image: imgSix, text: "FREQUENTLY ASKED QUESTIONS" },
  { image: imgEight, text: "MBBS IN ITALY" },
  { image: imgSeven, text: "SCHOLARSHIPS" },
];

const Education = () => {
  return (
    <div className={education.eduContainer}>
      <h1 className={education.eduTitle}>Education For Indians In Abroad</h1>
      <div className={`container-fluid ${education.colsContainer}`}>
        <div className={`row ${education.rowOptions}`}>
          {eduList.map((option) => (
            <div className={`col-md-3 col-lg-3 ${education.optionContainer}`}>
              <div className="row">
                <div
                  className={`col-md-12 col-lg-12 ${education.optionUpper}`}
                  style={{
                    backgroundImage: `url(${option.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className={`col-md-12 col-lg-12 ${education.optionLower}`}>
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

export default Education;
