import React, { useContext, useState } from "react";
import style from "./guidelines.module.scss";
import { LinkContext } from "../../../../../App";
import { NavLink } from "react-router-dom";
import guidelinePic from "../../../../../Assets/UsefulInfo/guidelines.jpg";

const Guidelines = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.guideContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/guidelines"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Guidelines to Apply
              </button>
            </NavLink>

            <NavLink to={"/documents"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Documents required
              </button>
            </NavLink>

            <NavLink to={"/expenses"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Extra Expenses
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}
          <h1>Guidelines For Applying To an Italian University</h1>
          <img src={guidelinePic} alt="the guideline" />

          {/* the content begins  */}

          <h2>
            This document is formatted in order to provide you with the guidance
            for further procedure regarding Scholarship and Visa.
          </h2>
          <ul>
            <li>
              <p> Processes after getting Admission Offer Letter.</p>
            </li>
            <li>
              <p> Documentation for Scholarship.</p>
            </li>
            <li>
              <p>Scholarship process.</p>
            </li>
            <li>
              <p>Documentation for Visa application.</p>
            </li>
            <li>
              <p>Visa Filing. </p>
            </li>
            <li>
              <p>University online Classes.</p>
            </li>
            <li>
              <p> Pre-departure.</p>
            </li>
            <li>
              <p>Post-Arrival.</p>
            </li>
          </ul>

          <h2>1.Admission</h2>

          <p>
            <strong>
              On Degree/Diploma Certificate/12th Marksheet/10th
              Marksheet/Transcript. We need to proceed with some required
              procedures with the final degree/mark sheet/certificate on the
              basis of which the student has applied for the higher studies.{" "}
            </strong>
          </p>

          <ul>
            <li>
              <p>HRD</p>
            </li>
            <li>
              <p>APOSTILLE</p>
            </li>
            <li>
              <p>TRANSLATION</p>
            </li>
            <li>
              <p>LEGALIZATION & DOV or CIMEA</p>
            </li>
          </ul>

          <h2>1.1 HRD</h2>
          <p>
            In order to proceed further with the HRD, Student needs to go to
            Higher Education Department of the state where the degree/mark sheet
            belongs to. They need to get a stamp and sign from the authorities
            that state the Degree/Mark sheet is original and validated by the
            university/Board. The process is done by the student itself as every
            student is having degree/mark sheet from different state’s
            universities and boards.
          </p>

          <p>
            <strong>For Master's</strong>
          </p>
          <p>
            HRD needs to be done on Final Degree Certificate, 12th Mark sheet
            and Transcript.{" "}
          </p>

          <p>
            <strong>For Bachelor’s or MBBS or Foundation Program</strong>
          </p>
          <p>
            HRD needs to be done on 12th Mark sheet, Diploma Certificate and
            10th Mark sheet.{" "}
          </p>

          <p>
            <strong>List of Required Documents for HRD (Master’s)-</strong>
          </p>
          <ul>
            <li>
              <p>opy of Passport and Original Passport. </p>
            </li>
            <li>
              <p>Copy of Degree Certificate and Original Degree Certificate.</p>
            </li>
            <li>
              <p>Copy of Transcript and Original Transcript. </p>
            </li>
            <li>
              <p>Copy of Mark sheets from 1st Semester to End Semester. </p>
            </li>
            <li>
              <p>Copy of 12th Mark sheet and Original 12th Mark sheet. </p>
            </li>
            <li>
              <p>Copy of 10th Mark sheet.</p>
            </li>
            <li>
              <p>Copy of Aadhaar Card/Pan Card.</p>
            </li>
            <li>
              <p>Copy of Admission Offer Letter.</p>
            </li>
            <li>
              <p> HRD attestation form (You can get it from the HRD office).</p>
            </li>
            <li>
              <p>Passport size photograph.</p>
            </li>
          </ul>

          <p className={style.redPara}>
            Note: - If in case student do not have transcript and there’s no
            chance to get it then student can get the HRD on the mark sheet of
            last semester. But keep the transcript on priority.{" "}
          </p>

          <p>
            <strong>
              List of Required Documents for HRD (Bachelor’s/MBBS/Foundation)-
            </strong>
          </p>

          <ul>
            <li>
              <p>Copy of Passport and Original Passport. </p>
            </li>
            <li>
              <p>
                Copy of 12th Mark sheet or Diploma Certificate and Original 12th
                Mark sheet or Diploma Certificate.
              </p>
            </li>
            <li>
              <p>Copy of 10th Mark sheet and Original 10th Mark sheet. </p>
            </li>
            <li>
              <p> Copy of Aadhaar Card/Pan Card.</p>
            </li>
            <li>
              <p>Copy of Admission Offer Letter. </p>
            </li>
            <li>
              <p>HRD attestation form (You can get it from the HRD office).</p>
            </li>
            <li>
              <p> Passport size </p>
            </li>
          </ul>

          <p className={style.redPara}>
            Note: - If in case the student is not able to get the HRD then we
            can proceed with the help of agent as well. The agent will cost Rs.
            7,500/- per document.
          </p>

          <h2>1.2 APOSTILLE</h2>
          <p>
            In order to proceed further with the Apostille process, you need to
            send us the original Documents at our office.
          </p>

          <p>
            We will proceed with the Apostille accordingly. The process can take
            up to 1-2 weeks including courier time. The apostille charges will
            be paid from our side for the below mentioned documents only (OR As
            per the MOU)-
          </p>

          <ul>
            <li>
              <p>
                <strong> For Master’s_Final Degree Certificate.</strong>
              </p>
              <p>Transcript (Need to be paid by student)</p>
            </li>
            <li>
              <p>
                <strong>
                  {" "}
                  For Bachelor’s_12th Mark sheet or Diploma Certificate.
                </strong>
              </p>
              <p>10th Mark sheet – If required (Need to be paid by student) </p>
            </li>
          </ul>

          <p className={style.redPara}>
            Note: - Once apostille is done, we will provide you with the soft
            copies.
          </p>

          <h2>1.3 TRANSLATION</h2>
          <p>
            After completing the Apostille, we need to proceed with the
            Translation process. The process can take up to 1-2 weeks including
            courier time. The translation charges will be paid from our side for
            the below mentioned documents only
          </p>
          <p>(OR as per the MOU)-</p>

          <ul>
            <li>
              <p>
                <strong>For Master’s_Final Degree Certificate.</strong>
              </p>
              <p>Transcript (Need to be paid by student)</p>
            </li>
            <li>
              <p>
                <strong>
                  For Bachelor’s_12th Marksheet or Diploma Certificate.{" "}
                </strong>
              </p>
              <p>10th Mark sheet – If required (Need to be paid by student) </p>
            </li>
          </ul>

          <p className={style.redPara}>
            Note: - Once Translation is done, we will provide you with the soft
            copies.
          </p>

          <h2>1.4 Legalization and DOV or CIMEA</h2>
          <p>
            {" "}
            After completing the Apostille and Translation process, we need to
            proceed with the Legalization and DOV on the final degree
            certificate/12th mark sheet. Declaration of Value is an important
            document one need to have if going for Italian Public Universities.{" "}
          </p>

          <ul>
            <li>
              <p>
                {" "}
                The procedure of the DOV will be preceded as per the
                requirements only. Students have the right to decide when to
                carry out the process but we need to keep in mind regarding the
                deadlines and proceed as per the requirement of the University
                and Scholarship Authorities.
              </p>
            </li>
            <li>
              <p>
                {" "}
                DOV procedure will be done as per the given updated instructions
                by the Italian Embassy. We will inform you for this
                individually.{" "}
              </p>
            </li>
            <li>
              <p>
                CIMEA is a Statement of Verification referring to the
                qualification which has been verified done by the Italian
                Government itself. It cost around 200 Euro (30Working Days) and
                300 Euro (15 Working Days).
              </p>
            </li>
          </ul>

          <h2>2. Documentation for Scholarship Process </h2>
          <p>
            The call for Scholarship process generally publishes in the month of
            June-July but we need to prepare the documents by the end of May
            only. Each university is having same format for the scholarship
            documents. We will send you the word format of below mentioned
            scholarship documents
          </p>

          <ul>
            <li>
              <p>Family Income and Composition Certificate.</p>
            </li>
            <li>
              <p>No Property Certificate.</p>
            </li>
            <li>
              <p>Bank Balance Certificate (One Day only). </p>
              <ul>
                <li>
                  <p>
                    After that you need to get a seal and sign of your area’s
                    higher authority (As per the address mentioned on student’s
                    passport) such as- MLA/ Parshad/ Tehsildar/Nagar Nigam etc.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    For bank balance certificate you need to get a one-day
                    balance certificate of your Father’s or Mother’s account.
                    (Date- 31st December 2021 and 31st December 2022)
                  </p>
                </li>
                <li>
                  <p>
                    In order to proceed further with the Apostille process, you
                    need to send us the original Documents to us.
                  </p>
                </li>
                <li>
                  <p>
                    Similarly, we will proceed with the translation. For both
                    Apostille and Translation, it can take up to 3-4 weeks.
                  </p>
                </li>
                <li>
                  <p>
                    The amount for Apostille and Translation for below mentioned
                    scholarship documents will be paid from our side (OR As per
                    the MOU)
                  </p>
                  <ul>
                    <li>
                      <p>Family Income and Composition Certificate. </p>
                    </li>
                    <li>
                      <p> No Property Certificate. </p>
                    </li>
                    <li>
                      <p>Bank Balance Certificate.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    {" "}
                    The amount for Legalization and process on any additional
                    document required by the scholarship authority will be paid
                    from your side.{" "}
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          <h2>3. Scholarship Process</h2>
          <ul>
            <li>
              <p>
                Scholarship process is the most important part of the complete
                Italy process.
              </p>
            </li>
            <li>
              <p>
                {" "}
                Every particular university is having its own scholarship
                authority and format (Requirements, Opening Date, and Closing
                Date etc.).{" "}
              </p>
            </li>
            <li>
              <p>
                Generally, the call publishes in the month of June-July and the
                online applications stars by the End of June or Mid July.{" "}
              </p>
            </li>
            <li>
              <p>
                Once the calls will publish, we will update you again with the
                particular scholarship format as per the final university
                selected.{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                Before starting the scholarship process, we need to finalize one
                university among those from where we have got offer letters.{" "}
              </p>
            </li>
            <li>
              <p>
                We will start the online applications for scholarship
                accordingly and send you the submission receipt
              </p>
            </li>
            <li>
              <p>
                Along with the submission receipt or mail, we will also provide
                you with the publication dates of Provisional and Final Ranking
                respectively.
              </p>
            </li>
            <li>
              <p>
                {" "}
                Some of the scholarship authorities may ask for the hard copies
                also. Which we need to send by post at their respective address
                in Italy. Courier charges will be paid as per the MOU.
              </p>
            </li>
            <li>
              <p>
                We will proceed with the Apostille and Translation in the
                beginning itself but legalization process depends upon the
                deadlines and as per the requirements only.{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                If as per the call the deadline to submit legalized documents
                after September so we will wait for the visa but if the deadline
                is before September, then we need to proceed with the
                legalization along with the Apostille and Translation.{" "}
              </p>
            </li>
            <li>
              <p> For legalization students have two options</p>
              <ul>
                <li>
                  <p>
                    <strong>
                      To submit the documents directly to the respective
                      Embassy.
                    </strong>
                  </p>
                  <p>
                    This process needs to be done directly by the student.
                    Student need to submit the documents at the respective
                    Embassy under our guidance. The amount will be paid from
                    student’s side. This process may take up to 1-2 Months
                    (Depends upon the Embassy).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To proceed with the agent.</strong>
                  </p>
                  <p>
                    Here, student can proceed with the help of agent as well. We
                    just need to send the hard copies to the agent and he will
                    proceed with the legalization. This process may take 1-2
                    weeks. Agent will charge around Rs.2500/- per document.{" "}
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          <h2>4.Documentation for Visa Application </h2>
          <ul>
            <li>
              <p>Original Passport </p>
            </li>
            <li>
              <p>University offer Letter/Invitation Mail </p>
            </li>
            <li>
              <p>Pre-Enrolment Summary (English and Italian)</p>
            </li>
            <li>
              <p>12th Marksheet/ Final Degree with Italian Translation</p>
            </li>
            <li>
              <p> Bank Statement with Seal Stamp</p>
              <ul>
                <li>
                  <p>
                    <em>For Bachelor-16,00,000/-</em>
                  </p>
                </li>
                <li>
                  <p>
                    <em>For Master- 12,00,000/-</em>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p> Last 3-year ITR (Income tax Return)</p>
              <ul>
                <li>
                  <p>
                    <em>
                      Backup option- Last 3year Form 16/ Last 3year TDS Form/
                      Farmer Certificate{" "}
                    </em>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>Travel Insurance (1 Year)</p>
            </li>
            <li>
              <p>Accommodation (Dummy 31 Days)</p>
            </li>
            <li>
              <p> Travel Ticket (Dummy with PNR)</p>
            </li>
            <li>
              <p>
                Sponsor Employability Certificate with 3-month Salary Sleep /
                Business Proof Certificate of Incorporation/ Self Declaration
              </p>
            </li>
            <li>
              <p>Appointment Letter </p>
            </li>
            <li>
              <p> Visa Application Form </p>
            </li>
            <li>
              <p>
                {" "}
                Property Evaluation CA Certificate and Gold
                Certificate(optional)
              </p>
            </li>
            <li>
              <p>Fixed Deposit(optional)</p>
            </li>
            <li>
              <p>
                5 Passport Size Photos (3.5cm x 4.5cm) face takes up 70–80% of
                the photograph
              </p>
            </li>
            <li>
              <p>Sponsorship Letter on 100rs Stamp Paper </p>
            </li>
            <li>
              <p>Cover Letter</p>
            </li>
            <li>
              <p>DOV Cover Letter</p>
            </li>
            <li>
              <p>Photocopy every Documents 2-2</p>
            </li>
            <li>
              <p>Travel Declaration form</p>
            </li>
            <li>
              <p>Waiver form</p>
            </li>
            <li>
              <p>University Final Enrolment Fee Payment Receipt if Paid</p>
            </li>
            <li>
              <p> Embassy/ Consulate Visa Application Check List </p>
            </li>
            <li>
              <p>Work Experience</p>
            </li>
            <li>
              <p>Resume</p>
            </li>
            <li>
              <p>IELTS Score Card(optional)</p>
            </li>
            <li>
              <p>Any International Language Certificate</p>
            </li>
            <li>
              <p>DOV/ CIMEA</p>
            </li>
          </ul>

          <p className={style.redPara}>
            *The Above-mentioned document list is as per September Intake 2022.
            We will send you updated checklist individually at the time of
            preparation of documents.
          </p>

          <h2>5. Visa Process</h2>
          <p>
            Note: - For Visa Process regarding Documentation, Appointment and
            Application, please contact the below mentioned team member:-
          </p>
          <p>Mr. Sandeep Sir: - +91-9644808964</p>

          <h2>6. University Online Classes</h2>

          <ul>
            <li>
              <p>Classes in Italy mainly starts after September 20th.</p>
            </li>
            <li>
              <p>
                If the student gets the visa before that, he/she can fly to
                Italy and take their classes directly.
              </p>
            </li>
            <li>
              <p>
                But if the Visa gets delay, then in some of the universities we
                do have an option of taking classes online.{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                Universities will update us via mail regarding the same. They
                will also guide us with the instructions to take the online
                classes.{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                In some of the universities it is mandatory to proceed with the
                Enrolment in order to take the online classes. And Enrolment can
                be done only after getting Visa.{" "}
              </p>
            </li>
          </ul>

          <h2>7. Pre-Departure</h2>
          <ul>
            <li>
              <p>
                {" "}
                After getting Visa, we will guide you with the pre-departure
                procedure.{" "}
              </p>
            </li>
            <li>
              <p>
                We will provide you with a complete pdf including instructions
                and list of stuff you should take along.
              </p>
            </li>
          </ul>

          <h2>8. Post-Arrival</h2>
          <ul>
            <li>
              <p>
                We at Gradabroad Overseas Education LLP are also providing with
                the post visa services to the students.{" "}
              </p>
            </li>
            <li>
              <p>
                After reaching Italy student needs to apply for certain
                documentation and proceed with some verification as well.{" "}
              </p>
            </li>
            <li>
              <p>
                We will guide you applying and proceeding with below mentioned
                processes
              </p>

              <ul>
                <li>
                  <p>Guidance forthe Accommodation.</p>
                </li>
                <li>
                  <p>Guidance to apply for Residence Permit Card. </p>
                </li>
                <li>
                  <p>Guidance to apply for Tax Code (Codice Fiscale).</p>
                </li>
                <li>
                  <p>
                    Guidance to complete Enrollment at University. (This may
                    need to be done before visa also, depends on the format of
                    university)
                  </p>
                </li>
                <li>
                  <p>Guidance to Open a Bank Account. </p>
                </li>
                <li>
                  <p>Guidance to apply for ISEE certificate.</p>
                </li>
                <li>
                  <p>
                    Guidance in Submission of the Scholarship Documents. Etc.
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          <p className={style.redPara}>
            NOTE – Although, everything has been described in this document
            still kindly consult with the team before taking any actions.{" "}
          </p>

          <p>
            Hopefully, this pdf can help you understand the further steps
            clearly. For any further queries please do not hesitate to contact.{" "}
          </p>

          <p>Regards</p>

          <p>Team Gradabroad</p>

          {/* the content ends */}
        </div>
      </div>
    </>
  );
};

export default Guidelines;
