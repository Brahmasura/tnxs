import React from "react";
import faq from './faq.module.scss';
import faqOne from "../../../Assets/Faq/faq.jpeg";
import faqTwo from "../../../Assets/Faq/engineering.jpg";
import faqThree from "../../../Assets/Faq/business.jpg";
import faqFour from "../../../Assets/Faq/MBBS.jpeg";

const eduList = [
  { image: faqOne, text: "Frequently asked questions" },
  { image: faqTwo, text: "Study Engineering in ITALY" },
  { image: faqThree, text: "Study Business in Italy" },
  { image: faqFour, text: "Study MBBS in Abroad" },
];



const Faq = () => {
  return (
    <div className={faq.faqContainer}>
      <h1 className={faq.faqTitle}>Useful Information</h1>
      <div className={`container-fluid ${faq.colsContainer}`}>
        <div className={`row ${faq.rowOptions}`}>
          {eduList.map((option) => (
            <div className={`col-md-3 col-lg-3 ${faq.optionContainer}`}>
              <div className="row">
                <div
                  className={`col-md-12 col-lg-12 ${faq.optionUpper}`}
                  style={{
                    backgroundImage: `url(${option.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className={`col-md-12 col-lg-12 ${faq.optionLower}`}>
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

export default Faq;