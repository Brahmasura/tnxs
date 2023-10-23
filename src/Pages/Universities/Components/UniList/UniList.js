import React from 'react';
import style from './uniList.module.scss';
import UniArray from '../../../../Constant/UniversityArray';
import UniCompo from '../UniCompo/UniCompo';

const UniList = () => {
  return (
    <>
       <div className={style.uniListContainer}>

       {UniArray.map((university, index) => {
        return(
            <UniCompo key={index} institution={university}/>
        )
       })}

       </div>
    </>
  )
}

export default UniList;