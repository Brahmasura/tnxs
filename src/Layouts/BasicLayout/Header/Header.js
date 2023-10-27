import React, { useContext, useState } from "react";
import header from "./header.module.scss";
import { NavLink } from "react-router-dom";
import gradLogo from "../../../Assets/Header/gradLogo.png";
import fb from "../../../Assets/Header/fb.png";
import insta from "../../../Assets/Header/insta.png";
import linke from "../../../Assets/Header/linke.png";
import tweet from "../../../Assets/Header/twitterX.png";
import youtube from "../../../Assets/Header/youtu.png";
import icon from "../../../Assets/Whatsapp/whatsappTwo.svg";
import { LinkContext } from "../../../App";
import modalClosePic from "../../../Assets/Testimonial/modalClosePic.svg";
import userIcon from "../../../Assets/Form/userIcon.png";
import mailIcon from "../../../Assets/Form/mailIcon.png";
import callIcon from "../../../Assets/Form/callIcon.png";
import graduationIcon from "../../../Assets/Form/graduationIcon.png";
import passIcon from "../../../Assets/Form/passIcon.png";
import hamIcon from "../../../Assets/Header/hamIcon.png";
import hamCloseIcon from "../../../Assets/Header/hamCloseIcon.png";
import leftOne from "../../../Assets/FormLeft/formLeftOne.svg";
import leftTwo from "../../../Assets/FormLeft/formLeftTwo.svg";
import leftThree from "../../../Assets/FormLeft/formLeftThree.svg";
import leftFour from "../../../Assets/FormLeft/formLeftFour.svg";
import leftFive from "../../../Assets/FormLeft/formLeftFive.svg";
import leftSix from "../../../Assets/FormLeft/formLeftSix.svg";

