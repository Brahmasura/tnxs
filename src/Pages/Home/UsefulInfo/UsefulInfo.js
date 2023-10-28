import React from "react";
import style from "./usefulInfo.module.scss";
import faqOne from "../../../Assets/UsefulInfo/faq.jpeg";
import courseOffered from "../../../Assets/UsefulInfo/courseOffered.webp";
import italy from "../../../Assets/UsefulInfo/italyUsefulInfo.webp";
import imgSix from "../../../Assets/Education/imgSix.jpg";
import { NavLink } from "react-router-dom";

const eduList = [
  { image: faqOne, text: "Frequently asked questions" },
  {
    image: italy,
    link: "/guidelines",
    text: "GUIDELINES FOR ADMISSION IN ITALY",
    para: "Learn documentation, services offered and expenses",
  },
  {
    image: courseOffered,
    link: "/italyUni",
    text: "COURSES IN ITALIAN UNIVERSITIES",
    para: "Learn about courses, eligibility, intake, and deadlines",
  },
 
  {
    image: imgSix,
    link: "/faqInfo",
    text: "FREQUENTLY ASKED QUESTIONS",
    para: "Diagnose your basic doubts regarding education and life abroad",
  },
];

const Faq = () => {
  return (
    <div className={style.faqContainer}>
      <h1 className={style.faqTitle}>Useful Information</h1>
      <div className={`container-fluid ${style.colsContainer}`}>
        <div className={`row ${style.rowOptions}`}>
          {eduList.map((option, index) => (
            <div
              className={`col-12 col-sm-12 col-md-3 col-lg-3 ${style.optionContainer}`}
              key={index}
            >
              {index === 0 ? (
                <>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGraduationAbroad&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                    title="facebook plugin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                  />
                </>
              ) : (
                <div className="row">
                  <NavLink
                    to={option.link}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div
                      className={`col-12 col-sm-12 col-md-12 col-lg-12 ${style.optionUpper}`}
                      style={{
                        backgroundImage: `url(${option.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      className={`col-12 col-sm-12 col-md-12 col-lg-12 ${style.optionLower}`}
                    >
                      <p>{option.text}</p>
                      <p className={style.subText}>{option.para}</p>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
