import React, { useContext, useState } from "react";
import { LinkContext } from "../../../../App";
import style from "./healthcare.module.scss";
import { NavLink } from "react-router-dom";
import healthPic from "../../../../Assets/Nested/HealthcareNested.webp";

const Healthcare = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(6);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.healthContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={style.slash}> / </p>
            <NavLink to={"/lifeInRussia"} onClick={() => handleLinkClick(3)}>
              Life In Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/prices"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Prices
              </button>
            </NavLink>
            <NavLink to={"/accomodation"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Accomodation
              </button>
            </NavLink>
            <NavLink to={"/climate"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Climate
              </button>
            </NavLink>
            <NavLink to={"/transport"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Transport
              </button>
            </NavLink>
            <NavLink to={"/safety"}>
              <button
                className={activeTab === 5 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(5)}
              >
                Safety
              </button>
            </NavLink>
            <NavLink to={"/healthcare"}>
              <button
                className={activeTab === 6 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(6)}
              >
                Healthcare
              </button>
            </NavLink>
          </div>

          {/* the tab div ends  */}

          <h1>Heathcare</h1>
          <img src={healthPic} alt="The climate" />

          <h2>Healthcare System Overview:</h2>
          <p>
            In Russia, healthcare services are offered through both state-run
            institutions and private companies. While only first aid and
            emergency medical care are available free of charge to foreign
            citizens, a health insurance policy is crucial for accessing
            comprehensive medical services.
          </p>

          <h2>Health Insurance Requirement:</h2>
          <p>
            To receive treatment at state hospitals, health centers, and student
            clinics, including routine check-ups, tests, prescriptions, and
            specialist consultations, you must hold a valid health insurance
            policy. Private clinics may admit patients without insurance,
            provided they cover their own expenses.
          </p>

          <h2>Emergency Situations:</h2>
          <p>
            In emergencies such as accidents, injuries, or intoxication, initial
            first aid is administered by trained individuals including police
            officers, military personnel, and fire and rescue service workers.
            In cases where immediate threat to life and health exists, officers
            from public healthcare institutions step in to provide emergency
            medical care. This care stabilizes the patient's condition, but
            further treatment requires a valid health insurance policy or
            payment of expenses.
          </p>

          <h2>Paid Medical Services:</h2>
          <p>
            Beyond emergency care, all other medical services are fee-based.
            This includes routine medical treatments, consultations, and
            procedures. International students seeking non-emergency medical
            attention are required to have insurance coverage for routine
            treatment.
          </p>

          <h2>Private Clinics and Payment:</h2>
          <p>
            Private clinics offer medical care to patients without insurance,
            with patients bearing the costs of their treatment. These facilities
            provide an alternative option for those without health insurance
            coverage.
          </p>

          <h2>Navigating Healthcare:</h2>
          <p>
            For international students in Russia, navigating the healthcare
            system involves securing adequate health insurance coverage. A valid
            health insurance policy not only ensures access to medical services
            but also provides financial security and peace of mind.
          </p>

          <h2>Importance of Health Insurance:</h2>
          <p>
            Health insurance is your gateway to comprehensive medical care and
            treatment. It's a vital investment that safeguards your well-being
            and ensures that you can access quality healthcare services when
            needed. Before arriving in Russia, make sure to research and obtain
            a suitable health insurance policy that meets your needs and
            provides coverage for routine medical expenses.
          </p>

          <h2>Conclusion:</h2>
          <p>
            Prioritizing health insurance is essential for international
            students studying in Russia. Whether it's emergency care or routine
            medical services, having the right health insurance policy is your
            key to receiving timely and appropriate healthcare, ensuring your
            well-being throughout your academic journey in this diverse and
            culturally rich country.
          </p>
        </div>
      </div>
    </>
  );
};

export default Healthcare;
