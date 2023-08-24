import React from "react";
import footer from "./footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className={`container-fluid ${footer.footerContainer}`}>
      <div className={`row ${footer.footerContent}`}>
        <div className={`col ${footer.linkCol}`}>
          <h1>WHY RUSSIA</h1>
          <ul className={footer.footerUl}>
            <NavLink to={"/advantages"} onClick={() => window.scrollTo(0, 0)}>
              <li>Advantages of Higher Education in Russia</li>
            </NavLink>
            <NavLink to={"/ranking"} onClick={() => window.scrollTo(0, 0)}>
              <li>Russian Universities in World University Ranking</li>
            </NavLink>
            <li>Russian Higher Education in Figure</li>

            <li>Tradition of Higher education in Russia</li>
          </ul>
        </div>
        <div className={`col ${footer.linkCol}`}>
          <h1>STUDY IN RUSSIA</h1>
          <ul className={footer.footerUl}>
            <li>Preparatory Department</li>
            <li>Study in English</li>
            <li>MBBS in Russia</li>
          </ul>
        </div>
        <div className={`col ${footer.linkCol}`}>
          <h1>LIFE IN RUSSIA</h1>
          <ul className={footer.footerUl}>
            <NavLink to={"/accomodation"} onClick={() => window.scrollTo(0, 0)}>
              <li>Accomodation</li>
            </NavLink>
            <NavLink to={"/prices"} onClick={() => window.scrollTo(0, 0)}>
              <li>Prices</li>
            </NavLink>
            <NavLink to={"/climate"} onClick={() => window.scrollTo(0, 0)}>
              <li>Climate</li>
            </NavLink>
            <NavLink to={"/transport"} onClick={() => window.scrollTo(0, 0)}>
              <li>Transport</li>
            </NavLink>
            <NavLink to={"/safety"} onClick={() => window.scrollTo(0, 0)}>
              <li>Safety</li>
            </NavLink>
            <NavLink to={"/healthcare"} onClick={() => window.scrollTo(0, 0)}>
              <li>Healthcare</li>
            </NavLink>
          </ul>
        </div>
        <div className={`col ${footer.linkCol}`}>
          <h1>MBBS ABROAD</h1>
          <ul className={footer.footerUl}>
            <li>MBBS in Russia</li>
            <li>MBBS in Italy</li>
          </ul>
        </div>
        <div className={`col ${footer.linkCol}`}>
          <h1>ABOUT US</h1>
          <ul className={footer.footerUl}>
            <li>Our Services</li>
            <li>Director's Desk</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
