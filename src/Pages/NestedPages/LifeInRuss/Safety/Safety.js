import React, { useContext, useState } from "react";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import style from "./safety.module.scss";
import introOne from "../../../../Assets/students/IntroOne.jpg";
import Steps from "../../../Home/Steps/Steps";

const Safety = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(5);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.safetyContainer}>
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
          <h1>Safety</h1>
          <img src={introOne} alt="The Safety" />
          <h2>Introduction:</h2>
          <p>
            Studying in Russia is an exciting opportunity that comes with its
            own set of experiences and challenges. While Russia is no more
            dangerous than any other developed country, it's important to
            prioritize your safety at all times, even in seemingly peaceful
            surroundings. This guide provides essential safety tips to help you
            navigate public places, online security, leisure activities, road
            safety, and identity checks during your educational journey.
          </p>
          <h2>Public Places and Transport:</h2>
          <p>
            When exploring Russia's vibrant cities and using public transport,
            keep in mind these safety measures to prevent petty crimes.
            <br />
            Stay vigilant while on public transport or in crowded areas; avoid
            getting too engrossed in your electronic devices..
            <br />
            Always keep your personal belongings attended and avoid walking
            around with an open bag or backpack..
            <br />
            Hold your bag in front of you in public spaces and refrain from
            displaying valuable items such as smartphones, tablets, or jewelry..
            <br />
            Minimize carrying large amounts of cash and avoid storing all your
            bank card PINs in one location.
          </p>
          <h2>Cyber and Online Security:</h2>
          <p>
            Practice the same caution online in Russia as you would anywhere
            else.
            <br />
            Safeguard your confidential information, including your bank card
            PIN, and avoid sharing it with anyone.
            <br />
            Prioritize official and trustworthy banks or companies for financial
            transactions, card usage, and currency exchange.
            <br />
            Be cautious when purchasing SIM cards; opt for authorized phone
            shops or stores rather than street stalls.
            <br />
            If withdrawing cash, choose secure locations like bank outlets or
            ATMs, and refrain from exchanging money on the street.
          </p>
          <h2>Fraud Prevention:</h2>
          <p>
            Protect yourself from potential fraudsters and scams.
            <br />
            Avoid accepting offers or services from unfamiliar individuals and
            stay away from suspicious-looking individuals.
            <br />
            Stick to reputable banks and companies for all financial dealings,
            card usage, and currency exchanges.
            <br />
            Exercise caution when attending clubs and parties; keep an eye on
            your belongings and prioritize group safety.
            <br />
            Opt for safe transportation options like public transport or
            established taxi services.
          </p>
          <h2>Road Safety:</h2>
          <p>
            Stay safe while navigating the streets of Russia.
            <br />
            Cross roads only at designated pedestrian crossings after checking
            both directions for traffic.
            <br />
            Choose well-lit streets and well-known paths, especially when
            walking alone at night.
          </p>
          <h2>Identity Checks:</h2>
          <p>
            Carry essential identification documents with you, especially when
            off-campus.
            <br />
            Keep your passport, student ID, and migration card handy, as you may
            be asked to present them by authorities.
            <br />
            Understand that identity checks are part of counter-terrorism
            measures aimed at ensuring your safety.
          </p>
          <h2>Emergency Contacts:</h2>
          <p>
            Be prepared for any situation by keeping these emergency numbers
            accessible:
          </p>
          <div className={style.emergencyDiv}>
            <p>
             
              <strong>General Rescue Service:</strong> <span>112 </span>
              (landline and mobile phone)
              <br />
              <strong>Fire-Fighting Service:</strong> <span>01 </span>
              (landline), <span>101 </span> (mobile)
              <br />
              <strong>Police:</strong> <span>02 </span> (landline),
              <span> 103 </span> (mobile)
              <br />
              <strong>Ambulance:</strong> <span>03 </span> (landline),
              <span>103 </span> (mobile)
              <br />
              <strong>Gas Service:</strong> <span>04 </span> (landline),{" "}
              <span>104 </span> (mobile)
              <br />
            </p>
          </div>

          <h2>Conclusion:</h2>
          <p>
            Studying in Russia offers unique cultural experiences, and by
            following these safety guidelines, you can make the most of your
            educational journey while ensuring your well-being. Prioritize
            personal safety, adopt cautious online practices, and stay informed
            about emergency contacts to enjoy a secure and fulfilling stay in
            Russia.
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default Safety;
