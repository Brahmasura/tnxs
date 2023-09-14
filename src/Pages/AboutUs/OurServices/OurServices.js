import React, { useContext, useState } from "react";
import style from "./ourServices.module.scss";
import service from "../../../Assets/OurServices/our services.jpg";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../App";
import Steps from "../../Home/Steps/Steps";

const OurServices = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={style.divContainer}>
        <div className={style.serviceContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/aboutUs"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                About Us
              </button>
            </NavLink>

            <NavLink to={"/ourServices"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Our Services
              </button>
            </NavLink>

            <NavLink to={"/directorDesk"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Director's Desk
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}

          <img src={service} alt="the service logo" />
          <h1>Services Offered by Graduation Abroad</h1>
          <ul>
            <li>
              <p>
                Consultation regarding the Russian education system, conditions
                of admission to Russian state universities, rules and internal
                regulations of student hostels, life and health insurance,
                application for the issuance of an invitation letter to study in
                Russia
              </p>
            </li>
            <li>
              <p>
                Preliminary evaluation/assessment of educational documents
                (e.g., senior school certificates) for their compliance with the
                requirements of admission to Russian state universities
              </p>
            </li>
            <li>
              <p>
                Assisting with admission to the Russian state university of
                choice according to the chosen specialty and degree
              </p>
            </li>
            <li>
              <p>
                Attestations, translations, required authorizations and all
                other documentation procedures required to be completed by the
                student.
              </p>
            </li>
            <li>
              <p>
                Advice on arranging finances and securing education loans form
                banks.
              </p>
            </li>
            <li>
              <p>
                Arranging the meeting with students at the international
                airports of Moscow and Saint-Petersburg, transferring them to
                domestic flights/railway stations; meeting students at the
                airport/railway station of the city of their studies and taking
                them to the university
              </p>
            </li>
            <li>
              <p>
                Coordination with university authorities in Monitoring students'
                academic progress and behavior
              </p>
            </li>
            <li>
              <p>
                Providing information for obtaining the Certificate of
                Equivalence from the Ministry of Education of the Russian
                Federation, which is obligatory for each student to be admitted
                to any Russian state higher education establishment.
              </p>
            </li>
            <li>
              <p>
                Assisting in transfer to another university or change of
                specialty if the student wishes
              </p>
            </li>
            <li>
              <p>
                Providing information and consultation in obtaining a visa for
                students' parents to visit their children
              </p>
            </li>
            <li>
              <p>
                Any other assistance that may be required by international
                students
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Steps/>
    </>
    
  );
};

export default OurServices;
