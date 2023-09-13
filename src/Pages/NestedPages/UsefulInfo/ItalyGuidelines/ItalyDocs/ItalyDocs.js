import React, { useContext, useState } from "react";
import style from "./italyDocs.module.scss";
import { LinkContext } from "../../../../../App";
import { NavLink } from "react-router-dom";
import docuSamplePdf from "../../../../../Assets/UsefulInfo/DocuSamplePdf.pdf";

const ItalyDocs = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.guideContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/guidelines"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Guidelines to Apply
              </button>
            </NavLink>

            <NavLink to={"/documents"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Documents required
              </button>
            </NavLink>

            <NavLink to={"/expenses"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Extra Expenses
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}
          <h1>List Of Documents for Bachelors</h1>
          {/* <img src={guidelinePic} alt="the guideline" /> */}
          <iframe
            src={docuSamplePdf}
            title="Documents for Italian University"
            width="100%"
            height="800"
          />
        </div>
      </div>
    </>
  );
};

export default ItalyDocs;
