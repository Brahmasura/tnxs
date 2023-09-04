import React, { useContext } from "react";
import style from "./fiveSteps.module.scss";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";

const FiveSteps = () => {
  const { handleLinkClick } = useContext(LinkContext);

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.stepsDiv}>
          {/* home link begins  */}
          <div className={style.linkDiv}>
            <NavLink
              to={"/"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </NavLink>
          </div>

          {/* home link ends */}

          <h1>5 Steps To Apply</h1>

          <p>
            We offer complete assistance in applying for your dream university
            in Russia. We are here for you, from offering orientation assistance
            to providing all the admission details. Our experts have supported
            hundreds of students till now to get their dream valid of pursuing
            an MBBS in Russia. The complete process of application is as
            follows:
          </p>

          <p>
            <ul>
              <li>
                <strong>Choose a program and university</strong>
                <br />
                We have a wide range of top university programs which you can
                choose from. As the first step, you must go through them and see
                which fits your expectations and career requirements. Next, you
                must look for several aspects like curriculum, course duration,
                fees, etc.
              </li>
              <li>
                <strong>Financing and scholarship strategies</strong>
                <br />
                When you have selected the course you want, the next step is
                understanding your financing and scholarship strategy. Our
                counselors will help you discover several scopes and
                opportunities for scholarship while suggesting suitable means of
                financing.
              </li>
              <li>
                <strong>Documentation</strong>
                <br />
                In the next step, we offer complete support for preparing your
                document packaging. Our experts help you prepare all your
                correct and required documents per the universities&#39;
                instructions and guidelines.
              </li>
              <li>
                <strong>Selection process</strong>
                <br />
                The student needs to appear for the competitive selection
                process of the universities as per their guidelines.
              </li>
              <li>
                <strong>Application confirmation and student visa</strong>
                <br />
                After clearing out the selection process, you will get a
                confirmation from the university. Then you should apply for the
                student visa.
              </li>
              Explore different MBBS courses with us. Contact us now for mores
              information.
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default FiveSteps;
