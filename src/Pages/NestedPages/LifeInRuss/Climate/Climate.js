import React, { useContext, useState } from "react";
import style from "./climate.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import footer from "../../../../Assets/Footer/Footer.jpg";

const Climate = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.climateContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={style.slash}> / </p>
            <NavLink to={"/lifeInRussia"} onClick={() => handleLinkClick(3)}>
              Life In Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/prices"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Prices
              </button>
            </NavLink>
            <NavLink to={"/accomodation"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Accomodation
              </button>
            </NavLink>
            <NavLink to={"/climate"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Climate
              </button>
            </NavLink>
            <NavLink to={"/transport"}>
              <button
                className={activeTab === 4 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(4)}
              >
                Transport
              </button>
            </NavLink>
            <NavLink to={"/safety"}>
              <button
                className={activeTab === 5 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(5)}
              >
                Safety
              </button>
            </NavLink>
            <NavLink to={"/healthcare"}>
              <button
                className={activeTab === 6 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(6)}
              >
                Healthcare
              </button>
            </NavLink>
          </div>

          {/* the tab div ends  */}

          <h1>Cilmate</h1>
          <img src={footer} alt="The climate" />

          <p>
            Understanding the climate in Russia is essential for international
            students planning to study in this diverse and culturally rich
            country. While Russia spans a vast territory, its climate varies
            significantly from region to region. This guide provides valuable
            insights into the Russian weather, the changing climate trends, and
            essential tips for staying comfortable throughout the year.
          </p>

          <h2>Diverse Climate Zones:</h2>
          <p>
            Russia's climate is characterized by its diversity, largely
            influenced by its extensive geographical expanse. The country
            encompasses various climate zones, which means that the weather can
            vary greatly depending on the region you find yourself in. Most of
            Russia is located in a moderate climate zone, offering a comfortable
            living environment for its residents.
          </p>

          <h2>Warming Trends and Changing Frosts:</h2>
          <p>
            According to the Russian Weather Service, there is a noticeable
            trend towards warmer temperatures in Russia. The infamous Russian
            frosts, once a common occurrence, have become increasingly rare.
            This change is indicative of the evolving climate patterns in the
            country. As a result, the experience of extreme cold is becoming
            less frequent.
          </p>

          <h2>Central Heating and Winter Comfort:</h2>
          <p>
            Unlike many Western countries, central heating is a standard feature
            in Russian houses and public buildings during the winter season.
            Even public transport is equipped with heaters to ensure a
            comfortable commute during the colder months. Whether you're in your
            dormitory, a classroom, a bus, a cafe, or a museum, you can expect
            to stay comfortably warm indoors.
          </p>

          <h2>Dressing for Success:</h2>
          <p>
            While modern amenities ensure indoor warmth, it's important to be
            well-prepared for outdoor excursions during colder seasons.
            Resisting the cold is not about fearing it, but rather about
            dressing appropriately. In autumn, a light coat or raincoat is
            usually sufficient. However, during the winter months, a warm coat,
            boots, a cap, and gloves are essential to stay cozy and protected
            from the elements.
          </p>

          <h2>Regional Student Populations:</h2>
          <p>
            International students are drawn to various regions across Russia
            for their academic pursuits. Statistics indicate that the largest
            international student populations are concentrated in specific
            Federal Districts:
            <br />
            <ul>
              <li>
                <p>Central Federal District - 43.6%</p>
              </li>
              <li>
                <p>North-Western Federal District - 17%</p>
              </li>
              <li>
                <p>Siberian Federal District - 14.4%</p>
              </li>
              <li>
                <p>Volga Federal District - 10.5%</p>
              </li>
              <li>
                <p>Southern Federal District - 8.4%</p>
              </li>
            </ul>
          </p>

          <h2>Conclusion:</h2>
          <p>
            As an international student considering studying in Russia, being
            informed about the country's diverse climate zones and changing
            weather patterns is crucial. While the overall climate is becoming
            milder and more comfortable, it's still important to be prepared for
            varying conditions, especially during the colder seasons. With the
            right clothing and an understanding of regional weather trends, you
            can make the most of your educational experience in Russia while
            staying warm and comfortable throughout the year.
          </p>
        </div>
      </div>
    </>
  );
};

export default Climate;
