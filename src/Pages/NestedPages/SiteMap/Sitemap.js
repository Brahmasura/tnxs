import React, { useContext } from "react";
import style from "./siteMap.module.scss";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";

const Sitemap = () => {
  const { handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={style.divContainer}>
      <div className={style.mapContainer}>
        <div className={style.linkDiv}>
          <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
            Home
          </NavLink>
        </div>

        <ul>
          <li>
          <NavLink to={"/whyRussia"} onClick={() => window.scrollTo(0,0)}>
            Why Russia
            </NavLink>
            <ul>
              <li><NavLink to={"/advantages"} onClick={() => window.scrollTo(0,0)}>Advantages </NavLink></li>
              <li><NavLink to={"/advantages"} onClick={() => window.scrollTo(0,0)}>Work Opportunities </NavLink></li>
              <li><NavLink to={"/advantages"} onClick={() => window.scrollTo(0,0)}>Testimonial </NavLink></li>
              <li><NavLink to={"/ranking"} onClick={() => window.scrollTo(0,0)}>World Ranking </NavLink></li>
            </ul>
          </li>

          <li>
          <NavLink to={"/studyInRussia"} onClick={() => window.scrollTo(0,0)}>Study In Russia </NavLink> 
            <ul>
              <li><NavLink to={"/mbbsInRussia" } onClick={() => window.scrollTo(0,0)}>MBBS In Russia </NavLink></li>
              <li><NavLink to={"/studyInEng"} onClick={() => window.scrollTo(0,0)}>Study In English </NavLink></li>
              <li><NavLink to={"/preparatory"} onClick={() => window.scrollTo(0,0)}>Preparatory Department </NavLink></li>
              <li><NavLink to={"/universities"} onClick={() => window.scrollTo(0,0)}>Top Univesities </NavLink></li>
              <li><NavLink to={"/degreeValidation"} onClick={() => window.scrollTo(0,0)}>Validation of Degree </NavLink></li>
              <li><NavLink to={"/tuitionFee"} onClick={() => window.scrollTo(0,0)}>Tuition Fee </NavLink></li>
            </ul>
          </li>

          <li>
          <NavLink to={"/lifeInRussia"} onClick={() => window.scrollTo(0,0)}>Life In Russia</NavLink>
            <ul>
              <li><NavLink to={"/prices"} onClick={() => window.scrollTo(0,0)}>Prices </NavLink></li>
              <li><NavLink to={"/accomodation"} onClick={() => window.scrollTo(0,0)}>Accomodation </NavLink></li>
              <li><NavLink to={"/climate"} onClick={() => window.scrollTo(0,0)}>Climate </NavLink></li>
              <li><NavLink to={"/transport"} onClick={() => window.scrollTo(0,0)}>Transport </NavLink> </li>
              <li><NavLink to={"/safety"} onClick={() => window.scrollTo(0,0)}>Safety </NavLink></li> 
              <li><NavLink to={"/healthcare"} onClick={() => window.scrollTo(0,0)}>Healthcare </NavLink></li>
            </ul>
          </li>

            <li><NavLink to={"/mbbsRuss"} onClick={() => window.scrollTo(0,0)}>MBBS Abroad </NavLink>
            <ul>
            <li><NavLink to={"/mbbsRuss"} onClick={() => window.scrollTo(0,0)}>MBBS In Russia</NavLink></li>
            <li><NavLink to={"/mbbsKazak"} onClick={() => window.scrollTo(0,0)}>MBBS In Kazakhstan</NavLink></li>
            <li><NavLink to={"/mbbsUzbek"} onClick={() => window.scrollTo(0,0)}>MBBS In Uzbekistan</NavLink></li>
            <li><NavLink to={"/mbbsItaly"} onClick={() => window.scrollTo(0,0)}>MBBS In Italy</NavLink></li>
            </ul>
            </li>
         
        </ul>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
