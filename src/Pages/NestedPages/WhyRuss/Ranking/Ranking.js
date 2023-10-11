import React from "react";
import ranking from "./ranking.module.scss";
import { NavLink } from "react-router-dom";
import rankPic from "../../../../Assets/Nested/Russian UNiversities in World Ranking.jpg";
import { useContext } from "react";
import { LinkContext } from "../../../../App";
import Steps from "../../../Home/Steps/Steps";
import { useState } from "react";

const Ranking = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(4);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={ranking.divContainer}>
        <div className={ranking.rankContainer}>
          <div className={ranking.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={ranking.slash}> / </p>
            <NavLink to={"/whyRussia"} onClick={() => handleLinkClick(1)}>
              Why Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={ranking.tabsDiv}>
            <NavLink to={"/advantages"}>
              <button
                className={activeTab === 1 ? ranking.activeTabs : ranking.tabs}
                onClick={() => handleTabClick(1)}
              >
                Advantage
              </button>
            </NavLink>
            <NavLink to={"/advantages"}>
              <button
                className={activeTab === 2 ? ranking.activeTabs : ranking.tabs}
                onClick={() => handleTabClick(2)}
              >
                Opportunity
              </button>
            </NavLink>
            
            <NavLink to={"/whyRussTesti"}>
              <button
                className={activeTab === 3 ? ranking.activeTabs : ranking.tabs}
                onClick={() => handleTabClick(3)}
              >
                Testimonials
              </button>
            </NavLink>
            <NavLink to={"/ranking"}>
              <button
                className={activeTab === 4 ? ranking.activeTabs : ranking.tabs}
                onClick={() => handleTabClick(4)}
              >
                Ranking
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}

          <h1>Russian Universities in World University Ranking</h1>
          <img src={rankPic} alt="the ranking" />

          <h2>ARWU (Academic Ranking of World Universities)</h2>
          <p>
            It is compiled by the Institute of Higher Education of Shanghai Jiao
            Tong University since 2003. The main emphasis in the preparation of
            the rating is on the research activities of universities and the
            role of subjective assessments (various surveys) is reduced to zero.
            The most important indicators according to which the university is
            assigned a particular position include the number of Nobel Prize,
            Fields Medal winners among the staff and graduates, the number of
            frequently cited researchers, as well as publications in scientific
            journals (Nature, Science). The rating includes the total of 500
            universities.
          </p>

          <h2>QS World University Rankings</h2>
          <p>
            It is compiled by the British marketing company Quacquarelli Symonds
            (QS) based on 6 indicators with different weights: academic
            reputation, reputation among employers, the ratio of faculty members
            and students, the percentage of foreign students, the percentage of
            foreign employees, the percentage of citations per teacher. Academic
            reputation of the university has the largest weight among all
            indicators (40%), it is calculated based on a survey in the
            scientific community. For the 2015/16 rating, about 76,800 responses
            were received. Reputation among employers is also calculated by
            surveying. 800 universities are represented in the ranking.
          </p>

          <h2>THE (THE World University Rankings)</h2>
          <p>
            It is compiled by a team of analysts of the specialized British
            weekly publication Times Higher Education (THE). Assessment of
            universities is based on the analysis of their activities, as well
            as the annual global survey of experts, participated by about 10,000
            members of the academic community. The rankings take into account 13
            indicators, each of them has its own weight. Indicators are combined
            into 5 groups: teaching, research, citations, income from operations
            and internationalization (the proportion of foreign professors and
            students, the percentage of joint publications with international
            co-authors). Number of positions in the ranking – 800.
          </p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default Ranking;
