import React, { useContext, useState } from "react";
import style from "./mbbsKazak.module.scss";
import kazakPic from "../../../Assets/Destination/kazakhstan.jpg";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../Home/Steps/Steps";

const MbbsKazak = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(4);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={style.divContainer}>
        <div className={style.kazakDiv}>
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

          <h1>MBBS In Kazakhstan</h1>
          <img src={kazakPic} alt="kazakhstan pic" />

          <p>
            Are you an aspiring medical student seeking an international
            education experience? Look no further than Kazakhstan, a country
            that combines high-quality medical education with rich cultural
            diversity. In this comprehensive guide, we'll introduce you to the
            exciting prospects of pursuing an MBBS degree in Kazakhstan and how
            you can embark on this transformative journey through the guidance
            of study abroad consultants.
          </p>

          <h2>MBBS in Kazakhstan: A World-Class Opportunity</h2>
          <p>
            Kazakhstan has emerged as a prominent destination for international
            students aspiring to study medicine. Renowned for its modern medical
            infrastructure and top-tier universities, Kazakhstan offers a
            comprehensive MBBS program designed to nurture future healthcare
            professionals. The curriculum is often taught in English, ensuring
            that international students can access quality education without
            language barriers.
          </p>

          <h2>Study MBBS in Kazakhstan: Advantages Beyond Borders</h2>
          <p>
            Choosing Kazakhstan as your study abroad destination for MBBS comes
            with a myriad of advantages. First and foremost, the cost of
            education is remarkably competitive, making it an economically
            viable option for students. Tuition fees in Kazakhstan are
            significantly lower compared to many Western countries, allowing
            students to pursue their medical dreams without accruing substantial
            debt.
            <br />
            Kazakhstan's medical universities boast a diverse and inclusive
            atmosphere, welcoming students from around the world. This cultural
            diversity enriches the learning experience, fosters global
            connections, and prepares students for a future in an interconnected
            world.
          </p>

          <h2>Expert Guidance: Study Abroad Consultants for Kazakhstan</h2>
          <p>
            Embarking on an international academic journey can be daunting, but
            you don't have to navigate it alone. Graduation Abroad specialises
            in MBBS in Kazakhstan and can be your trusted partner throughout the
            process. We possess comprehensive knowledge about the country's
            educational system, admission requirements, and visa procedures.
            Graduation Abroad will assist you in selecting the right university,
            preparing your application, and managing the visa application
            process, making your dream of studying MBBS abroad a reality.
          </p>

          <h2>The Application Process: Study MBBS in Kazakhstan</h2>
          <p>
            The process of applying to study MBBS in Kazakhstan is
            straightforward. Begin by researching the medical universities and
            programs that align with your academic and career goals. Ensure you
            meet the admission criteria, which typically include providing
            school academic marksheets, a valid passport, and Eligible NEET
            score card.
            <br />
            Once you've chosen your desired university, we will assist you to
            submit your application to the desired university. It's crucial to
            stay informed about application deadlines and ensure all necessary
            documents are submitted accurately. If you encounter any
            uncertainties during the application process, Graduation Abroad can
            offer valuable assistance.
          </p>

          <h2>Studying Abroad in Kazakhstan: A Transformative Experience</h2>
          <p>
            Studying abroad is more than just obtaining an education; it's a
            transformative experience that shapes your personal and professional
            journey. Kazakhstan, with its affordable MBBS programs, world-class
            education, and multicultural environment, offers a unique
            opportunity for students seeking holistic growth.
            <br />
            Whether you're passionate about medicine or have diverse academic
            interests, Kazakhstan beckons you to explore its rich history,
            culture, and natural beauty while pursuing your education. Let study
            abroad consultants for Kazakhstan be your guiding light,
            facilitating your transition into this exciting academic adventure.
          </p>

          <h2>
            Conclusion: Seize the Opportunity to Study MBBS Abroad in Kazakhstan
          </h2>
          <p>
            Your pursuit of an MBBS degree in Kazakhstan is not just an
            education; it's a transformative journey that will broaden your
            horizons, foster international connections, and equip you for a
            successful medical career. Don't miss the chance to experience the
            wonders of this diverse country while pursuing your academic dreams.
            <br />
            Make your dream of studying MBBS in Kazakhstan a reality by
            partnering with Graduation Abroad. We understand the intricacies of
            the process. Embrace the opportunity to study MBBS abroad in
            Kazakhstan, and open the door to a world of possibilities that will
            define your future. Begin your extraordinary journey today!
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default MbbsKazak;
