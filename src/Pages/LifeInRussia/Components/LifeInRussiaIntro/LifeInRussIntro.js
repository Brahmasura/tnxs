import React, { useContext } from "react";
import lifeInRussIntro from "./lifeInRussIntro.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";

const LifeInRussIntro = () => {
  const { handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={lifeInRussIntro.lifeIntroContainer}>
        <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
          Home
        </NavLink>
        <h1>Life in Russia</h1>
        <p>
          The decision to study abroad is a very serious step. You have to
          plunge into a foreign culture, adapt to new conditions, get used to a
          new climate and gradually learn Russian. But don’t fear the
          difficulties! The Russians are known for their hospitality and
          friendly manners, they will always help you. The most important thing
          is to prepare the required documents. Here you will find all the
          necessary information.
        </p>
      </div>
    </>
  );
};

export default LifeInRussIntro;
