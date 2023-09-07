import React, { useContext, useState } from "react";
import style from "./validation.module.scss";
import { NavLink } from "react-router-dom";
import Steps from "../../../Home/Steps/Steps";
import { LinkContext } from "../../../../App";
import validationPic from "../../../../Assets/Nested/validation.jpg";

const Validation = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(5);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.validationContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={style.slash}> / </p>
            <NavLink to={"/studyInRussia"} onClick={() => handleLinkClick(2)}>
              Study in Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/mbbsInRussia"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Mbbs In Russia
              </button>
            </NavLink>
            <NavLink to={"/studyInEng"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Study In English
              </button>
            </NavLink>
            <NavLink to={"/preparatory"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Preparatory Department
              </button>
            </NavLink>
            <NavLink to={"/studyUni"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Top Universities
              </button>
            </NavLink>
            <NavLink to={"/degreeValidation"}>
              <button
                className={activeTab === 5 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(5)}
              >
                Validation of Degree
              </button>
            </NavLink>
            <NavLink to={"/tuitionFee"}>
              <button
                className={activeTab === 6 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(6)}
              >
                Tuition Fee
              </button>
            </NavLink>
          </div>

          {/* the tab div ends  */}

          <h1>Validation Of Degree</h1>
          <img src={validationPic} alt="the advantages" />

          <p>
            Validating an MBBS degree from Russia is a crucial step for Indian
            medical aspirants who wish to practice medicine in India. The
            process ensures that your foreign medical qualification is
            recognized and accepted by the Medical Council of India (MCI), now
            known as the National Medical Commission (NMC). Here's a brief
            overview of the validation process:
          </p>

          <p>
            <strong>Complete your MBBS Degree: </strong> First and foremost, you
            need to successfully complete your MBBS degree program from a
            recognized medical university in Russia. Ensure that you maintain
            all necessary documentation, including your degree certificate and
            academic transcripts.
          </p>

          <p>
            <strong>
              Clear the Foreign Medical Graduate Examination (FMGE):
            </strong>
            To practice medicine in India, Indian citizens who hold foreign
            medical qualifications must pass the FMGE, a screening test
            conducted by the NMC. This exam assesses your knowledge of medical
            concepts and clinical skills.
          </p>

          <p>
            <strong>Apply for Registration:</strong> After passing the FMGE, you
            can apply for provisional registration with the NMC. This
            registration is a prerequisite for undergoing a compulsory one-year
            internship in India
          </p>

          <p>
            <strong>Internship in India:</strong>Complete a one-year internship
            at a recognized medical institution in India. This is a mandatory
            step for foreign medical graduates.
          </p>

          <p>
            <strong>Permanent Registration: </strong>Upon successful completion
            of your internship, you can apply for permanent registration with
            the NMC, which allows you to practice medicine in India without
            restrictions.
          </p>

          <p>
            It's essential to keep abreast of any updates or changes in the
            validation process, as regulations may evolve over time. Ensure that
            you fulfill all the requirements and prepare thoroughly for the FMGE
            to validate your MBBS degree from Russia and embark on a rewarding
            medical career in India.
          </p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default Validation;
