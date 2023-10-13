import React, { useContext, useState } from "react";
import style from "./mbbsRuss.module.scss";
import russiaPic from "../../../Assets/Destination/russia.jpeg";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../Home/Steps/Steps";

const MbbsRuss = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [ activeTab, setActiveTab]= useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
    console.log("activeTab", activeTab);
  };
  return (
    <>
      <div className={style.divContainer}>
        <div className={style.russDiv}>
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
            <NavLink to={"/mbbskazak"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Kazakhstan
              </button>
            </NavLink>
          </div>

          {/* the tab div ends  */}

          <h1>MBBS In Russia</h1>
          <img src={russiaPic} alt="Russia" />
          <h2>
            A new destination for the medical students, have you reviewed MBBS
            courses in Russia?
          </h2>
          <p>
            Russia is a popular destination for many international students who
            want to pursue MBBS. Russia has a population of more than 130
            million. Russian people are very easy going and traditional. The
            country cordially welcomes people from other culture. The country
            has a highly developed, government-backed transportation system. The
            Government also takes care of the health and wellness of citizens
            and visitors seriously. The universities here are making every
            effort to be compatible with the top ranking universities of the
            world. <br />
            There are 65 universities in Russia that offer state-of-the-art
            medical education. Several universities are even considered among
            the top 30 universities of the world. There are 15 universities that
            are offering medical education in English helping the international
            students avail top-quality medical education. MBBS in Russia is a
            preferred destination for international students due to its
            subsidized fee compared to the other Western countries, strong
            infrastructure, and world-class faculty. The quality of education is
            quite high combined with low cost. In all the Russian Medical
            Universities, the ratio of student to teacher is almost 7:1
            signifying intensive individualized teaching which is another reason
            that students from 170 countries enter Russia for medical education.
          </p>

          <h2>Student life in Russia</h2>
          <p>
            Russia is a popular destination among medical students from all over
            the world. The students who want to study MBBS apply in the various
            medical universities located in Russia every year. The Russian
            medical universities are well recognized worldwide. The quality of
            education is quite high. These universities follow an international
            curriculum. The Russian Government keeps a close watch on these
            universities and maintains a high standard of medical education.
            Every year several students from countries such as India, Pakistan,
            Nepal, South Africa, and othercountries travel to Russia. The
            medical students enjoy a happy and healthy life in Russia. They get
            the best accommodation at a low price. The students can enjoy the
            multicultural environment in these universities. Moreover, students
            participate in many festivals and cultural events organized by
            medical universities.
          </p>

          <h2>Why study MBBS in Russia?</h2>
          <p>
            Medical Study is easy for a student in Russia because a student can
            directly take MBBS admission in Russia without any entrance
            examination. MBBS fee/s in Russia is quite low in comparison to
            other European countries and America. The Russian Government offers
            subsidy in education. Since the medical courses are approved by
            international bodies like WHO, IMED, and MCI, a student can easily
            practice anywhere in the world after passing MBBS or MD from this
            country. These universities offer quality medical education.
            Moreover, students get furnished hostel facilities with good quality
            food. Medical Education in Russia is preferred by the students due
            to the following reasons:<br/>
            <ul>
              <li>No Donation and No Entrance Exam</li>
              <li>Easy Admission Procedure</li>
              <li>Subsidized course fee</li>
              <li>Degrees are recognized worldwide.</li>
              <li>
                Availability of Indian Canteen in the leading universities
              </li>
              <li>100% Guarantee of Visa</li>
              <li>They are Government Universities of Russia</li>
              <li>Excellent Result during MCI Screening Test</li>
            </ul>
            Moreover, studying MBBS in Russia is much better compared to paying
            a donation to Indian Medical Colleges. There is a continuous flow of
            Indian students in this country on a large scale.
          </p>

          <h2>List of medical universities in Russia for Indian students</h2>
          <p>
            Study abroad Consultants for India names some of the Medical
            Universities in Russia for Indian Students as follows:
            <br />
            <ul>
              <li>
                Russia National Research medical University- WHO has accredited
                this university with A++ grade because of its library size,
                campus infrastructure, and teaching quality.
              </li>
              <li>
                People Friendship University- This university is located in
                Moscow and has alumni exceeding 20,000 medical professionals.
                This university has specialization in Paediatric, Therapeutic,
                and Micro Biology for post graduation courses too.
              </li>
              <li>
                Crimea Federal University- It is a government university and one
                of the best medical colleges taught completely in English. It is
                MCI approved.
              </li>
            </ul>
            You can know about MBBS in Russia for India Students fee structure
            in details through Study abroad consultants in Delhi for Russia. If
            you want to know the complete break-up of the fee structure to study
            MBBS in Russia you can get the details from Overseas Education
            Consultants in Russia. There are several education consultants such
            as Study in Russia consultants in India that offer information on
            various educational courses including MBBS.
          </p>

          <h2>FAQ</h2>
          <p>
            <ol>
              <li>
                <strong>
                  Are Russian universities offering world standard medical
                  education?
                </strong>
                <br />
                Yes, the quality of education that the Russian universities
                offer is indeed world standard.
              </li>
              <li>
                <strong>
                  Are the MBBS and MD courses in Russia recognized by the
                  international medical bodies?
                </strong>
                <br />
                Yes, all the MBBA and MD courses that students pursue in
                different Russian universities are approved by several
                international bodies including IMED, MCI, and WHO.
              </li>

              <li>
                <strong>
                  Is it tough to get admission in MBBS in a Russian university?
                </strong>
                <br />
                Not at all. However, you will be asked to appear in a test that
                will assess the standard of education you have received in your
                home country.
              </li>

              <li>
                <strong>Is pursuing MBBS or MD is costly in Russia?</strong>
                <br />
                No. In fact, Russian universities offer medical education at
                much cheaper prices in comparison to other European countries
                and the USA.
              </li>

              <li>
                <strong>
                  Is the installment payment option is available for paying the
                  tuition fee?
                </strong>
                <br />
                Yes. Installment payment option in easy terms and conditions is
                available.
              </li>

              <li>
                <strong>
                  What about the accommodation facility for medical students in
                  Russia?
                </strong>
                <br />
                Universities have their own accommodation facilities for medical
                students. In extreme case, if you don’t obtain any accommodation
                in the university campus, there are plenty of other
                accommodations available for the students.
              </li>

              <li>
                <strong>What about the social life there?</strong>
                <br />
                Russia has a rich cultural heritage. People there are very
                friendly and easily mingle with foreigners.
              </li>

              <li>
                <strong>
                  Will the university help me to open a bank account?
                </strong>
                <br />
                Of course, they will. You will get a bank account within a few
                days after arriving in Russia.
              </li>

              <li>
                <strong>
                Is TOEFL or IELTS is mandatory for admission in Russia?
                </strong>
                <br />
                No, the universities don’t demand these certifications.
                  However, if you want to study in English medium, you have to
                  pursue an English course before your MBBS program starts.
              </li>

              <li>
                <strong>Can I obtain Russian citizenship?</strong>
                <br />
                Yes, you can apply for Russian citizenship after 2 years of
                regular stay in that country. There are some other rules too
                that you have to follow.
              </li>
            </ol>
          </p>

          <h2>
            Why choose Graduation Abroad for getting admission in a reputed
            Russian university?
          </h2>
          <p>
            Every year hundreds of students from different parts of India
            contact us for pursuing higher education in different countries
            including MBBS and MD programs in Russia. We have in-depth knowledge
            about all Russian universities and their course structures. We keep
            updated information about various medical education programs in
            Russia. We provide comprehensive support to the students that
            include free counseling, visa assistance, registration, and travel
            assistance. Thus, choose Graduation Abroad for living your dreams
            and for a bright career.
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default MbbsRuss;
