import React, { useContext, useEffect } from 'react'
import RussIntro from './Components/RussIntro/RussIntro';
import WhyRussInfo from './Components/WhyRussInfo/WhyRussInfo';
import Steps from '../Home/Steps/Steps';
import { LinkContext } from '../../App';


const WhyRussia = () => {
  const {handleLinkClick} = useContext(LinkContext);

  useEffect(() => {
    handleLinkClick(1);
  }, [handleLinkClick]);
  
  return (
    <> 
      {/* <div onLoad={handleLinkClick(1)}> */}
      <div>
        <RussIntro/>
        <WhyRussInfo/>
        <Steps/>
        </div>
    </>
  )
}

export default WhyRussia;