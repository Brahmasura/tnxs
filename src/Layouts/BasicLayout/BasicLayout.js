import React from 'react';
import layout from './basicLayout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Whatsapp from '../../Component/Whatsapp';

const BasicLayout = ({children}) => {
  return (
    <div className={layout.scroller}>
    <Header/>
    <div>{children}</div>
    <Whatsapp/>
    <Footer/>
    </div>
  )
}

export default BasicLayout;