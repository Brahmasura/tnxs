import React, { useContext } from 'react'
import StudyInRussIntro from './Components/StudyInRussIntro/StudyInRussIntro';
import StudyInRussInfo from './Components/StudyInRussInfo/StudyInRussInfo';
import Steps from '../Home/Steps/Steps';
import { LinkContext } from '../../App';

const StudyInRussia = () => {
  const {handleLinkClick} = useContext(LinkContext);
  return (
    <>
    <div onLoad={handleLinkClick(2)}>
        <StudyInRussIntro/>
        <StudyInRussInfo/>
        <Steps/>
        </div>
    </>
  )
}

export default StudyInRussia;