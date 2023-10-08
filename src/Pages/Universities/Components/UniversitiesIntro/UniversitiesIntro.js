import React, { useContext } from "react";
import style from "./Universities.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";

const UniversitiesIntro = () => {
  const { handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={style.uniIntroContainer}>
        <div className={style.linkDiv}>
          <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
            Home
          </NavLink>
        
        </div>

        
        <h1>Universities in Russia</h1>
        <p>
          Russian universities have long been a hidden gem on the global
          academic landscape, and it's time to shine a spotlight on them. These
          institutions offer a world-class education, vibrant cultural
          experiences, and a welcoming environment for international
          students.With a rich history and a commitment to excellence, Russian
          universities consistently rank among the top in various international
          university rankings. Whether you're pursuing medicine, engineering,
          humanities, or any other field, you'll find a diverse range of
          programs taught by renowned professors. Beyond academics, Russia's
          universities provide a unique opportunity for personal growth. Explore
          the country's rich cultural heritage, learn a new language, and build
          lifelong friendships with students from around the world. If you're
          curious about the endless possibilities that Russian universities
          offer, delve deeper into our articles to uncover the remarkable
          experiences and educational opportunities waiting for you. Your
          academic journey starts here!
        </p>
      </div>
    </>
  );
};

export default UniversitiesIntro;
