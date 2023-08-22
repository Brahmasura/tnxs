import React, { useContext } from "react";
import studyInRussIntro from "./studyInRussIntro.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";

const StudyInRussIntro = () => {
  const { handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={studyInRussIntro.studyIntroContainer}>
        <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
          Home
        </NavLink>
        <h1>Study in Russia</h1>
        <p>
          Studying in Russia is both prestigious and advantageous. You can be
          sure that you will acquire all the knowledge you need in your chosen
          subject. Russia has a lot of universities, so you have a widechoice.
          All you need to do is to choose a programme you like, prepare the
          documents required, come to Russia, and start studying. You can either
          study on a commercial basis or for free with the support of the
          Russian Government, which allocates a certain number of state-funded
          places for foreign students at universities every year. Read our
          detailed instructions about what you need to do to enrol in a Russian
          university. There are a number of different forms of funding, grants,
          and scholarships, so every student can choose the most suitable
          option.
        </p>
      </div>
    </>
  );
};

export default StudyInRussIntro;
