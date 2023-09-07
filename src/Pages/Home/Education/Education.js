import React from "react";
import education from "./education.module.scss";
import imgFive from "../../../Assets/Education/imgFive.jpg";
import imgSix from "../../../Assets/Education/imgSix.jpg";
import imgSeven from "../../../Assets/Education/imgSeven.jpg";
import imgEight from "../../../Assets/Education/imgEight.webp";
import { NavLink } from "react-router-dom";

const eduList = [
  { image: imgFive, link:"/universities", text: "TOP RUSSIAN UNIVERSITIES", para: "Learn about tuition fee, distance from MOSCOW, and necessary details " },
  { image: imgSix, link:"/faqInfo", text: "FREQUENTLY ASKED QUESTIONS", para: "Diagnose your basic doubts about studying abroad" },
  { image: imgEight, link:"/mbbsItaly", text: "MBBS IN ITALY", para: "Learn about iMAT, Fee structure and process to apply for education in ITALY" },
  { image: imgSeven, link:"/faqInfo", text: "SCHOLARSHIPS", para: "Learn about tuition fee waivers, scholarship availabilty in Italian Universities" },
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
              <NavLink to={option.link} onClick={() => window.scrollTo(0,0)}>
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
                  <p className={education.subText}>{option.para}</p>
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

export default Education;
