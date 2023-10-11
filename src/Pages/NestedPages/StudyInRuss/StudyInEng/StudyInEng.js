import React, { useContext, useState } from "react";
import style from "./studyInEng.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import studyInEng from "../../../../Assets/StudyInRussia/studyInEngNew.webp";
import Steps from "../../../Home/Steps/Steps";

const StudyInEng = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={style.divContainer}>
        <div className={style.studyInEngContainer}>
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

          <h1>Study In English</h1>
          <img src={studyInEng} alt="the advantages" />

          <p>
            New academic courses taught in English are being made available at
            Russian institutions on an annual basis. The number of innovative
            programs is increasing. It is possible to graduate from a prominent
            Russian university with a diploma even if one does not have a strong
            command of the Russian language if the institution offers an
            English-language program. Russian is an easy language. That's why
            the admission process for international students becomes difficult.
            In such a case, several top universities have also started offering
            English courses. The courses are taught not only by native Russian
            speakers but also by native speakers from other countries. As a
            result, many universities in the country are recognized
            internationally. This provides you with worldwide exposure and vast
            scope of career development.{" "}
          </p>
          <br />
          <p>
            However, the selection rate of students is moderate as there is
            fierce competition between students worldwide. Nevertheless, the
            vast majority of former students had nothing but appreciation for
            the warm and friendly atmosphere, the professors' accessibility, and
            the willingness to assist students. The selection process is quite
            cutthroat, and the setting and the atmosphere are dynamic and
            multicultural. You can get complete industry exposure in the top
            universities of Russia. Their developed infrastructure also helps
            you get the best quality education and practice of practically
            implementing your education.
          </p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default StudyInEng;
