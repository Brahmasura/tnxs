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
          <NavLink to={"/whyRussia"} onClick={() => {handleLinkClick(1); window.scrollTo(0,0);}}>
            Why Russia
            </NavLink>
            <ul>
              <li><NavLink to={"/advantages"} onClick={() => {handleLinkClick(1); window.scrollTo(0,0);}}>Advantages </NavLink></li>
              <li><NavLink to={"/advantages"} onClick={() => {handleLinkClick(1); window.scrollTo(0,0);}}>Work Opportunities </NavLink></li>
              <li><NavLink to={"/whyRussTesti"} onClick={() => {handleLinkClick(1); window.scrollTo(0,0);}}>Testimonial </NavLink></li>
              <li><NavLink to={"/ranking"} onClick={() => {handleLinkClick(1); window.scrollTo(0,0);}}>World Ranking </NavLink></li>
            </ul>
          </li><br/>

          <li>
          <NavLink to={"/studyInRussia"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>Study In Russia </NavLink> 
            <ul>
              <li><NavLink to={"/mbbsInRussia" } onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>MBBS In Russia </NavLink></li>
              <li><NavLink to={"/studyInEng"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>Study In English </NavLink></li>
              <li><NavLink to={"/preparatory"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>Preparatory Department </NavLink></li>
              <li><NavLink to={"/studyUni"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>Top Univesities </NavLink></li>
              <li><NavLink to={"/degreeValidation"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>Validation of Degree </NavLink></li>
              <li><NavLink to={"/tuitionFee"} onClick={() => {handleLinkClick(2); window.scrollTo(0,0);}}>Tuition Fee </NavLink></li>
            </ul>
          </li><br/>

          <li>
          <NavLink to={"/lifeInRussia"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Life In Russia</NavLink>
            <ul>
              <li><NavLink to={"/prices"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Prices </NavLink></li>
              <li><NavLink to={"/accomodation"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Accomodation </NavLink></li>
              <li><NavLink to={"/climate"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Climate </NavLink></li>
              <li><NavLink to={"/transport"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Transport </NavLink> </li>
              <li><NavLink to={"/safety"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Safety </NavLink></li> 
              <li><NavLink to={"/healthcare"} onClick={() => {handleLinkClick(3); window.scrollTo(0,0);}}>Healthcare </NavLink></li>
            </ul>
          </li><br/>

            <li><NavLink to={"/mbbsRuss"} onClick={() => {handleLinkClick(0); window.scrollTo(0,0);}}>MBBS Abroad </NavLink>
            <ul>
            <li><NavLink to={"/mbbsRuss"} onClick={() => {handleLinkClick(0); window.scrollTo(0,0);}}>MBBS In Russia</NavLink></li>
            <li><NavLink to={"/mbbsKazak"} onClick={() => {handleLinkClick(0); window.scrollTo(0,0);}}>MBBS In Kazakhstan</NavLink></li>
            <li><NavLink to={"/mbbsUzbek"} onClick={() => {handleLinkClick(0); window.scrollTo(0,0);}}>MBBS In Uzbekistan</NavLink></li>
            <li><NavLink to={"/mbbsItaly"} onClick={() => {handleLinkClick(0); window.scrollTo(0,0);}}>MBBS In Italy</NavLink></li>
            </ul>
            </li>
         
        </ul>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
