import React, { useContext } from "react";
import style from "./russIntro.module.scss";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../../App";

const RussIntro = () => {
    const {handleLinkClick} = useContext(LinkContext);
  return (
    <>
      <div className={style.russIntroContainer}>
        <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>
        <h1>Why Russia</h1>
        <p>
          Russia is a highly educated country with over half of its residents
          holding a university degree. Russians have rich, centuries-old
          educational traditions. Russian universities provide their students
          with comfortable studying and living conditions and help them adapt to
          the country. Russian universities train a wide variety of specialists,
          both in engineering and the humanities, and regularly place in the top
          of international rankings. Education in Russia is much more affordable
          than in the USA or UK. Moreover, international students have the
          opportunity to study for free at the expense of the Government budget.
          Each year Russia accepts students from all over the world, from nearly
          170 countries, and you can join them.
        </p>
      </div>
    </>
  );
};

export default RussIntro;
