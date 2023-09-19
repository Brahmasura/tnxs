import React from "react";
import style from "./basicLayout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import Whatsapp from '../../Component/Whatsapp/Whatsapp';

const BasicLayout = ({ children }) => {
  return (
    <div className={style.scroller}>
      <Header />
      <div className={style.content}>{children}</div>
      {/* <Whatsapp/> */}
      <Footer />
    </div>
  );
};

export default BasicLayout;
