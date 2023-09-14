import React, { useState } from "react";
import style from "./aboutIntro.module.scss";
import { useContext } from "react";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../Home/Steps/Steps";

const AboutIntro = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={style.aboutIntroContainer}>
        <div className={style.contentContainer}>
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

          <h1 className={style.mainHeading}>Welcome to Graduation Abroad</h1>
          <p>
            Dear Fellow Aspirers,
            <br />
            We would like to introduce you to Graduation Abroad, which is a
            reputed study abroad consultancy and has tie up with several
            universities abroad directly. Graduation abroad educational
            consultants aim to promote education in India as well as abroad. We
            aim to guide the students according to their orientation to achieve
            their goals.
            <br />
            We provide guidance for medical education in Russia for Indian
            student at a reasonable price. We offer admissions in MBBS, MD, MS,
            MBA in Russian and European universities. All our universities are
            approved/recognised by MCI, WHO, GMC, UNESCO, UNICEF and other
            consuls of the countries. <br />
            We also offer other degree program and other vocational or technical
            courses to promote education and literacy, employability throughout
            the country and abroad. Our Globally aligned minded dedication to
            the work ensures that you the student, gets the best education for
            your money.
          </p>

          <div className={style.greyContainer}>
            <h2>
              Courses we are expertise in : MBBS (Bachelor in Medicine and
              Bachelor in Science).Why?
            </h2>
          </div>

          <p>
            MBBS is a very desirable career option for most of the students and
            they want to become doctor, but is it possible to get seat for
            Medical in India?
            <br />
            Every year more than 7,00,000 students apply for AIPMT examinations
            but seats are only 3000. Total Government and privates seats sums
            upto 65,000 in India. Competition is very high. For each medical
            seat in India, 182 students fight.
          </p>

          <h3>What are the other options available for the student?</h3>
          <p>
            Drop year and prepare for AIPMT examination again and compete. Pay
            huge donations of upto 30-40 lakhs and Rs 7-9 lakhs per year to get
            the management seat. Take the seat of BDS/BHMS/BAMS which does not
            have much demand and not a good career option. Last but one of the
            most suitable option- Study MBBS abroad.
            <br />
            Eligibility Criteria for MBBS
            <br />
            ABROAD. Minimum age to apply is 17 years by 31st Dec of the
            admission year. Minimum percentage required to apply is 50% in the
            subjects Physics, Chemistry and Biology for General Category and 40%
            for reserved category for SC, ST and OBC. A valid passport.
          </p>

          <h3>Why Study Abroad?</h3>
          <p>
            Tuition fee ranges from 2 lakhs to 3 lakhs rupees per year No
            donation or capitation fee is to be paid Universities has been
            recognised by Medical council of India and World Health
            Organisation. Degree is Internationally valid and accepted We are
            speedily working for our new website which has a better way of
            displaying information and we will be listing all our associates who
            will sign up the agreement with us.
            <br />
            Feel completely free to have an insight conversation with us
            regarding this and clear your head. We will be glad to share you
            commercial details on mail.
            <br />
            We'll be available at:
            <br />
            <br />
            Info@graduationabroad.com
            <br />
            Graduationabroad@outlook.com
            <br />
            <br />
            +91-9760390807 (whatsapp, telegram)
            <br />
            +91-9811464911 (whatsapp)
            <br />
            <br />
            Best Regards,
            <br />
            Team Graduation Abroad
            <br />
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default AboutIntro;
