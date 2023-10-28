import React, { useContext, useState } from "react";
import style from "./preparatory.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import prepPic from "../../../../Assets/StudyInRussia/innerPrepTwo.webp";
import Steps from "../../../Home/Steps/Steps";

const Preparatory = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.prepContainer}>
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

          <h1>Preparatory Department</h1>
          <img src={prepPic} alt="the advantages" loading="lazy" />

          <p>
            The preparatory departments of universities provide specialized
            pre-university courses for international students who either do not
            speak Russian or whose language knowledge is not up to the
            standards. These courses are designed to prepare students for
            continuing their studies at a Russian university. Pick an intense
            program with courses lasting between four and six hours daily. You
            will be able to acquire the fundamentals of Russian in a relatively
            short amount of time. Because of your proficiency in Russian, you
            will be eligible to apply to the language for bachelor's and
            master's degree programs.{" "}
          </p>
          <br />
          <p>
            Their prices are far lower than the English-taught ones, and they
            cover a significantly wider variety of topics. In addition to
            teaching the Russian language, preparatory departments are
            responsible for instructing students in a variety of specialist
            areas such as history, mathematics, biology, and other topics
            required for admission examinations. The particulars of the programs
            could be different; also, several programs might assist students in
            becoming ready for either a bachelor's or master's degree. All
            students in the preparatory program have access to the school's
            library, digital resources, computer and language labs, and free
            Wi-Fi throughout campus. The class culminates with the students
            taking final examinations and awarding them completion certificates.
          </p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default Preparatory;
