import React, { useContext, useState } from "react";
import style from "./studyUni.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import UniList from "../../../Universities/Components/UniList/UniList";
import Steps from "../../../Home/Steps/Steps";

const StudyUni = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(4);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={style.divContainer}>
        <div className={style.studyUniContainer}>
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

          <h1>Top Universities</h1>
          {/* <img src={medical} alt="the advantages" /> */}
         
        </div>
      </div>
      <UniList />
      <Steps />
    </>
  );
};

export default StudyUni;
