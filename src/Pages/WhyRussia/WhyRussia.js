import React, { useContext } from 'react'
import RussIntro from './Components/RussIntro/RussIntro';
import WhyRussInfo from './Components/WhyRussInfo/WhyRussInfo';
import Steps from '../Home/Steps/Steps';
import { LinkContext } from '../../App';


const WhyRussia = () => {
  const {handleLinkClick} = useContext(LinkContext);
  
  return (
    <> 
      <div onLoad={handleLinkClick(1)}>
        <RussIntro/>
        <WhyRussInfo/>
        <Steps/>
        </div>
    </>
  )
}

export default WhyRussia;