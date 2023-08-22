import React, { useContext } from 'react'
import AboutIntro from './AboutIntro/AboutIntro';
import OurServices from './OurServices/OurServices';
import Steps from '../Home/Steps/Steps';
import { LinkContext } from '../../App';

const AboutUs = () => {
  const {handleLinkClick} = useContext(LinkContext);
  return (
    <>
    <div onLoad={handleLinkClick(5)}>
        <AboutIntro/>
        <OurServices/>
        <Steps/>
        </div>
    </>
  )
}

export default AboutUs;