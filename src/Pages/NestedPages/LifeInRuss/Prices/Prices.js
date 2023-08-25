import React, { useContext, useState } from "react";
import { LinkContext } from "../../../../App";
import style from "./prices.module.scss";
import { NavLink } from "react-router-dom";
import lifeTwo from "../../../../Assets/LifeInRussia/lifeTwo.jpg";
import infoThree from "../../../../Assets/Information/infoThree.jpg";
import studyThree from "../../../../Assets/StudyInRussia/studyThree.jpg";

const Prices = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.priceContainer}>
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
          <h1>PRICES IN RUSSIA</h1>
          <img src={lifeTwo} alt="the advantages" />

          <p className={style.paraBold}>
            A student in Russia needs USD 300 to 400 per month on average or USD
            3,000 to 4,000 per academic year (September to June).
          </p>
          <p>
            It's better to start with a further USD 300 to 400 for extra
            expenses like medical insurance, living arrangements in an apartment
            or dormitory (buying dishes, bed linen, detergents etc.), and to
            purchase books. <br />
            The rouble’s decline against the world currencies merely plays into
            the hands of foreigners since their expenses are reduced when
            converted into dollars: it would be cheaper to pay for education and
            living in the country. <br />
            When you select a city for education, please keep in mind that the
            highest prices are in Moscow and Saint-Petersburg, while expenses in
            other regions will be lower.
            <br />
          </p>

          <h2>Basic Expenses</h2>
          <p className={style.paraLight}>Education</p>
          <p>
            The tuition fee at Russian universities varies from RUB 122 500 to
            880,000 (USD 1,750-12,570) per year depending on the region,
            university, and discipline.
          </p>
          <div className={style.greyDiv}>
            <p>
              The students who are admitted to state-funded places on a
              competitive basis or who are awarded a government scholarship
              (quotas) study free-of-charge. Those students receive an allowance
              (the average monthly allowance in 2020 is RUB 1,484/USD 22, for
              postgraduate students it is RUB 2,921/USD 42).
            </p>
          </div>
          <img src={infoThree} alt="the price Two" />
          <p className={style.paraLight}>Education</p>
          <p>
            The price of rented student accommodation in Russia varies from 500
            to 35,000 roubles (USD 7-500) per month depending on the region,
            type and location of the lodging (dormitory, rented room, or
            apartment). <br />
            For more details see the "Accommodation" section.
          </p>
          <p className={style.paraLight}>Medical Insurance</p>
          <div className={style.greyDiv}>
            <p>
              A voluntary medical insurance policy (VMI) for students at Moscow
              universities costs from 4,000 to 12,000 roubles (USD 57-170) a
              year. The insurance shall cover the entire education period,
              though universities request that policies are paid by the year or
              the semester.
            </p>
          </div>
          <p>See more details in the "Healthcare" section.</p>

          <p className={style.paraLight}>Meal Expenses</p>
          <p>
            According to official information, the minimum shopping basket
            (including bread, pasta, meat, fish, vegetables, fruit, milk, and
            sugar) in Russia costs 4209 roubles (USD 60) a month. Much depends
            on the region where people live and what and where they buy (corner
            shop, supermarket, market).
            <br />
            An average lunch check in Moscow cafes and restaurants ranges from
            800 to 2,000 roubles (USD 11-28), while a set lunch costs between
            270 and 420 roubles (USD 4-6). Fast-food prices are even lower.
          </p>
          <p className={style.paraLight}>Transport</p>
          <p>
            A single journey on the Moscow subway costs 57 roubles (about USD
            1), while a 60-journey travel card costs 1970 roubles (USD 28).
            <br />
            Using a student discount one can get a monthly Moscow underground
            card for 405 roubles (USD 6), the cost is even lower in other
            cities.
            <br />
            See more details in the "Transport" section.
          </p>
          <p className={style.paraLight}>Cellular Communication, Internet</p>
          <p>
            SIM-cards for mobile phones and tablets are sold in phone stores (do
            not buy them from street sellers). You need a national passport
            (indicating registration at your place of residence) and a migration
            card to buy a SIM-card. Ask in store for advice on the best rates
            (cost of calls, sms-text, data, etc.). The cost of a standard
            package of services ranges from 300 to 400 roubles (USD 4-6). When
            you buy a SIM-card, the cost of the card is credited to the phone
            number account and then you top up the balance depending on the
            tariff plan.
          </p>
          <img src={studyThree} alt="the price three" />
          <div className={style.greyDiv}>
            <p>
              Dormitories offer payable or free Internet access. When you rent
              an apartment, you are usually asked to pay for Internet
              separately, about 300 to 500 roubles (USD 4-7) per month,
              depending on the region, provider and rate.
            </p>
          </div>

          <p className={style.paraLight}>Clothing</p>
          <p>
            Moscow theatre tickets cost from 800 to 2,500 roubles (USD 11-36)
            and cinema tickets, 400 to 1000 roubles (USD 6-14). A museum costs
            200 to 1,000 roubles (USD 3-14).
          </p>

          <div className={style.greyDiv}>
            <p>
              Many cultural centres offer discounts for students, and some
              museums can be visited free with a valid student card.
            </p>
          </div>

          <p className={style.paraLight}>Sport</p>
          <p>
            The average cost of a monthly pass to fitness centres varies from
            1,700 to 4,500 roubles (USD 24-64) in Moscow and from 1,000 to 3,000
            roubles (USD 14-43) in other regions. When you buy an annual pass,
            the average monthly cost will be lower.
            <br />A monthly swimming pool pass costs 300 to 500 roubles (USD
            4-7) in Moscow and less elsewhere.
            <br />
            Many universities have their own gyms, swimming pools, and sports
            centres where services are cheaper than in the city or even free for
            university students.
          </p>

          <p className={style.paraLight}>Entertainment</p>
          <p>
            Entry to clubs in Russia is generally free of charge, and visitors
            buy drinks and snacks. The average price of a cocktail in Moscow
            clubs is 500 roubles (USD 7) and 300 roubles (USD 4) in other
            cities. Young people in Moscow spend 2,000 to 5,000 roubles (USD
            28-71) per weekend.
          </p>
        </div>
      </div>
    </>
  );
};

export default Prices;
