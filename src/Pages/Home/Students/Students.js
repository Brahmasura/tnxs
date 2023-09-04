import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import students from "./students.module.scss";

const Students = () => {
  // for the slider
  const StudentSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessiibility: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    draggable: true,
    // padding: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className={students.studentContainer} >
      <Slider {...StudentSettings} >
        <div className={students.slideOne}></div>
        <div className={students.slideTwo}></div>
        <div className={students.slideThree}></div>
        {/* <div className={students.slideFour}></div>
        <div className={students.slideFive}></div> */}
      </Slider>
      </div>
    </>
  );
};

export default Students;
