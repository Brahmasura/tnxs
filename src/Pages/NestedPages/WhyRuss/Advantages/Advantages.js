import React from "react";
import advantage from "./advantages.module.scss";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../../App";
import { useContext } from "react";
import advInner from "../../../../Assets/WhyRussia/advantagesInner.webp";
import advTwo from "../../../../Assets/Nested/Advantages.jpg";
import Steps from "../../../Home/Steps/Steps";
import { useState } from "react";

const Advantages = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className={advantage.divContainer}>
        <div className={advantage.advContainer}>
          <div className={advantage.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
            <p className={advantage.slash}> / </p>
            <NavLink to={"/whyRussia"} onClick={() => handleLinkClick(1)}>
              Why Russia
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={advantage.tabsDiv}>
            <NavLink to={"/advantages"}>
              <button
                className={
                  activeTab === 1 ? advantage.activeTabs : advantage.tabs
                }
                onClick={() => handleTabClick(1)}
              >
                Advantage
              </button>
            </NavLink>

            <NavLink to={"/advantages"}>
              <button
                className={
                  activeTab === 2 ? advantage.activeTabs : advantage.tabs
                }
                onClick={() => handleTabClick(2)}
              >
                Opportunity
              </button>
            </NavLink>

            <NavLink to={"/whyRussTesti"}>
              <button
                className={
                  activeTab === 3 ? advantage.activeTabs : advantage.tabs
                }
                onClick={() => handleTabClick(3)}
              >
                Testimonials
              </button>
            </NavLink>

            <NavLink to={"/ranking"}>
              <button
                className={
                  activeTab === 4 ? advantage.activeTabs : advantage.tabs
                }
                onClick={() => handleTabClick(4)}
              >
                Ranking
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}
          <h1>ADVANTAGES</h1>
          <img src={advInner} alt="the advantages" />
          <div className={advantage.greyDiv}>
            <p>
              According to the Organisation for Economic Cooperation and
              Development (OECD), Russia has the most educated population in the
              world, outperforming Canada, Japan, Israel and the USA. More than
              half of Russians have higher education qualification. More than
              200,000 people from 168 countries come to study at Russian
              universities. There are a lot of advantages to study in Russia,
              here are just a few:
            </p>
          </div>
          <h2>Comprehensive University Education</h2>
          <p>
            In Russia, you can acquire in-depth, fundamental knowledge in all
            subjects, but the country is best known for its strong academic
            schools in physics, mathematics and natural sciences. Russia is a
            recognised world leader in training mathematicians, physicists,
            chemists, geologists, engineers, programmers, physicians, and
            specialists in other natural sciences. This is confirmed by the
            positions of Russian universities in world rankings (For more
            details, see the "Russian Universities in World University Rankings"
            section)..
          </p>
          <h2>A Wide Range of Universities and Study Programmes</h2>
          <div className={advantage.greyDiv}>
            <p>In Russia, international applicants can choose from:</p>
            <br />
            <p>
              950 universities in 85 regions of the country, from Kaliningrad to
              Vladivostok
            </p>
            <br />
            <p>
              205 fields, from mathematics and natural sciences to the dramatic
              arts
            </p>
            <br />
            <p>
              657 subjects in Bachelor’s, Master’s, Specialist and Postgraduate
              Programmes (medical traineeships, postgraduate military courses),
              and internships and assistantships.
            </p>
          </div>
          <p>
            Russian universities also offer preparatory programmes (training for
            enrolment on Bachelor’s, Master’s and Specialist Degree courses),
            short courses (summer university, a single term in Russia, summer
            schools), Russian as a foreign language courses, professional
            development and additional vocational training.
          </p>
          <h2>Optimum Ratio of Price and Quality of Education</h2>
          <div className={advantage.greyDiv}>
            <p>
              Self-funded study is much cheaper at Russian universities than the
              equivalent in the USA, Canada and the UK, and in terms of the
              level of training provided, leading Russian universities compete
              on par with educational institutions in the West.
            </p>
          </div>
          <p>
            In 2014, the cost of studying at Russian universities in full-time
            Bachelor’s Degree Programmes started from 63,000 roubles a year
            (1,100 US dollars), depending on the subject studied (according to
            the standards established by the Russian Ministry of Education and
            Science). The maximum tuition fee at the most prestigious
            universities in the capital was as high as 344,000 roubles a year
            (6,100 US dollars), according to data from ratings agency Expert1.{" "}
            <br />
            If you are considering universities located outside Moscow or Saint
            Petersburg, tuition and accommodation costs will be lower: prices in
            the regions are much lower than in the capital (see university
            websites for more detailed information on the tuition fee).
          </p>
          <h2>Funded Tuition</h2>

          <p>
            Russia is one of the few countries to offer foreign citizens the
            opportunity to receive free tuition. Every year, the Russian
            government awards several thousand scholarships (quotas) to
            international students. For example, in 2015 universities were
            allocated 15,000 quotas. In addition, some categories of foreign
            citizens, including compatriots, may apply for state-funded places
            on equal terms with Russians but outside the quotas. Another
            possibility is taking part in university academic competitions: the
            winners and laureates of these competitions are given preferential
            terms when enrolling at leading Russian universities (on a quota
            basis and for state-funded places).
          </p>

          <h2>Opportunity to Learn Russian</h2>
          <p>
            Russian is spoken by about 260 million people worldwide and some
            10.5 million foreigners are regularly learning Russian. Russian
            universities offer different Russian language programmes, including
            courses, summer schools, and distance learning. In preparatory
            courses, international students take a year-long course in the
            Russian language and, for students who are enrolled in state-funded
            places (government scholarships), it is provided free of charge.
          </p>

          <h2>Opportunity to Study in English</h2>
          <div className={advantage.greyDiv}>
            <p>
              Haven’t had time to learn Russian? No problem! More and more
              Russian universities are offering programmes taught in English.
            </p>
          </div>

          <h2>Opportunity to Obtain Dual Diplomas</h2>
          <p>
            In 2003, Russia signed the Bologna Declaration, assuming several
            obligations as part of the creation of a common educational space of
            participant countries. Diplomas of Russian universities are
            recognised in most countries. This procedure is facilitated by
            intergovernmental agreements of Russia with more than 60 countries,
            including Finland, Spain, Cuba, India, Vietnam, China, Venezuela,
            and Namibia, while in June 2015 this document was also signed with
            France. Furthermore, many Russian universities are implementing
            joint programmes with foreign universities and are issuing dual
            diplomas to their graduates. In other words, by studying in Russia
            you can receive a Russian diploma and a diploma from a European
            university.
          </p>

          <h2>Comfortable and Well-Equipped Campuses and Dormitories</h2>
          <p>
            In terms of study facilities, Russian universities are a match for
            many western universities. High-level equipment for laboratories,
            scientific centres and study facilities are now a reality of student
            life today. Most Russian universities have their own dormitories
            with a relatively low cost of accommodation (For more details, see
            the "Аccommodation" section).
          </p>

          <h2>Easy Adaptation for International Students</h2>
          <p>
            Russia is a multinational country where representatives of the most
            diverse countries and cultures can easily adapt to life here. Russia
            is home to more than 200 ethnic groups that speak more than 100
            different languages and dialects. The Russian constitution
            guarantees freedom of conscience: Christians, Muslims, Buddhists,
            Judaists, and representatives of other faiths peacefully coexist
            here. The country's multinational and ethnic structure illustrates
            the diversity of all spheres of life, from cultural to domestic.
            Unsurprisingly, many foreigners arriving in Russia feel at home
            here. Russian universities are proud of their long experience in the
            training and acclimatisation of international students: supervisory
            programmes are arranged for first-year students and there is an
            established network of student communities.
          </p>

          <h2>DIFFERENT CLIMATIC ZONES</h2>
          <p>
            Russia is a vast country where you can choose not only a course of
            study or university, but even your preferred climate – from a
            moderate continental climate in the European part of the country to
            the subtropical Black Sea coast of the Caucasus and southern Crimea.
            (For more details, see the "Climate" section).
          </p>

          <h2>Dazzling Culture</h2>
          <p>
            Most people associate Russia with its culture, and Russians rightly
            take enormous pride in it. Russia has given the world many great
            writers, poets, philosophers, composers, artists and musicians: Leo
            Tolstoy, Anton Chekhov, Feodor Dostoyevsky, Nikolai Rerikh, Sergey
            Rakhmaninov, Boris Pasternak, Pyotr Tchaikovsky, Sergey Eisenstein,
            Mstislav Rostropovich... Literature, ballet, classical music,
            architecture, painting, theatre and cinema: this is how Russia wins
            the hearts of people the world over. Russian cities today are
            centres of cultural life, where exhibitions, festivals, concerts,
            shows, performances and other cultural and entertainment events take
            place on a national and international level.
          </p>

          <h2>Sports</h2>
          <p>
            Russia is a nation of sports enthusiasts that has given the world
            some of its greatest athletes: Irina Rodnina, Vyacheslav Tretyak,
            Maria Sharapova, Evgeny Plushchenko, Alexander Ovechkin, Elena
            Isinbaeva, Alexander Povetkin, and others. More than 60% of
            residents and 71% of students in Russia are involved in sport.
            Sports facilities include 70,000 gyms, 140,000 sports pitches and
            fields, and 4,800 swimming pools, accessible to all. Russian
            universities typically have their own sports facilities and are well
            placed to offer students excellent opportunities to get involved in
            sport. Sports teams are formed at universities, many of which win
            prestigious competitions, including Universiades. The country has
            hosted international sporting events on many occasions; in 2014, it
            hosted the Winter Olympics in Sochi and a Formula 1 race. The 2018
            FIFA World Cup and the 2019 Winter Universiade (2019) are the next
            major events on the calendar.
          </p>

          <h2>Student Benefits</h2>
          <img src={advTwo} alt="student logo" />
          <div className={advantage.greyDiv}>
            <p>
              Students in Russia are eligible for a range of discounts (more
              "Benefits for Students") including for travel on public transport,
              for visiting museums, libraries, theatres, concert halls, parks
              and other public and entertainment facilities.
            </p>
          </div>

          <h2>Exciting Student Life</h2>
          <p>
            Students in Russia are eligible for a range of discounts (more
            "Benefits for Students") including for travel on public transport,
            for visiting museums, libraries, theatres, concert halls, parks and
            other public and entertainment facilities.
          </p>

          <h2>Year-Round Travel</h2>
          <p>
            The Bolshoi Theatre, the Tretyakov Gallery, the Pushkin Museum of
            Fine Arts, the Hermitage, and St. Isaac's Cathedral are Russian
            cultural sights known worldwide, attracting millions of tourists
            every year. However, this is merely the tip of the iceberg on the
            list of things worth seeing. 26 Russian cultural sites are included
            in the UNESCO World Heritage List. In addition to the Kremlin and
            Red Square, the UNESCO list includes the monuments of Novgorod,
            Suzdal, Vladimir, the Holy Trinity Monastery of St. Sergius, Lake
            Baikal, the volcanos of Kamchatka, the Golden Mountains of Altai,
            the Novodevichy Convent, the Curonian Spit, and others. Many
            universities organise trips for students. The choice is almost
            endless: from the Golden Ring spanning 8 ancient Russian cities to
            traveling the legendary route of the Trans-Siberian Railway.
          </p>
        </div>
      </div>
      <Steps />
    </>
  );
};

export default Advantages;
