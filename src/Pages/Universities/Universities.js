import React, { useContext } from 'react'
import UniversitiesIntro from './Components/UniversitiesIntro/UniversitiesIntro';
import UniList from './Components/UniList/UniList';
import { LinkContext } from '../../App';

const Universities = () => {
  const {handleLinkClick} = useContext(LinkContext);
  return (
    <>

    <div onLoad={handleLinkClick(4)}>
       <UniversitiesIntro/>
       <UniList/>
       </div>
    </>
  )
}

export default Universities;