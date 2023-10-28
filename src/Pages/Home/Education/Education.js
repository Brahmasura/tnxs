import React, { useContext } from "react";
import education from "./education.module.scss";
import imgFive from "../../../Assets/Education/imgFive.webp";
import imgSeven from "../../../Assets/Education/imgSeven.webp";
import imgEight from "../../../Assets/Education/imgEight.webp";
import applyImg from "../../../Assets/Education/apply.webp";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../App";

const eduList = [
  {
    image: imgFive,
    link: "/universities",
    text: "TOP RUSSIAN UNIVERSITIES",
    para: "Learn about tuition fee, distance from MOSCOW, and necessary details ",
  },
  { image: applyImg },

  {
    image: imgEight,
    link: "/mbbsItaly",
    text: "MBBS IN ITALY",
    para: "Learn about iMAT, Fee structure and process to apply for education in ITALY",
  },
  {
    image: imgSeven,
    link: "/scholarship",
    text: "SCHOLARSHIPS",
    para: "Learn about tuition fee waivers, scholarship availabilty in Italian Universities",
  },
];

const Education = () => {
  const {handleModalClick} = useContext(LinkContext);

  return (
    <div className={education.eduContainer}>
      <h1 className={education.eduTitle}>Education For Indians In Abroad</h1>
      <div className={`container-fluid ${education.colsContainer}`}>
        <div className={`row ${education.rowOptions}`}>
          {eduList.map((option, index) => (
            <div
              className={`col-12 col-sm-12 col-md-3 col-lg-3 ${education.optionContainer}`}
              key={index}
            >
              {/* testing code begins  */}
              {index === 1 ? (
                <>
                  <div
                    className={education.applyDiv}
                    style={{
                      backgroundImage: `url(${option.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor:"pointer",
                    }} 
                    onClick={handleModalClick}
                  ></div>
                </>
              ) : (
                <div className={`container-fluid ${education.innerContainer}`}>
                  <div className="row">
                    <NavLink
                      to={option.link}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div
                        className={`col-md-12 col-lg-12 ${education.optionUpper}`}
                        style={{
                          backgroundImage: `url(${option.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div
                        className={`col-md-12 col-lg-12 ${education.optionLower}`}
                      >
                        <p>{option.text}</p>
                        <p className={education.subText}>{option.para}</p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              )}

              {/* testing code ends */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
