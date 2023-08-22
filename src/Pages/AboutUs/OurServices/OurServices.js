import React from "react";
import ourService from "./ourServices.module.scss";
import service from "../../../Assets/OurServices/our services.jpg";

const OurServices = () => {
  return (
    <>
      <div className={ourService.serviceContainer}>
        <div className={ourService.contentContainer}>
          <img src={service} alt="the service logo" />
          <h1>Services Offered by Graduation Abroad</h1>
          <ul>
            <li>
              <p>
                Consultation regarding the Russian education system, conditions
                of admission to Russian state universities, rules and internal
                regulations of student hostels, life and health insurance,
                application for the issuance of an invitation letter to study in
                Russia
              </p>
            </li>
            <li>
              <p>
                Preliminary evaluation/assessment of educational documents
                (e.g., senior school certificates) for their compliance with the
                requirements of admission to Russian state universities
              </p>
            </li>
            <li>
              <p>
                Assisting with admission to the Russian state university of
                choice according to the chosen specialty and degree
              </p>
            </li>
            <li>
              <p>
                Attestations, translations, required authorizations and all
                other documentation procedures required to be completed by the
                student.
              </p>
            </li>
            <li>
              <p>
                Advice on arranging finances and securing education loans form
                banks.
              </p>
            </li>
            <li>
              <p>
                Arranging the meeting with students at the international
                airports of Moscow and Saint-Petersburg, transferring them to
                domestic flights/railway stations; meeting students at the
                airport/railway station of the city of their studies and taking
                them to the university
              </p>
            </li>
            <li>
              <p>
                Coordination with university authorities in Monitoring students'
                academic progress and behavior
              </p>
            </li>
            <li>
              <p>
                Providing information for obtaining the Certificate of
                Equivalence from the Ministry of Education of the Russian
                Federation, which is obligatory for each student to be admitted
                to any Russian state higher education establishment.
              </p>
            </li>
            <li>
              <p>
                Assisting in transfer to another university or change of
                specialty if the student wishes
              </p>
            </li>
            <li>
              <p>
                Providing information and consultation in obtaining a visa for
                students' parents to visit their children
              </p>
            </li>
            <li>
              <p>
                Any other assistance that may be required by international
                students
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurServices;
