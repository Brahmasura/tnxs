import React, { useContext, useState } from "react";
import style from "./accomodation.module.scss";
import { LinkContext } from "../../../../App";
import { NavLink } from "react-router-dom";
import studyFour from "../../../../Assets/StudyInRussia//studyFour.jpg";
import Steps from "../../../Home/Steps/Steps";

const Accomodation = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.accomContainer}>
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

          <h1>Student lodging</h1>
          <img src={studyFour} alt="The accomodation One" />
          <h2>Introduction:</h2>
          <p>
            Choosing the right accommodation is a pivotal decision for
            international students in Russia. The available options, university
            dormitories and rental apartments, cater to different preferences
            and budgets. This article delves into the pros and cons of both
            choices, helping students make informed decisions based on their
            needs and circumstances.
          </p>

          <h2>University Dormitory:</h2>
          <p>
            The university dormitory is a budget-friendly option that ensures
            proximity to campus resources. Shared by 2 to 4 students, dormitory
            rooms are equipped with essential amenities such as writing desks,
            closets, beds, and more. Additionally, dormitories offer communal
            spaces like kitchens, gyms, canteens, and laundromats, enhancing the
            student experience.
            <br />
            The accommodation fee varies, typically ranging from 500 to 5,000
            roubles per month, depending on the university and city. Payable in
            advance per term or academic year, some universities even provide
            discounts for upfront payments. However, residing in a dormitory
            requires adhering to specific rules and regulations, which include
            maintaining room hygiene, noise discipline, and abiding by the
            no-smoking and no-drinking policies.
          </p>

          <h2>Rental Apartment:</h2>
          <p>
            For students seeking more autonomy and comfort, renting an apartment
            is an appealing option. While pricier than dormitories, apartments
            offer flexibility in location and amenities. Moscow and St.
            Petersburg have higher rental costs, with costs around 30,000 to
            35,000 roubles for a bedsit and 15,000 to 20,000 roubles for a room.
            Smaller cities, like Novosibirsk, boast more affordable rates,
            making it a cost-effective choice.
            <br />
            Some universities facilitate accommodation searches, including host
            families. Exploring these services ensures a hassle-free process. In
            case the university doesn't offer assistance, students can seek
            guidance from realtors or online platforms like cian.ru, irr.ru, and
            avito.ru. Be prepared to provide a deposit (100% of the monthly
            rent) and cover the realtor's interest (50%-100% of the monthly
            rent) apart from the rent itself.
          </p>

          <h2>Conclusion:</h2>
          <p>
            Choosing the right accommodation in Russia is integral to a
            successful academic journey. Whether opting for a cost-effective
            dormitory experience or the autonomy of a rental apartment, students
            must consider their budget, comfort, and proximity to university
            resources. By weighing the advantages and disadvantages of each
            option, students can make a well-informed choice that contributes to
            a rewarding educational experience in Russia.
            <br />
            The most typical lodging options for an international student in
            Russia are a university dormitory, a rental apartment or a host
            family. It is very important to find the best option within your
            budget. Consider all 'pros' and 'cons' before committing yourself to
            an option. The choice of the place where you will stay in a sense
            defines your academic success.
          </p>

          <h2>University Dormitory</h2>
          <p>
            This is the most affordable option. International and out-of-town
            students are provided with dormitory places. Normally they are
            located on the campus or not far from the university. In most cases
            from 2 to 4 students share a room. In a typical dormitory room you
            will find writing desks, chairs, closets, bookshelves, beds and
            nightstands. University dormitories are normally equipped with
            shared kitchens, gyms, recreation rooms, canteens, and laundromats.
            There are also locker rooms and bicycle sheds available. A security
            service operates on the premises. <br />
            The accommodation fee is set by the university. It may vary from 500
            to 5,000 roubles per month, depending on the university and the
            city, and makes it a much cheaper option compared to a rental
            apartment. Payments can be done on a per term basis in advance for
            the whole academic year. In this case some universities may offer
            you a discount.
            <br />
            Students who live in a dormitory must follow certain rules. The
            obvious ones are not to damage the furniture, keep one’s room tidy,
            not make too much noise (loud music, TV, etc.), notify the hall of
            residence supervisor of one’s long absence. There is a
            zero-tolerance policy on drinking and smoking in Russian halls of
            residence. You will be informed about these rules upon arrival.
            <br />
            More information about dormitories for international students you
            will find here.
            <br />
            Rental Apartment If your university does not have a dormitory or for
            some reasons you don’t consider it as an option, then it is
            advisable to look for a rental apartment or room. Naturally, it will
            be more expensive, but you will be able to find a location and level
            of comfort that suits you. If you plan to rent an apartment with
            your fellow students or stay with a host family, you will be able to
            choose your neighbours.
            <br />
            Moscow and St. Petersburg are well known for having the most
            expensive apartments. The smaller the city is and the farther it is
            from major cities, the lower the rent is. For example, as of 2020 in
            Moscow, depending on the location and facilities available, a bedsit
            will cost you around 30-35 thousand roubles (428-500$) a month, and
            a room around 15-20 thousand roubles (214-286$) a month. In
            Novosibirsk, the same options would be 50% cheaper.
            <br />
            Some universities help their students find lodgings, which includes
            finding host families. So, first ask the representatives of your
            university whether they provide such services. This ensures fast and
            secure search of lodging options. While looking for a suitable flat,
            you can stay at a dormitory. If your university does not provide
            such services, ask somebody for advice on realtors or try looking
            for an apartment on cian.ru, irr.ru, avito.ru etc. <br />
            Keep in mind that apart from the rent you will have to pay a deposit
            (a security payment of 100% of the monthly rent) and the realtor's
            interest 50%-100% of the monthly rent).
          </p>
        </div>
      </div>
     <Steps/>
    </>
  );
};

export default Accomodation;
