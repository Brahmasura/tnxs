import React, { useState } from "react";
import style from "./mbbsInRuss.module.scss";
import mbbsInner from "../../../../Assets/Nested/mbbsInner.jpg";
import { useContext } from "react";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../../Home/Steps/Steps";

const MbbsInRuss = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.mbbsContainer}>
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

          <h1>MBBS In Russia</h1>
          <img src={mbbsInner} alt="the advantages" />

          <p>
            MBBS study in abroad, Now a day’s mostly youngsters choices is
            MBBS/Medical studies in abroad they prefer to doing MBBS from Russia
            with comparatively low MBBS fee. It’s become a dream for all the
            medical student that doing higher study in abroad for MBBS in
            Russia, Ukraine, America and European Countries. But mostly of them
            are thought that it’s very costly but not so. You can complete your
            medical studies in Under-graduation as well as Post-graduation in
            abroad with minimum to minimum fee package with English medium study
            in Russia, Ukraine, Kyrgyzstan, as well as European countries also.
            <br /> <br />
            Dream is your so, choice is yours, According to your budget.
            Comparison to India and Abroad, Abroad package is very low than
            India. Without any donation or capitation fees we help you to get
            MBBS Admission as a consultant for Russia and other countries. For
            better and high education practice facilities with low package
            including low living cost.
            <br /> <br /> In abroad you can complete your course in just 50% comparison
            to India. It’s to cheaper than Indian private colleges and the
            benefit is that all the university are recognized by MCI and WHO as
            well as government universities also. Many of them are follow the
            USA based pattern which is the top most pattern in the world.
            <br /> <br /> Graduation Abroad is very glad to help you by giving advice
            to clear your confusion or doubt to short listing the best
            universities from all. We always provide one of the best place for
            MBBS admission/study in abroad. To get direct admission in China,
            Ukraine, Russia, Philippines, Central America or in European
            countries also for high quality education to work in USA, UK or
            India. No donation or capitation fees, special coaching for student
            to clear MCI Screening test. As cost of living is relatively cheap
            in abroad.
            <br /> <br /> Graduation Abroad provides services for students those
            interested to choose Best consultant for Abroad admission in MBBS.
            Which provide good education at an affordable cost. Our service
            doesn’t stop after getting admission and completing the Visa
            processing. We also making the necessary arrangements when your
            child reached there. We will be with our student till they have
            completed their course in out of India.
            <br /> <br /> We are not only show our student the path to pursue their
            dreams or aim to become a doctor, but also guide our student and
            their parents/guardians with latest information till the course
            completion. We provide advice for education loan also. We help to
            make your admission process easier and direct, without any entrance
            exam for medical study Ukraine, Russia, China, Philippines, etc.
            Graduation Abroad also assist to student in completing each and
            every process, throughout the admission and Visa processing till
            departure.
            <br /> We always happy to make sure that student will get better
            opportunities to develop their knowledge skills and community
            engagement though public services opportunities and student
            organization.
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default MbbsInRuss;
