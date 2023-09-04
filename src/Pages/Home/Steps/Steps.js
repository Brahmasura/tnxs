import React from "react";
import steps from "./steps.module.scss";
import imgOne from '../../../Assets/Steps/steps1.jpg';
import imgTwo from '../../../Assets/Steps/steps2.jpg';
import imgThree from '../../../Assets/Steps/steps3.jpg';
import imgFour from '../../../Assets/Steps/steps4.jpg';
import imgFive from '../../../Assets/Steps/steps5.jpg';
import { NavLink } from "react-router-dom";

const stepsList = [
  { image: imgOne, text: "Choose Program and University" },
  { image: imgTwo, text: "Prepare your Documents" },
  { image: imgThree, text: "Learn About Financing and Scholarship" },
  { image: imgFour, text: "Apply for Admission" },
  { image: imgFive, text: "collect your Invitation and get your Student Visa"}
];

const Steps = () => {
  return (
    <>
      <div className={steps.stepsContainer}>
        <h1>Steps to Applying into a Russian University</h1>

        <div className={`container-fluid ${steps.colContainer}`}>
          <div className={`row ${steps.rowContainer}`}>
            {stepsList.map((item) => (
              <div className={`col ${steps.stepContainer}`}>
                <div className={`row ${steps.stepsRow}`}>
                <NavLink to={"/nestedSteps"} onClick={() => window.scrollTo(0,0)}>
                  <div className={`col-md-12 col-lg-12 ${steps.stepsUpper}`} style={{backgroundImage:`url(${item.image})`}}>
                   
                  </div>
                  <div className={`col-md-12 col-lg-12 ${steps.stepsLower}`}>
                    <p>{item.text}</p>
                  </div>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
