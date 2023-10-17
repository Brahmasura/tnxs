import React, { useContext } from "react";
import style from "./faqInfo.module.scss";
import faqPic from "../../../Assets/FaqInfo/FaqInfoPic.jpg";
import { LinkContext } from "../../../App";
import { NavLink } from "react-router-dom";
import Steps from "../../Home/Steps/Steps";

const FaqInfo = () => {
  const { handleLinkClick } = useContext(LinkContext);

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.faqInfoDiv}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          <h1>Frequently Asked Question</h1>
          <img src={faqPic} alt="faqInfoPic" />

          <ul>
            <li>
              <h2>What is Graduation Abroad?</h2>

              <p>
                Graduation Abroad serves as a recognized international
                educational consultancy dedicated to assisting students
                interested in pursuing affordable medical or engineering
                programs at Russian universities.
              </p>
            </li>

            <li>
              <h2>
                What is the minimum eligibility to get admission in any of the
                colleges of Russia?
              </h2>

              <p>
                Eligible NEET score card as per the current year. Passed
                intermediate with minimum 50% marks in Physics, Chemistry and
                biology taken together.
              </p>
            </li>

            <li>
              <h2>
                When does the academic year starts in universities of Russia?
              </h2>

              <p>
                The academic year in nearly all the universities of Russia
                happen to begin in the month of September.
              </p>
            </li>

            <li>
              <h2>Are Russian degrees recognized and valued worldwide?</h2>

              <p>Yes, they are recognized and valued worldwide.</p>
            </li>

            <li>
              <h2>
                Can I apply for the work permit in Russia after completion of my
                program?
              </h2>

              <p>
                Yes, Universities itself offer job placements in Russia and
                various other western countries.
              </p>
            </li>

            <li>
              <h2>
                Is there a compulsion of entrance test for admission in Russian
                universities?
              </h2>

              <p>
                There is no need for entrance examinations such as TOEFL or
                IELTS to secure admission to Russian universities. Admission is
                primarily based on 12th-grade marks and the requisite NEET score
                for medical undergraduate programs and postgraduate courses in
                Russian universities.
              </p>
            </li>

            <li>
              <h2>Courses are taught in which language ?</h2>

              <p>
                The majority of medical programs are conducted in the English
                language at Russian universities. Additionally, Russian
                universities offer preparatory courses for individuals whose
                native language is not Russian, aimed at helping them grasp the
                language effectively.
              </p>
            </li>

            <li>
              <h2>
                Can education loan be availed for the courses in Russian
                universities and how ?
              </h2>

              <p>
                Graduation Abroad assists the students to pull together all the
                required documents to avail an education loan and the process
                involved in sanctioning of the loan.{" "}
              </p>
            </li>

            <li>
              <h2>What is the duration of the courses ?</h2>

              <p>
                <strong>Medical courses:-</strong>
              </p>
              <p>
                MBBS - 6 years <br />
                BDS and pharmacy course - 5 years
              </p>

              <p>
                <strong>Engineering courses:-</strong>
              </p>
              <p>
                Bachelor degree course - 4 years <br />
                Masters degree course - 2 years <br />
                (time duration of these courses are exclusive of the extra 10
                month preparatory courses for those who incline to study their
                course in Russian language. )
              </p>
            </li>

            <li>
              <h2>
                Is it likely that I will encounter hazing or ragging at the
                college?
              </h2>

              <p>
                Ragging and hazing are unequivocally forbidden and illegal
                within all colleges of Russian universities. Nevertheless,
                should any student be found engaged in such actions, immediate
                expulsion from the college will be the consequence.
              </p>
            </li>

            <li>
              <h2>
                Are there dining establishments that offer cuisine from my home
                country?
              </h2>

              <p>
                There are numerous dining options available to students.
                Locating a Tiffin service in Russia that offers food tailored to
                your preferences is not a difficult task. Additionally, you can
                explore a variety of budget-friendly Russian eateries in the
                vicinity of the campus, known for their delicious and inventive
                cuisine.
              </p>
            </li>

            <li>
              <h2>Can I work in Russia whilst studying there ?</h2>

              <p>
                No, students are abstained from working while studying in
                Russia, because they were granted a student visa and not a work
                visa. However, any individual can apply for work visa in Russia
                after the completion of the course.
              </p>
            </li>

            <li>
              <h2>What is the standard monthly expense in Russia ?</h2>

              <p>
                The typical monthly expenses for international students in
                Russia average around 6000 INR to 9000 INR per month, allowing
                for a comfortable standard of living.
              </p>
            </li>

            <li>
              <h2>What languages are commonly spoken in Russia?</h2>

              <p>
                The official language of Russia is Russia. However, languages
                like English, French, German, Polish and Hungarian are also
                natively spoken.
              </p>
            </li>

            <li>
              <h2>
                Russia is known to have a pretty cold weather. Do colleges
                provide with facilities and resources to support the living in
                such severely cold weather ?
              </h2>

              <p>
                To ensure maximum comfort, all buildings, hostels, and
                classrooms are equipped with central heating systems. Students
                have access to centrally heated hostels and 24/7 running hot and
                cold water. Additionally, transportation in Russia is equipped
                with heating systems to keep passengers comfortable during
                colder weather.
              </p>
            </li>

            <li>
              <h2>What is the currency of Russia ?</h2>

              <p>
                The currency used in Russia is Ruble and the coins are known as
                Kopiyka. 1 INR is equivalent to 1.10 Ruble (approximately), as
                per September 2023.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default FaqInfo;
