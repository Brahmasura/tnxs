import React, { useContext, useState } from "react";
import header from "./header.module.scss";
import { NavLink } from "react-router-dom";
import gradLogo from "../../../Assets/Header/gradLogo.png";
import fb from "../../../Assets/Header/fb.png";
import insta from "../../../Assets/Header/insta.png";
import linke from "../../../Assets/Header/linke.png";
import tweet from "../../../Assets/Header/tweet.png";
import youtube from "../../../Assets/Header/youtu.png";
import { LinkContext } from "../../../App";
import modalClosePic from "../../../Assets/Testimonial/modalClosePic.svg";
import userIcon from "../../../Assets/Form/userIcon.png";
import mailIcon from "../../../Assets/Form/mailIcon.png";
import callIcon from "../../../Assets/Form/callIcon.png";
import graduationIcon from "../../../Assets/Form/graduationIcon.png";
import passIcon from "../../../Assets/Form/passIcon.png";
import leftOne from "../../../Assets/FormLeft/formLeftOne.svg";
import leftTwo from "../../../Assets/FormLeft/formLeftTwo.svg";
import leftThree from "../../../Assets/FormLeft/formLeftThree.svg";
import leftFour from "../../../Assets/FormLeft/formLeftFour.svg";
import leftFive from "../../../Assets/FormLeft/formLeftFive.svg";
import leftSix from "../../../Assets/FormLeft/formLeftSix.svg";