const Header = () => {
  const {
    activeLink,
    handleLinkClick,
    isModalOpen,
    formData,
    handleFormChange,
    handleModalClick,
    isHamOpen,
    handleHamClick,
  } = useContext(LinkContext);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   userMail: "",
  //   userContact: "",
  //   userCourse: "",
  //   userPassport: "",
  //   userMessage: "",
  // });

  // const handleFormChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: [e.target.value] });
  // };

  // const handleModalClick = () => {
  //   setIsModalOpen(!isModalOpen);
  //   setFormData({
  //     userName: "",
  //     userMail: "",
  //     userContact: "",
  //     userCourse: "",
  //     userPassport: "",
  //     userMessage: "",
  //   });
  // };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // handling the whatsapp click
  const openWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=+919760390807", "_blank");
  };

  return (
    <>
      {/* the mobile header layout begins  */}
      <>
        <div className={`container-fluid ${header.mobHeaderContainer}`}>
          <nav
            className={`navbar navbar-expand-lg navbar-light ${header.mobHeaderLogo}`}
          >
            <NavLink className="navbar-brand" to={"/"}>
              <img src={gradLogo} alt="brand logo" />
              <div className={header.mobileHeadText}>
                <h1>GRADUATION ABROAD</h1>
                <p>
                  Direct Representatives of Govt. <br /> Medical Universities in
                  Abroad
                </p>
              </div>
            </NavLink>

            {/* whatsapp icon */}
            <div className={header.whatsappDiv} onClick={openWhatsapp}>
              <img src={icon} alt="whatsapp" />
              {/* <p>Chat</p> */}
            </div>
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
              <ul className={`navbar-nav ms-auto ${header.textLinkUl}`}>
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
                  {/* whatsapp icon */}
                  {/* <div class={header.whatsappDiv} onClick={openWhatsapp}>
                  <img src={icon} alt="whatsapp" />
                  <p>Chat</p>
                </div> */}
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

              {/* the mobile link col begins */}

              <div className={`navbar-item ${header.mobileHeadLinksCol}`}>
                <ul className={header.mobileHeadLinkUl}>
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
                    <a href="https://www.twitter.com" target="_absolute">
                      <img src={tweet} alt="the link pic" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" target="_absolute">
                      <img src={youtube} alt="the link pic" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* the mobile link col ends */}
            </div>
          </nav>
        </div>
      </>
      {/* the mobile header layout ends */}

      {/* custom mobile header layout begins */}
      <>
        <div className={`container-fluid ${header.customHeadDiv}`}>
          <div className="row">
            <div className={`col-7 ${header.logoDiv}`}>
              <NavLink to={"/"} onClick={handleHamClick}>
                <img src={gradLogo} alt="gradLogo" />
                <div className={header.mobileHeadText}>
                  <h1>GRADUATION ABROAD</h1>
                  <p>
                    Direct Representatives of Govt. <br /> Medical Universities
                    in Abroad
                  </p>
                </div>
              </NavLink>
            </div>

            <div
              className={`col-2 ${header.whatsappDiv}`}
              onClick={() => {openWhatsapp(); handleHamClick();}} 
            >
              <img src={icon} alt="whatsapp" />
            </div>

            <div className={`col-3 ${header.hamDiv}`}>
              <img src={ isHamOpen ? hamCloseIcon : hamIcon} alt="ham Icon" onClick={handleHamClick} />
            </div>
          </div>

          <div className={header.customContentDiv} style={{ display: isHamOpen ? "block" : "none" }}>
            <ul className={header.textLinkUl}>
              <li className={header.customHeadLi}>
                <NavLink className="nav-link" to={"/"} onClick={handleHamClick}>
                  HOME
                </NavLink>
              </li>

              <li className={header.customHeadLi}>
                <NavLink
                  className="nav-link"
                  to={"/whyRussia"}
                  onClick={handleHamClick}
                >
                  Why Russia
                </NavLink>
              </li>
              <li className={header.customHeadLi}>
                <NavLink
                  className="nav-link"
                  to={"/studyInRussia"}
                  onClick={handleHamClick}
                >
                  Study In Russia
                </NavLink>
              </li>
              <li className={header.customHeadLi}>
                <NavLink
                  className="nav-link"
                  to={"/lifeInRussia"}
                  onClick={handleHamClick}
                >
                  Life In Russia
                </NavLink>
              </li>
              <li className={header.customHeadLi}>
                <NavLink
                  className="nav-link"
                  to={"/universities"}
                  onClick={handleHamClick}
                >
                  Universities
                </NavLink>
              </li>
              <li className={header.customHeadLi}>
                <NavLink
                  className="nav-link"
                  to={"/aboutUs"}
                  onClick={handleHamClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className={header.customHeadLi}>
                <button
                  className={header.joinUsBtn}
                  onClick={() => {
                    handleHamClick();
                    handleModalClick();
                  }}
                >
                  Apply Online
                </button>
              </li>
            </ul>

            {/* the mobile link col begins */}

            <div className={header.mobileHeadLinksCol}>
              <ul className={header.mobileHeadLinkUl}>
                <li>
                  <a
                    href="https://www.facebook.com/GraduationAbroad"
                    target="_absolute"
                  >
                    <img src={fb} alt="the link pic" onClick={handleHamClick} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/graduationabroad/"
                    target="_absolute"
                  >
                    <img src={insta} alt="the link pic" onClick={handleHamClick} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/siddharth-negi-03285969/"
                    target="_absolute"
                  >
                    <img src={linke} alt="the link pic" onClick={handleHamClick} />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_absolute">
                    <img src={tweet} alt="the link pic" onClick={handleHamClick} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_absolute">
                    <img src={youtube} alt="the link pic" onClick={handleHamClick} />
                  </a>
                </li>
              </ul>
            </div>

            {/* the mobile link col ends */}
          </div>
        </div>
      </>

      {/* custom mobile header ends */}

      {/* the real web layout */}
      <div className={`container-fluid ${header.headerContainer}`}>
        <div className="row">
          <div
            className={`col-sm-12 col-md-12 col-lg-12 ${header.headerFirstCol}`}
          >
            {/* the first header col */}

            <div className="row">
              {/* logo */}

              <div className={`col-sm-6 col-md-6 col-lg-4 ${header.brandCol}`}>
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

              <div
                className={`col-sm-6 col-md-6 col-lg-8 ${header.headLinkCol}`}
              >
                <ul className={header.headLinkUl}>
                  <li className={header.fb}>
                    <a
                      href="https://www.facebook.com/GraduationAbroad"
                      target="_absolute"
                    >
                      <img src={fb} alt="the link pic" />
                    </a>
                  </li>
                  <li className={header.insta}>
                    <a
                      href="https://www.instagram.com/graduationabroad/"
                      target="_absolute"
                    >
                      <img src={insta} alt="the link pic" />
                    </a>
                  </li>
                  <li className={header.linke}>
                    <a
                      href="https://www.linkedin.com/in/siddharth-negi-03285969/"
                      target="_absolute"
                    >
                      <img src={linke} alt="the link pic" />
                    </a>
                  </li>
                  <li className={header.tweet}>
                    <img src={tweet} alt="the link pic" />
                  </li>
                  <li className={header.youtube}>
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
              <div className={`col-sm-9 col-md-9 col-lg-9 ${header.linksCol}`}>
                <ul className={header.linksList}>
                  <li className={header.leftLi}>
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
                  <li className={header.leftLi}>
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
                  <li className={header.leftLi}>
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
                  <li className={header.leftLi}>
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
                  <li className={header.rightLi}>
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
                  <li className={header.rightLi}>
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
                {/* whatsapp icon */}
                {/* <div class={header.whatsappDiv} onClick={openWhatsapp}>
                  <img src={icon} alt="whatsapp" />
                  <p>Chat</p> */}
                {/* </div> */}
              </div>

              <div className={`col-sm-3 col-md-3 col-lg-3 ${header.buttonCol}`}>
                {/* whatsapp icon */}
                <div className={header.whatsappDiv} onClick={openWhatsapp}>
                  <img src={icon} alt="whatsapp" />
                  <p>Chat</p>
                </div>
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
                      <div className={` col-12 col-lg-6 ${header.leftDivs}`}>
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
                  <form
                    action="mailto:akhilesh6194officiaL@gmail.com"
                    method="post"
                    enctype="text/plain"
                  >
                    <div className={`container-fluid ${header.formContainer}`}>
                      <div className="row">
                        {/* name */}
                        <div className={`col-md-6 col-lg-6 ${header.formCols}`}>
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
                        <div className={`col-md-6 col-lg-6 ${header.formCols}`}>
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
                        <div className={`col-md-6 col-lg-6 ${header.formCols}`}>
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
                        <div className={`col-md-6 col-lg-6 ${header.formCols}`}>
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
                        <div
                          className={`col-md-12 col-lg-12 ${header.formCols}`}
                        >
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
                        <div
                          className={`col-md-12 col-lg-12 ${header.formCols}`}
                        >
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
