import React, { useContext, useState } from "react";
import style from "./tuitionFee.module.scss";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../../App";
import tuitionPic from "../../../../Assets/Nested/tuitionFee.png";
import Steps from "../../../Home/Steps/Steps";

const Tuitionfee = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(6);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.feeDiv}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={style.slash}> / </p>
            <NavLink to={"/studyInRussia"} onClick={() => handleLinkClick(2)}>
              Study in Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/mbbsInRussia"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Mbbs In Russia
              </button>
            </NavLink>
            <NavLink to={"/studyInEng"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Study In English
              </button>
            </NavLink>
            <NavLink to={"/preparatory"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Preparatory Department
              </button>
            </NavLink>
            <NavLink to={"/studyUni"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Top Universities
              </button>
            </NavLink>
            <NavLink to={"/degreeValidation"}>
              <button
                className={activeTab === 5 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(5)}
              >
                Validation of Degree
              </button>
            </NavLink>
            <NavLink to={"/tuitionFee"}>
              <button
                className={activeTab === 6 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(6)}
              >
                Tuition Fee
              </button>
            </NavLink>
          </div>

          {/* the tab div ends  */}

          <h1>Tuition Fees</h1>
          <img src={tuitionPic} alt="the advantages" />

          <h2>
            "How much does higher education for Indian students in the Russian
            Federation cost?"
          </h2>
          <p>
            Pursuing MBBS at a Russian university on a contractual basis
            presents an ideal blend of affordability and quality. International
            students can acquire essential knowledge and prestigious degrees at
            a highly reasonable cost. Tuition fees at Russian universities vary,
            but they consistently remain lower than those in Europe or other
            nations. Moreover, the quality of education in Russia rivals that of
            Europe. The Ministry of Science and Higher Education of the Russian
            Federation establishes a minimum tuition fee, which must not fall
            below the state's per-student education investment. Naturally,
            tuition fees depend on factors such as the specific program, its
            duration, and the institution. Furthermore, living expenses in
            Russia (including accommodation, meals, transportation, medical
            insurance, and more) are typically more affordable than in many
            other countries. Full-time international students are entitled to
            various benefits, on par with Russian students. Some Russian
            universities even extend incentives to exceptionally talented
            students, offering them tuition fee discounts."
          </p>

          <h2>How much does it cost to Study MBBS in Russia?</h2>
          <p>
            The cost of obtaining a MBBS degree in Russia varies depending on
            several factors. For MBBS degree programs, the annual tuition fee
            ranges from approximately 220,000 to 260,000 rubles, which is
            roughly equivalent to 200,000 INR to 2,50,000 INR. However, it's
            essential to note that the tuition cost may vary depending on the
            specific program, university, and location. The minimum annual
            tuition fee can be as low as 122,500 rubles, equivalent to 1,20,000
            INR, while the maximum may reach 880,000 rubles, approximately
            850,000 INR. These figures reflect the range of expenses students
            might encounter when pursuing MBBS in Russia.
          </p>

          <h2>
            What is the expense associated with earning a Master's degree at a
            Russian University?
          </h2>
          <p>
            A Master's degree program typically spans two years, delving deeper
            into the chosen field of study. Eligibility requires possession of
            either a Bachelor's or Specialist's degree. For full-time Master's
            degree programs, the average annual tuition fee falls within the
            range of 280,000 to 300,000 rubles, equivalent to 2,60,000 INR to
            2,90,000 INR. The minimum annual cost stands at 147,000 rubles,
            approximately 1,35,000 INR, while the maximum reaches 460,000
            rubles, about 4,20,000 Rubles.
          </p>

          <h2>
            What is the expense associated with pursuing postgraduate studies in
            a Russian University?
          </h2>
          <p>
            Postgraduate programs typically span a minimum of three years. Those
            holding a Master's or Specialist degree can seek admission to these
            programs, particularly if they have a keen interest in research and
            teaching. Upon successful thesis defense, postgraduate students are
            conferred the title of Candidate of Science (PhD). For full-time
            enrollment in postgraduate courses, the average annual tuition fee
            ranges from 280,000 to 300,000 rubles, which is approximately
            2,60,000 INR to 2,90,000 INR. The minimum annual cost is 79,300
            rubles, equivalent to 72,000 INR, while the maximum reaches 413,000
            rubles, about 400,000 INR.
          </p>

          <h2>
            What is the cost of training at the Preparatory Department of a
            Russian university?
          </h2>
          <p>
            Many universities offer Preparatory Departments, providing potential
            international students with an intensive educational course that
            equips them to apply to any Russian university in the future.
            Typically, this program consists of an intensive Russian language
            course and essential general courses relevant to the chosen field of
            study. The duration of Preparatory Department training can vary from
            a few months to a year.
            <br />
            Both Bachelor's and Master's programs have distinct curricula and
            tuition fees. Interestingly, training in the Preparatory Department,
            whether for undergraduate or graduate students, comes at a similar
            cost—an average of 180,000 rubles or approximately 1,60,000 INRfor
            the annual course.
          </p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default Tuitionfee;
