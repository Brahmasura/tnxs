import React, { useState } from "react";
import steps from "./steps.module.scss";
import imgOne from "../../../Assets/Steps/steps1.jpg";
import imgTwo from "../../../Assets/Steps/steps2.jpg";
import imgThree from "../../../Assets/Steps/steps3.jpg";
import imgFour from "../../../Assets/Steps/steps4.jpg";
import imgFive from "../../../Assets/Steps/steps5.jpg";
import { NavLink } from "react-router-dom";

const stepsList = [
  { image: imgOne, text: "Choose Course and University" },
  { image: imgTwo, text: "Prepare your Documents" },
  { image: imgThree, text: "Learn about Financing and Scholarship" },
  { image: imgFour, text: "Apply for Admission to a university" },
  { image: imgFive, text: "Get Invitation to apply for Student Visa" },
];

const Steps = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleStepHover = (index) => {
    setHoveredStep(index);
  };
  return (
    <>
      <div className={steps.stepsContainer}>
        <NavLink to={"/nestedSteps"} onClick={() => window.scrollTo(0, 0)}>
          <h1>Steps for Applying to a Russian University</h1>
        </NavLink>

        <div className={`container-fluid ${steps.colContainer}`}>
          <div className={`row ${steps.rowContainer}`}>
            {stepsList.map((item, index) => (
              <div
                key={index}
                className={`col ${steps.stepContainer}`}
                onMouseEnter={() => handleStepHover(index)}
                onMouseLeave={() => handleStepHover(null)}
              >
                <div className={`row ${steps.stepsRow}`}>
                  <NavLink
                    to={"/nestedSteps"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div
                      className={`col-md-12 col-lg-12 ${steps.stepsUpper}`}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className={`col-md-12 col-lg-12 ${steps.stepsLower}`}>
                      <p>{item.text}</p>
                      <div
                        className={steps.circle}
                        style={{
                          borderColor:
                            hoveredStep !== null && hoveredStep >= index
                              ? "#5780c0"
                              : "#dd3534",
                          backgroundColor:
                            hoveredStep !== null && hoveredStep >= index
                              ? "#5780c0"
                              : "#fff",
                        }}
                      >
                        {" "}
                        <p
                          style={{
                            color:
                              hoveredStep !== null && hoveredStep >= index
                                ? "#fff"
                                : "#dd3534",
                          }}
                        >
                          {index + 1}
                        </p>
                      </div>
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
