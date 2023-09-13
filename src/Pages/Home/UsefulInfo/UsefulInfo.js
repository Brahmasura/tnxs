import React from "react";
import style from "./usefulInfo.module.scss";
import faqOne from "../../../Assets/UsefulInfo/faq.jpeg";
import faqTwo from "../../../Assets/UsefulInfo/engineering.jpg";
import faqThree from "../../../Assets/UsefulInfo/business.jpg";
import faqFour from "../../../Assets/UsefulInfo/MBBS.jpeg";
import applyImg from "../../../Assets/UsefulInfo/apply.png";
import imgSix from '../../../Assets/Education/imgSix.jpg';
import { NavLink } from "react-router-dom";

const eduList = [
  { image: faqOne, text: "Frequently asked questions" },
  {
    image: faqTwo,
    link: "/guidelines",
    text: "Guidelines for applying to an Italian university",
  },
  { image: faqThree, text: "Student Visa requirements" },
  // { image: applyImg, text: "Study MBBS in Abroad" },
  {image: imgSix, link: "/faqInfo", text: "Frequently Asked Questions" }
];

const Faq = () => {
  return (
    <div className={style.faqContainer}>
      <h1 className={style.faqTitle}>Useful Information</h1>
      <div className={`container-fluid ${style.colsContainer}`}>
        <div className={`row ${style.rowOptions}`}>
          {eduList.map((option, index) => (
            <div
              className={`col-md-3 col-lg-3 ${style.optionContainer}`}
              key={index}
            >
              {index === 0 ? (
                <>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGraduationAbroad&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                    title="facebook plugin"
                    width="100%"
                    height="100%"
                  />
                </>
              ) : (
                <div className="row">
                  <NavLink
                    to={option.link}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div
                      className={`col-md-12 col-lg-12 ${style.optionUpper}`}
                      style={{
                        backgroundImage: `url(${option.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className={`col-md-12 col-lg-12 ${style.optionLower}`}>
                      <p>{option.text}</p>
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
