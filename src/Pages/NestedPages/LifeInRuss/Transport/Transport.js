import React, { useContext, useState } from "react";
import { LinkContext } from "../../../../App";
import style from "./transport.module.scss";
import { NavLink } from "react-router-dom";
import lifeThree from "../../../../Assets/LifeInRussia/inTransport.webp";
import Steps from "../../../Home/Steps/Steps";

const Transport = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(4);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={style.divContainer}>
        <div className={style.transportContainer}>
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

          <h1>Transport</h1>
          <img src={lifeThree} alt="The Transport" />

          <p>
            Russia's vast expanse may seem daunting, but fear not – even if it's
            your first time visiting, getting to your desired destination is
            entirely manageable. Just like any journey to unfamiliar places,
            proper planning and familiarity with your route are key.
          </p>

          <h2>Arrival Assistance for Freshers:</h2>
          <p>
            For new students, rest assured that we have you covered. We provide
            transportation services from the airport to your university,
            ensuring a smooth and hassle-free start to your academic journey.
          </p>

          <h2>Exploring Russia's Treasures:</h2>
          <p>
            If you're planning leisure trips as a tourist within the country,
            getting around Russian cities is easier than you might think. Mobile
            maps like OsmAnd, Mobile Yandex maps, and 2GIS work without the need
            for internet access. Make sure to download them before embarking on
            your adventure.
          </p>

          <h2>Airport to City Center:</h2>
          <p>
            Upon arrival, your journey from the airport to the city center
            offers various transportation options. Regular buses, fixed-route or
            private taxis, and suburban trains are commonly used means of
            travel. In major cities, express trains operate directly from
            airport terminals, providing efficient access to the city center.
          </p>

          <h2>Inexpensive and Frequent Options:</h2>
          <p>
            Buses and fixed-route taxis offer both cost-effectiveness and
            convenience, with frequent departures (every 10-15 minutes). Look
            for them at designated bus stops within the airport premises.
            Tickets can be purchased at dedicated kiosks or onboard the bus. For
            instance, you can travel from Moscow airports to the city for as
            little as 55-150 roubles (approximately 1-2 dollars) using these
            options. Prices are even more wallet-friendly in other Russian
            cities.
          </p>

          <h2>Enhanced Travel Experience:</h2>
          <p>
            Consider upgrading your journey with higher-tier options such as the
            Plus Metro rate (combining a train journey with metro access),
            Airport-to-Airport packages (aeroexpress and public road transport
            combination), and other Aeroexpress tariffs, all available from
            Moscow airports.
          </p>

          <h2>High-Speed Comfort:</h2>
          <p>
            High-speed trains are a convenient way to reach the city center.
            Offering speed, comfort, and ample luggage space, these trains run
            frequently (every 30 minutes). Different tariffs can be conveniently
            accessed online, offering flexibility to suit your needs.
          </p>

          <h2>Convenient Ticketing:</h2>
          <p>
            Ticket offices for express trains are easy to locate, thanks to
            well-placed signs at the airport. While purchasing tickets at the
            airport is possible, opting for online booking proves to be a more
            economical choice, saving you valuable resources.
          </p>

          <h2>City Transport:</h2>
          <p>
            Moving around Russian cities is a breeze with a variety of
            transportation options at your disposal. From metros to buses,
            trams, trolleybuses, and private fixed-route taxis, you have a range
            of choices to explore.
          </p>

          <h2>Metro Systems:</h2>
          <p>
            Major cities including Moscow, St. Petersburg, Novosibirsk, Nizhny
            Novgorod, Samara, Kazan, Yekaterinburg, and Volgograd boast
            efficient underground metro systems. The fare varies based on city
            size, with Moscow at 57 roubles*, St. Petersburg at 55 roubles*, and
            Yekaterinburg at just 32 roubles*.
          </p>

          <h2>Public Road Transport:</h2>
          <p>
            Buses, trolleybuses, and trams are economical and accessible modes
            of travel. Moscow charges 57 roubles* for a journey, St. Petersburg
            50 roubles*, Kazan 30 roubles*, and Tomsk 22 roubles*. Students on
            full-time courses at Russian universities enjoy discounted prices
            for public transport tickets.
          </p>

          <h2>Travel Cards and Discounts:</h2>
          <p>
            Opt for travel cards for multiple journeys, as they offer more
            cost-effective rates than single-journey tickets. In Moscow,
            consider the "90-minute" rate, allowing unlimited travel within an
            hour and a half using both the underground and public road
            transport. Similar options exist in other cities.
          </p>

          <h2>Savings and Student Cards:</h2>
          <p>
            Make the most of your student status by acquiring a student travel
            or social card, depending on your city. These cards offer
            substantial discounts, with monthly travel costing five times less
            than a regular ticket. Discounts extend to local trains within a
            federal district, offering a 50% reduction between September 1 and
            June 15.
          </p>

          <h2>Intercity Travel:</h2>
          <p>
            When venturing beyond city limits, you'll find various intercity
            travel options: <br />
            Coach: Long-distance coach services provide an affordable and
            efficient way to explore Russia's diverse landscapes.
            <br />
            Train: Train travel is a popular choice, with discounts available
            for local train journeys within a federal district. Present your
            student card for these benefits.
            <br />
            Boat: Enjoy scenic routes by boat, perfect for exploring cities
            along Russia's waterways.
            <br />
            Plane: Air travel is also an option for covering longer distances
            between cities.
            <br />
          </p>

          <h2>University Services:</h2>
          <p>
            Some Russian universities extend the courtesy of free airport
            transfers for international students. To access this service, reach
            out to university representatives and inquire about the application
            process, which may involve submitting an online form prior to your
            arrival.
          </p>

          <h2>Safety and Planning:</h2>
          <p>
            Remember to prioritize safety by using licensed taxis from official
            information desks or pre-booking online. Avoid unlicensed options to
            ensure a secure journey. Plan ahead for a seamless experience and
            make the most of student discounts to explore the diverse beauty of
            Russia.
            <br />
            *Please note that currency exchange rates may affect the approximate
            dollar equivalents provided above.
          </p>

          <h2>Explore Russia with Confidence:</h2>
          <p>
            As you embark on your journey within Russia, whether within its
            cities or venturing intercity, you'll find an array of
            transportation options that cater to your needs. Embrace the
            convenience, affordability, and savings that come with student
            discounts, ensuring a smooth and rewarding exploration of this vast
            and diverse country.
          </p>

          <h2>Conclusion:</h2>
          <p>
            Russia's vastness need not be a hindrance to your travels. Armed
            with these transportation insights, you'll find that navigating this
            incredible country is both straightforward and rewarding. Whether
            you're embarking on a new academic journey or exploring Russia's
            diverse landscapes, rest assured that getting from point A to point
            B is a seamless endeavor.
          </p>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default Transport;
