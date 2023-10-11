import React, { useContext, useState } from "react";
import style from "./whyRussTesti.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import Testimonial from "../../../Home/Testimonial/Testimonial";
import Steps from "../../../Home/Steps/Steps";

const WhyRussTesti = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.advContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={style.slash}> / </p>
            <NavLink to={"/whyRussia"} onClick={() => handleLinkClick(1)}>
              Why Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/advantages"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Advantages
              </button>
            </NavLink>

            <NavLink to={"/advantages"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Opportunity
              </button>
            </NavLink>

            <NavLink to={"/whyRussTesti"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Testimonials
              </button>
            </NavLink>

            <NavLink to={"/ranking"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Ranking
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}
        </div>
      </div>
      <Testimonial />
      <Steps/>
    </>
  );
};

export default WhyRussTesti;
