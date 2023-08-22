import React, { useContext } from 'react'
import LifeInRussIntro from './Components/LifeInRussiaIntro/LifeInRussIntro';
import Steps from '../Home/Steps/Steps';
import LifeInRussInfo from './Components/LifeInRussiaInfo/LifeInRussInfo';
import { LinkContext } from '../../App';

const LifeInRussia = () => {
  const {handleLinkClick}  = useContext(LinkContext);
  return (
    <>
    <div onLoad={handleLinkClick(3)}>
      <LifeInRussIntro/>
      <LifeInRussInfo/>
      <Steps/>
      </div>
    </>
  )
}

export default LifeInRussia;