import React, { useContext } from "react";
import header from "./header.module.scss";
import { NavLink } from "react-router-dom";
import gradLogo from "../../../Assets/Header/gradLogo.png";
import fb from "../../../Assets/Header/fb.png";
import insta from "../../../Assets/Header/insta.png";
import linke from "../../../Assets/Header/linke.png";
import tweet from "../../../Assets/Header/tweet.png";
import youtube from "../../../Assets/Header/youtu.png";
import { LinkContext } from "../../../App";

const Header = () => {
  const { activeLink, handleLinkClick } = useContext(LinkContext);

  return (
    <div className={`container-fluid ${header.headerContainer}`}>
      <div className="row">
        <div className={`col-md-12 col-lg-12 ${header.headerFirstCol}`}>
          {/* the first header col */}

          <div className="row">
            {/* logo */}

            <div className={`col-md-4 col-md-4 ${header.brandCol}`}>
              <NavLink
                to={"/"}
                onClick={() => {
                  handleLinkClick(0);
                  window.scrollTo(0, 0);
                }}
              >
                <img src={gradLogo} alt="logo" />
                <div className={header.headText}>
                  <h1>GRADUATION ABROAD</h1>
                  <p>
                    Direct Representatives of Govt. Medical Universities in
                    Abroad
                  </p>
                </div>
              </NavLink>
            </div>

            <div className={`col-md-8 col-lg-8 ${header.headLinkCol}`}>
              <ul className={header.headLinkUl}>
                <li>
                  <a
                    href="https://www.facebook.com/GraduationAbroad"
                    target="_absolute"
                  >
                    <img src={fb} alt="the link pic" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/graduationabroad/"
                    target="_absolute"
                  >
                    <img src={insta} alt="the link pic" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/siddharth-negi-03285969/"
                    target="_absolute"
                  >
                    <img src={linke} alt="the link pic" />
                  </a>
                </li>
                <li>
                  <img src={tweet} alt="the link pic" />
                </li>
                <li>
                  <img src={youtube} alt="the link pic" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* the second header col with link */}
        <div className={`col-md-12 col-lg-12 ${header.headerSecCol}`}>
          <div className="row">
            {/* the links for navigation */}
            <div className={`col-md-9 col-lg-9 ${header.linksCol}`}>
              <ul className={header.linksList}>
                <li>
                  <NavLink
                    to={"/whyRussia"}
                    className={activeLink === 1 ? header.activeLink : null}
                    onClick={() => {
                      handleLinkClick(1);
                      window.scrollTo(0, 0);
                    }}
                  >
                    WHY RUSSIA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/studyInRussia"}
                    className={activeLink === 2 ? header.activeLink : null}
                    onClick={() => {
                      handleLinkClick(2);
                      window.scrollTo(0, 0);
                    }}
                  >
                    STUDY IN RUSSIA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/lifeInRussia"}
                    className={activeLink === 3 ? header.activeLink : null}
                    onClick={() => {
                      handleLinkClick(3);
                      window.scrollTo(0, 0);
                    }}
                  >
                    LIFE IN RUSSIA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/universities"}
                    className={activeLink === 4 ? header.activeLink : null}
                    onClick={() => {
                      handleLinkClick(4);
                      window.scrollTo(0, 0);
                    }}
                  >
                    UNIVERSITIES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/aboutUs"}
                    className={activeLink === 5 ? header.activeLink : null}
                    onClick={() => {
                      handleLinkClick(5);
                      window.scrollTo(0, 0);
                    }}
                  >
                    ABOUT US
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={`col-md-3 col-lg-3 ${header.buttonCol}`}>
              <button>
                <a href="#footer">
                  <p>Contact Us</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
