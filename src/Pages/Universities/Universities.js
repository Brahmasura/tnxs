import React, { useContext } from 'react'
import UniversitiesIntro from './Components/UniversitiesIntro/UniversitiesIntro';
import UniList from './Components/UniList/UniList';
import { LinkContext } from '../../App';
import Steps from '../Home/Steps/Steps';

const Universities = () => {
  const {handleLinkClick} = useContext(LinkContext);
  return (
    <>

    <div onLoad={handleLinkClick(4)}>
       <UniversitiesIntro/>
       <UniList/>
       <Steps/>
       </div>
    </>
  )
}

export default Universities;