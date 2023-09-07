import "./App.scss";
import BasicLayout from "./Layouts/BasicLayout/BasicLayout";
import { Route, Routes } from "react-router-dom";
// import { navLinks } from "./Constants/NavLinks";
import Home from "./Pages/Home/Home";
import { createContext, useState } from "react";
import WhyRussia from "./Pages/WhyRussia/WhyRussia";
import StudyInRussia from "./Pages/StudyInRussia/StudyInRussia";
import LifeInRussia from "./Pages/LifeInRussia/LifeInRussia";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Advantages from "./Pages/NestedPages/WhyRuss/Advantages/Advantages";
import Ranking from "./Pages/NestedPages/WhyRuss/Ranking/Ranking";
import MbbsInRuss from "./Pages/NestedPages/StudyInRuss/MbbsInRuss/MbbsInRuss";
import Universities from "./Pages/Universities/Universities";
import Prices from "./Pages/NestedPages/LifeInRuss/Prices/Prices";
import Accomodation from "./Pages/NestedPages/LifeInRuss/Accomodation/Accomodation";
import Climate from "./Pages/NestedPages/LifeInRuss/Climate/Climate";
import Transport from "./Pages/NestedPages/LifeInRuss/Transport/Transport";
import Safety from "./Pages/NestedPages/LifeInRuss/Safety/Safety";
import Healthcare from "./Pages/NestedPages/LifeInRuss/Healthcare/Healthcare";
import MbbsRuss from "./Pages/MbbsAbroad/MbbsRuss/MbbsRuss";
import MbbsKazak from "./Pages/MbbsAbroad/MbbsKazak/MbbsKazak";
import MbbsUzbek from "./Pages/MbbsAbroad/MbbsUzbek/MbbsUzbek";
import MbbsItaly from './Pages/MbbsAbroad/MbbsItaly/MbbsItaly';
import FiveSteps from "./Pages/NestedPages/FiveSteps/FiveSteps";
import FaqInfo from "./Pages/NestedPages/FaqInfo/FaqInfo";
import Tuitionfee from './Pages/NestedPages/StudyInRuss/TuitionFee/Tuitionfee';
import StudyUni from "./Pages/NestedPages/StudyInRuss/StudyUni/StudyUni";
import StudyInEng from "./Pages/NestedPages/StudyInRuss/StudyInEng/StudyInEng";
import Preparatory from "./Pages/NestedPages/StudyInRuss/Preparatory/Preparatory";
import Validation from "./Pages/NestedPages/StudyInRuss/Validation/Validation";

export const LinkContext = createContext();

function App() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="App">
      <LinkContext.Provider value={{ activeLink, handleLinkClick }}>
        <BasicLayout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/whyRussia" exact element={<WhyRussia />} />
            <Route path="/studyInRussia" exact element={<StudyInRussia />} />
            <Route path="/lifeInRussia" exact element={<LifeInRussia />} />
            <Route path="/universities" exact element={<Universities />} />
            <Route path="/aboutUs" exact element={<AboutUs />} />
            <Route path="/advantages" exact element={<Advantages />} />
            <Route path="/ranking" exact element={<Ranking />} />
            <Route path="/mbbsInRussia" exact element={<MbbsInRuss />} />
            <Route path="/prices" exact element={<Prices />} />
            <Route path="/accomodation" exact element={<Accomodation />} />
            <Route path="/climate" exact element={<Climate />} />
            <Route path="/transport" exact element={<Transport />} />
            <Route path="/safety" exact element={<Safety />} />
            <Route path="/healthcare" exact element={<Healthcare />} />
            <Route path="/mbbsRuss" exact element={<MbbsRuss/>}/>
            <Route path="/mbbsItaly" exact element={<MbbsItaly/>}/>
            <Route path="/mbbsKazak" exact element={<MbbsKazak/>}/>
            <Route path="/mbbsUzbek" exact element={<MbbsUzbek/>}/>
            <Route path="/nestedSteps" exact element={<FiveSteps/>}/>
            <Route path="/faqInfo" exact element={<FaqInfo/>}/>
            <Route path="/tuitionFee" exact element={<Tuitionfee/>}/>
            <Route path="/studyUni" exact element={<StudyUni/>}/>
            <Route path="/studyInEng" exact element={<StudyInEng/>}/>
            <Route path="/preparatory" exact element={<Preparatory/>}/>
            <Route path="/degreeValidation" exact element={<Validation/>}/>
          </Routes>
        </BasicLayout>
      </LinkContext.Provider>
    </div>
  );
}

export default App;
