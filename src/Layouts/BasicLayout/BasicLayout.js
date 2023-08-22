import React from 'react';
import layout from './basicLayout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const BasicLayout = ({children}) => {
  return (
    <div className={layout.scroller}>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </div>
  )
}

export default BasicLayout;