import React, { useContext, useState } from "react";
import style from "./mbbsItaly.module.scss";
import italyPic from "../../../Assets/Destination/italy.webp";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";

const MbbsItaly = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.italyDiv}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/mbbsRuss"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Russia
              </button>
            </NavLink>
            <NavLink to={"/mbbsItaly"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Italy
              </button>
            </NavLink>
            <NavLink to={"/mbbsUzbek"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Uzbekistan
              </button>
            </NavLink>
            <NavLink to={"/mbbsKazak"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Kazakhstan
              </button>
            </NavLink>
          </div>

          {/* the tab div ends  */}

          <h1>MBBS In ITALY</h1>
          <img src={italyPic} alt="italy" />

          <p>
            Are you aspiring to become a skilled medical professional? Italy, a
            country renowned for its rich history, culture, and cuisine, also
            offers world-class medical education that can be your gateway to a
            successful medical career. In this article, we'll explore the
            opportunities for MBBS in Italy, including scholarships and the
            innovative iMAT exam, making it an attractive destination for
            international students seeking quality education in Europe.
          </p>

          <h2>MBBS in Italy - Your European Dream</h2>
          <p>
            {" "}
            Italy stands out as a top destination for international students
            pursuing MBBS in Europe. The country is home to several prestigious
            medical universities, known for their cutting-edge research, modern
            facilities, and experienced faculty. With a focus on holistic
            medical education, Italian universities offer a comprehensive MBBS
            program that prepares students for global healthcare challenges.
          </p>

          <h2>Free MBBS in Europe and Scholarships in Italy</h2>
          <p>
            One of the major attractions for students considering MBBS in Italy
            is the opportunity for free or highly affordable education. Many
            Italian universities offer tuition-free education to EU and non-EU
            students alike. Additionally, there are various scholarship programs
            available for international students to ease their financial burden.
            These scholarships are based on academic merit, talent, and
            financial need, making MBBS in Italy an affordable option for many.
          </p>

          <h2>Scholarship Opportunities in Europe</h2>
          <p>
            Apart from Italian scholarships, there are numerous European
            scholarship programs available for aspiring medical students. These
            scholarships can provide financial support and open doors to
            world-class medical education across the continent. Exploring these
            options can help you make your MBBS dreams come true without
            breaking the bank.
          </p>

          <h2>iMAT in Italy - A Unique Admission Pathway</h2>
          <p>
            The International Medical Admissions Test (iMAT) is an innovative
            way for international students to secure a seat in Italian medical
            universities. This test evaluates your critical thinking and
            problem-solving skills, ensuring that you are well-prepared for the
            rigorous medical curriculum. Scoring well on the iMAT can enhance
            your chances of admission to some of Italy's most prestigious
            medical schools.
          </p>

          <h2>Study in Italy - A Cultural Experience</h2>
          <p>
            Studying in Italy is not just about education; it's also about
            immersing yourself in a rich cultural experience. From historic
            cities like Rome, Florence, and Venice to picturesque countryside
            landscapes, Italy offers a diverse and captivating environment.
            You'll have the opportunity to savor delicious Italian cuisine,
            learn a new language, and explore a vibrant European culture while
            pursuing your medical degree.
          </p>
        </div>
      </div>
    </>
  );
};

export default MbbsItaly;
