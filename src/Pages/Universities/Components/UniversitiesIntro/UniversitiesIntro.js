import React, { useContext } from "react";
import style from "./Universities.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";

const UniversitiesIntro = () => {
  const { handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={style.uniIntroContainer}>
        <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
          Home
        </NavLink>
        <h1>Universities in Russia</h1>
        <p>
          Russia has a great number of universities throughout the country –
          from Kaliningrad to Vladivostok. Some educational centres offer a full
          range of programmes in various specialities, others are highly
          specialized, for example, medical or technical universities. On the
          map, you can find Russian universities participating in the 5-100
          Excellence Project. Each university page will provide you with
          information about their current educational programmes. A convenient
          search filter will help you choose the most suitable programme by
          subject and specialization. You can also use it to see which
          programmes relate to each level of education – bachelor's, specialist,
          master's and postgraduate studies. Check out the news, photos and
          stories of international students and register a personal account. You
          can submit an unlimited number of applications – quickly, free of
          charge and directly to the university.
          </p>
        
      </div>
    </>
  );
};

export default UniversitiesIntro;
