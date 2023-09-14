import React, { useContext, useState } from "react";
import style from "./directorDesk.module.scss";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../Home/Steps/Steps";

const DirectorDesk = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.directorContainer}>
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

          {/* <img src={service} alt="the service logo" /> */}
          <h1>Director's Desk</h1>
          <h2 className={style.welcomeHead}>
            Welcome to GradAbroad Overses Education LLP: Your Pathway to a
            Rewarding Medical Career
          </h2>

          <p>Hello,</p>
          <p>
            {" "}
            I'm Siddharth Negi, and I'm thrilled to introduce you to GradAbroad
            Overses Education LLP, a unique education consultancy that is here
            to make your dreams come true.
          </p>

          <p>
            Are you an aspiring MBBS student? If becoming a doctor is your goal,
            you're in the right place. But let's address a common concern – is
            it feasible to secure a medical seat in India?
          </p>

          <p>
            Every year, over 17,00,000 students compete in the NEET examinations
            for a mere 30,000 available seats. In India, the total count of
            government and private medical seats adds up to only 65,000. The
            competition is fierce, with 182 students vying for each medical
            seat.
          </p>

          <h2>Now, let's explore your alternatives:</h2>
          <ul>
            <li>
              <p>Take a gap year, reprepare for NEET, and compete once more.</p>
            </li>
            <li>
              <p>
                Pay hefty donations ranging from 30 to 40 lakhs, plus an annual
                fee of 7 to 9 lakhs for a management seat.
              </p>
            </li>
            <li>
              <p>
                Consider lesser-demanded options like BDS/BHMS/BAMS, which might
                not offer the best career prospects.
              </p>
            </li>
            <li>
              <p>Opt for a highly suitable choice – studying MBBS abroad.</p>
            </li>
          </ul>

          <h2>Eligibility Criteria for Studying MBBS Abroad:</h2>
          <p>
            <strong>
              To embark on this incredible journey, you'll need to meet a few
              requirements:
            </strong>
          </p>

          <ul>
            <li>
              <p>
                Be at least 17 years old by December 31st of the admission year.
              </p>
            </li>
            <li>
              <p>
                Achieve a minimum of 50% in Physics, Chemistry, and Biology (40%
                for reserved categories).
              </p>
            </li>
            <li>
              <p>Hold a valid passport.</p>
            </li>
          </ul>

          <h2>Why Choose to Study Abroad?</h2>

          <p>
            <strong>Studying MBBS abroad comes with numerous benefits:</strong>
          </p>

          <ul>
            <li>
              <p>
                Affordable tuition fees, ranging from 2 to 3 lakhs rupees per
                year.
              </p>
            </li>
            <li>
              <p>No donations or capitation fees required.</p>
            </li>

            <li>
              <p>
                All universities are recognized by the Medical Council of India
                and the World Health Organization.
              </p>
            </li>

            <li>
              <p>Your degree holds international validity and acceptance.</p>
            </li>
          </ul>

          <h2>Concerned About Authenticity? Worry Not.</h2>
          <p>
            Rest assured, all the universities we list and offer admissions to
            are globally recognized. This means you can practice medicine
            anywhere in the world after completing your studies.
          </p>

          <h2>Study in Universities Listed by the Medical Council of India:</h2>
          <p>
            The Medical Council of India lists colleges and universities where
            you can pursue your MBBS course. Your degree will be valid, and
            you'll be eligible to sit for the MCI screening test conducted by
            the National Board of Education. Notable features of this
            examination include:
          </p>

          <ul>
            <li>
              <p>Attaining 50% marks out of 300 for a pass.</p>
            </li>
            <li>
              <p>No competition – achieving 50% guarantees MCI registration.</p>
            </li>
            <li>
              <p>No negative markings, leading to better scores.</p>
            </li>
            <li>
              <p>Biannual examinations, while degrees are awarded annually.</p>
            </li>
          </ul>

          <p>
            Additionally, many foreign universities offer MCI coaching to
            prepare Indian students for the examination upon their return.
          </p>

          <h2>Study in World Health Organization Approved Institutions:</h2>
          <p>
            All medical colleges worldwide are listed under the guidance and
            protocols of the World Health Organization (WHO). This ensures the
            quality of education and training.
          </p>

          <h2>Application Process Made Simple:</h2>
          <p>
            <strong>Our application process is straightforward:</strong>
          </p>

          <ul>
            <li>
              <p>
                Submit scanned copies of your 10th and 12th certificates,
                Passport scan along with a photo and registration fee via email.
              </p>
            </li>
            <li>
              <p>
                If you don't have a passport, apply at www.passportindia.gov.in.
                You can receive your passport in 30-40 days.
              </p>
            </li>
            <li>
              <p>
                You'll receive a scanned admission letter within 10 days; the
                original will take around 20 days.f
              </p>
            </li>
            <li>
              <p>
                Once you have your passport, submit scans of both sides and the
                second passport submission installment.
              </p>
            </li>
            <li>
              <p>
                After applying to the University, an Invitation letter will be
                sent within 30-40 days. This process involves verification with
                Indian and foreign embassies.
              </p>
            </li>
            <li>
              <p>
                The Embassy reviews and stamps the visa within 7 days upon
                receiving the Invitation letter. Air tickets are then booked.
              </p>
            </li>
          </ul>

          <h2>Why GradAbroad Overses Education LLP?</h2>
          <p>
            Consider GRADABROAD OVERSEAS EDUCATION LLP as your partner for
            overseas admissions. We offer competitive processing charges and
            comprehensive support to ensure a smooth admission process.
          </p>

          <p>In Conclusion:</p>
          <p>
            Embarking on an MBBS education abroad is a big decision, but it's a
            direct path to fulfilling your dream of becoming a doctor, without
            the hurdles of entrance exams and delays in starting your education.
            Feel free to reach out to me for further insights and connections
            with current students, parents, and alumni.
          </p>

          <p>Think of me as your friend on this journey.</p>
          <p>Warm regards,</p>
          <p>Siddharth Negi</p>
          <p>Director, GRADABROAD OVERSEAS EDUCATION LLP</p>
          <p>Mobile: +91-9811464911 , +91-9760390807</p>
          <p>Email; Withgraduationabroad@gmail.com</p>
          <p>GRADABROAD OVERSEAS EDUCATION LLP</p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default DirectorDesk;
