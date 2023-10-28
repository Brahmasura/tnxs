import React, { useContext, useEffect, useState } from "react";
import style from "./italianUni.module.scss";
import { NavLink } from "react-router-dom";
import italyUni from "../../../../Assets/UsefulInfo/italy Universities.xlsx";
import { LinkContext } from "../../../../App";

const ItalianUni = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(1);


  const handleTabClick = (value) => {
    setActiveTab(value);
  };



  return (
    <>
      <div className={style.divContainer}>
        <div className={style.italyUniContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/italyUni"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Italian Universities
              </button>
            </NavLink>

            <NavLink to={"/italyMan"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Management Coures
              </button>
            </NavLink>

            <NavLink to={"/italyEng"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Engineering Courses
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}
          <h1>Courses in Italian Universities</h1>
          {/* <img src={guidelinePic} alt="the guideline" /> */}
          {/* <iframe
            src={italyUni}
            title="Documents for Italian University"
            width="100%"
            height="800"
          /> */}
          <a className={style.docLink} href={italyUni} download="Italy_Universities.xlsx">
            Download Italy Universities File
          </a>
        
        </div>
      </div>
    </>
  );
};

export default ItalianUni;
