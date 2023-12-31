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
import Scholarship from "./Pages/NestedPages/Scholarship/Scholarship";
import Guidelines from "./Pages/NestedPages/UsefulInfo/ItalyGuidelines/Guidelines/Guidelines";
import ItalyDocs from "./Pages/NestedPages/UsefulInfo/ItalyGuidelines/ItalyDocs/ItalyDocs";
import Expenses from "./Pages/NestedPages/UsefulInfo/ItalyGuidelines/Expenses/Expenses";
import AboutIntro from "./Pages/AboutUs/AboutIntro/AboutIntro";
import OurServices from "./Pages/AboutUs/OurServices/OurServices";
import DirectorDesk from "./Pages/AboutUs/DirectorDesk/DirectorDesk";
import Sitemap from "./Pages/NestedPages/SiteMap/Sitemap";
import WhyRussTesti from "./Pages/NestedPages/WhyRuss/whyRussTesti/WhyRussTesti";
import ItalianUni from "./Pages/NestedPages/UsefulInfo/ItalianUni/ItalianUni";
import ItalyManagement from "./Pages/NestedPages/UsefulInfo/ItalianUni/ItalyManagement";
import ItalyEngineering from "./Pages/NestedPages/UsefulInfo/ItalianUni/ItalyEngineering";

export const LinkContext = createContext();

function App() {
  const [activeLink, setActiveLink] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const [formData, setFormData] = useState({
    userName: "",
    userMail: "",
    userContact: "",
    userCourse: "",
    userPassport: "",
    userMessage: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
    setFormData({
      userName: "",
      userMail: "",
      userContact: "",
      userCourse: "",
      userPassport: "",
      userMessage: "",
    });
  };

  const handleHamClick = () => {
    setIsHamOpen(!isHamOpen);
  }



  return (
    <div className="App">
      <LinkContext.Provider value={{ activeLink, handleLinkClick, isModalOpen, formData, handleFormChange, handleModalClick, isHamOpen, handleHamClick }}>
        <BasicLayout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/whyRussia" exact element={<WhyRussia />} />
            <Route path="/studyInRussia" exact element={<StudyInRussia />} />
            <Route path="/lifeInRussia" exact element={<LifeInRussia />} />
            <Route path="/universities" exact element={<Universities />} />
            <Route path="/aboutUs" exact element={<AboutIntro />} />
            <Route path="/ourServices" exact element={<OurServices/>}/>
            <Route path="/directorDesk" exact element={<DirectorDesk/>}/>
            <Route path="/advantages" exact element={<Advantages />} />
            <Route path="/ranking" exact element={<Ranking />} />
            <Route path="/whyRussTesti" exact element={<WhyRussTesti/>}/>
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
            <Route path="/scholarship" exact element={<Scholarship/>}/>
            <Route path="/tuitionFee" exact element={<Tuitionfee/>}/>
            <Route path="/studyUni" exact element={<StudyUni/>}/>
            <Route path="/studyInEng" exact element={<StudyInEng/>}/>
            <Route path="/preparatory" exact element={<Preparatory/>}/>
            <Route path="/degreeValidation" exact element={<Validation/>}/>
            <Route path="/guidelines" exact element={<Guidelines/>}/>
            <Route path="/documents" exact element={<ItalyDocs/>}/>
            <Route path="/italyUni" exact element={<ItalianUni/>}/>
            <Route path="/italyMan" exact element={<ItalyManagement/>}/>
            <Route path="/italyEng" exact element={<ItalyEngineering/>}/>
            <Route path="/expenses" exact element={<Expenses/>}/>
            <Route path="/siteMap" exact element={<Sitemap/>}/>

          </Routes>
        </BasicLayout>
      </LinkContext.Provider>
    </div>
  );
}

export default App;