const Header = () => {
  const { activeLink, handleLinkClick } = useContext(LinkContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userMail: "",
    userContact: "",
    userCourse: "",
    userPassport: "",
    userMessage: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
    setFormData({
      userName: "",
      userMail: "",
      userContact: "",
      userCourse: "",
      userPassport: "",
      userMessage: "",
    });
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      {/* the mobile header layout begins  */}

      <>
        <div class={`container-fluid ${header.mobHeaderContainer}`}>
          <nav
            className={`navbar navbar-expand-lg navbar-light ${header.mobHeaderLogo}`}
          >
            <NavLink className="navbar-brand" to={"/"}>
              <img src={gradLogo} alt="brand logo" />
              <div className={header.mobileHeadText}>
                    <h1>GRADUATION ABROAD</h1>
                    <p>
                      Direct Representatives of Govt. <br/> Medical Universities in
                      Abroad
                    </p>
                  </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavCollapse}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarTogglerDemo01"
              // aria-controls="navbarTogglerDemo01"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <NavLink
                    className="nav-link"
                    to={"/"}
                    onClick={handleNavCollapse}
                  >
                    HOME
                  </NavLink>
                </li>
              
                <li className="navbar-item">
                  <NavLink
                    className="nav-link"
                    to={"/whyRussia"}
                    onClick={handleNavCollapse}
                  >
                    Why Russia
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    className="nav-link"
                    to={"/studyInRussia"}
                    onClick={handleNavCollapse}
                  >
                    Study In Russia
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    className="nav-link"
                    to={"/lifeInRussia"}
                    onClick={handleNavCollapse}
                  >
                    Life In Russia
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    className="nav-link"
                    to={"/universities"}
                    onClick={handleNavCollapse}
                  >
                    Universities
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    className="nav-link"
                    to={"/aboutUs"}
                    onClick={handleNavCollapse}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <button
                    className={header.joinUsBtn}
                    onClick={() => {
                      handleNavCollapse();
                      handleModalClick();
                    }}
                  >
                    Apply Online
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>

      {/* the mobile header layout ends */}

      {/* the real web layout */}
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
                      to={"/"}
                      className={activeLink === 0 ? header.activeLink : null}
                      onClick={() => {
                        handleLinkClick(0);
                        window.scrollTo(0, 0);
                      }}
                    >
                      HOME
                    </NavLink>
                  </li>
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
                <button onClick={handleModalClick}>
                  <p>Apply Online</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className={header.modalOverlay}>
            <div className={header.modalContent}>
              <img
                src={modalClosePic}
                alt="modalClose"
                className={header.closeButton}
                onClick={handleModalClick}
              />

              <div className={`row ${header.modalRow}`}>
                <div className={`col-lg-4 ${header.modalLeftCol}`}>
                  <h1>How GradAbroad will help you?</h1>
                  <div className={`container-fluid ${header.leftContainer}`}>
                    <div className="row">
                      <div className={`col-lg-6 ${header.leftDivs}`}>
                        <div className={header.leftImageTextDiv}>
                          <img src={leftOne} alt="leftIcons" />
                          <p>Admission Councelling</p>
                        </div>
                      </div>

                      <div className={`col-lg-6 ${header.leftDivs}`}>
                        <div className={header.leftImageTextDiv}>
                          <img src={leftTwo} alt="leftIcons" />
                          <p>Brochure Details</p>
                        </div>
                      </div>

                      <div className={`col-lg-6 ${header.leftDivs}`}>
                        <div className={header.leftImageTextDiv}>
                          <img src={leftThree} alt="leftIcons" />
                          <p>Application Deadlines</p>
                        </div>
                      </div>

                      <div className={`col-lg-6 ${header.leftDivs}`}>
                        <div className={header.leftImageTextDiv}>
                          <img src={leftFour} alt="leftIcons" />
                          <p>Check Detalied Fees</p>
                        </div>
                      </div>

                      <div className={`col-lg-6 ${header.leftDivs}`}>
                        <div className={header.leftImageTextDiv}>
                          <img src={leftFive} alt="leftIcons" />
                          <p>College Search</p>
                        </div>
                      </div>

                      <div className={`col-lg-6 ${header.leftDivs}`}>
                        <div className={header.leftImageTextDiv}>
                          <img src={leftSix} alt="leftIcons" />
                          <p>Course Search</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-8 ${header.modalRightCol}`}>
                  <h1>Register Now to Apply</h1>
                  <h2>
                    Please leave you information, your admission manager will
                    contact you shortly
                  </h2>
                  <form>
                    <div className={`container-fluid ${header.formContainer}`}>
                      <div className="row">
                        {/* name */}
                        <div className={`col-lg-6 ${header.formCols}`}>
                          <input
                            required
                            type="text"
                            className={`form-control ${header.formField}`}
                            placeholder="Full Name"
                            name="userName"
                            value={formData.userName}
                            onChange={handleFormChange}
                          />
                          <img
                            className={header.formIcon}
                            src={userIcon}
                            alt="userIcon"
                          />
                        </div>

                        {/* email */}
                        <div className={`col-lg-6 ${header.formCols}`}>
                          <input
                            required
                            type="email"
                            className={`form-control ${header.formField}`}
                            placeholder="E-mail"
                            name="userMail"
                            value={formData.userMail}
                            onChange={handleFormChange}
                          />
                          <img
                            className={header.formIcon}
                            src={mailIcon}
                            alt="mailIcon"
                          />
                        </div>

                        {/* contact */}
                        <div className={`col-lg-6 ${header.formCols}`}>
                          <input
                            required
                            type="text"
                            className={`form-control ${header.formField}`}
                            placeholder="Contact No."
                            name="userContact"
                            value={formData.userContact}
                            onChange={handleFormChange}
                          />
                          <img
                            className={header.formIcon}
                            src={callIcon}
                            alt="callIcon"
                          />
                        </div>

                        {/* course type */}
                        <div className={`col-lg-6 ${header.formCols}`}>
                          <select
                            required
                            className={`form-control ${header.formField}`}
                            name="userCourse"
                            value={formData.userCourse}
                            onChange={handleFormChange}
                          >
                            <option
                              className={`form-control ${header.formField}`}
                              value=""
                            >
                              Select Your Course
                            </option>

                            <option
                              className={`form-control ${header.formField}`}
                              value="MBBS"
                            >
                              MBBS
                            </option>

                            <option
                              className={`form-control ${header.formField}`}
                              value="Bachelors in Business Administration"
                            >
                              BBA
                            </option>

                            <option
                              className={`form-control ${header.formField}`}
                              value="Engineering"
                            >
                              Engineering
                            </option>
                          </select>
                          <img
                            className={header.formIcon}
                            src={graduationIcon}
                            alt="graduationIcon"
                          />
                        </div>

                        {/* passport availability */}
                        <div className={`col-lg-12 ${header.formCols}`}>
                          <select
                            required
                            className={`form-control ${header.formField} ${header.passportField}`}
                            name="userPassport"
                            value={formData.userPassport}
                            onChange={handleFormChange}
                          >
                            <option className={header.formField} value="">
                              Passport Availability
                            </option>

                            <option className={header.formField} value="Yes">
                              Yes
                            </option>

                            <option className={header.formField} value="No">
                              No
                            </option>
                          </select>
                          <img
                            className={header.formIconPassport}
                            src={passIcon}
                            alt="passportIcon"
                          />
                        </div>

                        {/* the user message */}
                        <div className={`col-lg-12 ${header.formCols}`}>
                          <textarea
                            required
                            placeholder="Kindly Leave Your Message Here"
                            className={`form-control ${header.formField}`}
                            name="userMessage"
                            value={formData.userMessage}
                            onChange={handleFormChange}
                          ></textarea>
                        </div>
                      </div>

                      <p className={header.termsPara}>
                        By submitting this form, you accept and agree to our{" "}
                        <a href="https://google.com">terms and conditions</a>{" "}
                      </p>
                      {/* the submit button */}
                      <button type="submit" className={header.formButton}>
                        <p>Submit</p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
