import React, { useContext, useState } from "react";
import style from "./mbbsUzbek.module.scss";
import uzbekPic from "../../../Assets/Destination/uzbekistan.webp";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../Home/Steps/Steps";

const MbbsUzbek = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.uzbekDiv}>
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

          <h1>MBBS in Uzbekistan</h1>
          <img src={uzbekPic} alt="Uzbekistan" />

          <p>
            Uzbekistan, a vibrant Central Asian nation, has been gaining
            recognition as an excellent destination for international students,
            especially those aspiring to pursue MBBS (Bachelor of Medicine,
            Bachelor of Surgery) abroad. With its rich cultural heritage,
            affordable education, and world-class medical institutions,
            Uzbekistan is emerging as a top choice for students looking to study
            MBBS abroad. One of the key attractions for international students
            coming to Uzbekistan is its exceptional medical education system.
            Uzbekistan boasts several top-tier medical universities that offer
            internationally recognized MBBS programs. With a blend of modern
            curriculum, experienced faculty, and state-of-the-art facilities,
            Uzbekistan's medical universities are creating a new generation of
            healthcare professionals. In this article, we will provide an
            insightful introduction to Uzbekistan, highlighting why it is an
            ideal destination for pursuing MBBS studies.
          </p>

          <h2>Why Study MBBS in Uzbekistan?</h2>
          <p>
            <strong>Affordable Education:</strong>
          </p>
          <br />
          <p>
            Education: Choosing to study MBBS in Uzbekistan comes with a
            plethora of benefits. First and foremost, the cost of education is
            significantly lower compared to many Western countries, making it an
            affordable option for international students. Living expenses are
            remarkably affordable too, making it an attractive option for MBBS
            Abroad.
          </p>

          <p>
            <strong>Quality Medical Institutions:</strong>
          </p>
          <br />
          <p>
            The country boasts several prestigious medical universities that are
            recognized globally for their high academic standards and modern
            facilities. These institutions are known for their commitment to
            producing well-trained medical professionals.
          </p>

          <p>
            <strong>International Recognition:</strong>
          </p>
          <br />
          <p>
            Many medical universities in Uzbekistan are accredited by
            international bodies such as the World Health Organization (WHO) and
            the Medical Council of India (MCI). This recognition ensures that
            graduates are eligible to practice medicine worldwide.
          </p>

          <p>
            <strong>Multilingual Programs:</strong>
          </p>
          <br />
          <p>
            Most medical programs in Uzbekistan are offered in English, which
            facilitates easy comprehension for international students. This
            language advantage eliminates the need for learning a new language
            before embarking on your medical journey.
          </p>

          <h2></h2>

          <p>
            <strong>Rich Cultural Heritage:</strong>
          </p>
          <br />
          <p>
            {" "}
            Uzbekistan is home to a wealth of historical and cultural sites,
            including the ancient Silk Road cities of Samarkand, Bukhara, and
            Khiva. Studying in Uzbekistan offers students the opportunity to
            explore these treasures and immerse themselves in the country's
            fascinating history.
          </p>

          <p>
            <strong>Warm Hospitality:</strong>
          </p>
          <br />
          <p>
            {" "}
            Uzbek people are known for their warm hospitality and friendliness.
            International students are welcomed with open arms and often find it
            easy to integrate into the local culture.
          </p>

          <p>
            <strong>Safe Environment:</strong>
          </p>
          <br />
          <p>
            Uzbekistan is considered one of the safest countries in Central
            Asia, ensuring a secure and peaceful environment for international
            students.
          </p>

          <h2>Study Abroad Consultants for Uzbekistan</h2>
          <p>
            Navigating the admission process and visa requirements for
            international education can be challenging. Fortunately, Gradabroad
            Overseas Education LLP specialize in assisting students interested
            in pursuing MBBS in Uzbekistan. Graduation Abroad provides valuable
            guidance on university selection, application procedures, visa
            documentation, and even offer support throughout the academic
            journey. We are well- versed in the specific requirements for
            international students and can ease the transition to studying in
            Uzbekistan.
          </p>

          <h2>Conclusion</h2>
          <p>
            Uzbekistan, with its affordable education, high-quality medical
            institutions, and rich cultural heritage, is a rising star on the
            map of international education. Aspiring medical students looking to
            study abroad, particularly those interested in MBBS programs, should
            seriously consider Uzbekistan as a prime destination for their
            academic pursuits. With the assistance of reputable study abroad
            consultants, the path to obtaining a world-class medical education
            in Uzbekistan becomes even more accessible. Embrace the opportunity
            to study in Uzbekistan and embark on a fulfilling academic journey
            that will shape your future in the field of medicine.
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default MbbsUzbek;
