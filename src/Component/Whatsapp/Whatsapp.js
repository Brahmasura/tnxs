import React from 'react';
import style from './whatsapp.module.scss';
import icon from '../../Assets/Whatsapp/whatsappIcon.svg';

const Whatsapp = () => {

   const openWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=+918126032863', '_blank');
   }
  return (
   <>
    <div className={style.iconDiv} onClick={openWhatsapp}>
        <img src={icon} alt="whatsapp" />
        <p>Contact Us</p>
    </div>
   </>
  )
}

export default Whatsapp;