import React from "react";
import education from "./education.module.scss";
import imgOne from "../../../Assets/Education/imgOne.jpeg";
import imgTwo from "../../../Assets/Education/imgTwo.webp";
import imgThree from "../../../Assets/Education/imgThree.jpg";
import imgFour from "../../../Assets/Education/imgFour.webp";

const eduList = [
  { image: imgOne, text: "Top Russian Universities" },
  { image: imgTwo, text: "Tuition fees in Russia" },
  { image: imgThree, text: "Send your application to us" },
  { image: imgFour, text: "MBBS in ITALY" },
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
