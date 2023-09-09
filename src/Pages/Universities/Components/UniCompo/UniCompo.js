import React, { useState } from "react";
import style from "./uniCompo.module.scss";

const UniCompo = ({ institution }) => {
  const { university, uni, image, city, web, uniDist, distance, logo, pdf } =
    institution;

    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeeClick = () => {
    // window.open(pdf, "_blank");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <>
      <div className={style.uniCompoContainer}>
        <h1>{university}</h1>
        <div className={`row ${style.rowContainer}`}>
          <div className={`col-12 col-sm-12 col-lg-4 ${style.imageCol}`}>
            <img src={image} alt={uni} />
          </div>
          <div className={`col-12 col-sm-12 col-lg-6 ${style.infoCol}`}>
            <p>City: {city}</p>
            <p>University Website: {web}</p>
            <p>
              {uniDist} distance from Moscow: {distance} kilometers
            </p>
            <div className={style.buttonDiv}>
              <button className={style.details}>
                <p>Details</p>
              </button>
              <button className={style.fee} onClick={handleFeeClick}>
                <p>Fee Details</p>
              </button>
              <button className={style.gallery}>
                <p>Gallery</p>
              </button>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-lg-2 ${style.logoCol}`}>
            <img src={logo} alt={`${uni} logo`} />
          </div>
        </div>
      </div>


      {/* code for the modal */}

      {
        isModalOpen && (
          <div className={style.modalOverlay} onClick={closeModal}>
            <div className={style.modalContent}>
              <iframe src={pdf} title="pdf viewer" width="100%" height="100%"/>
              <button className={style.closeButton} onClick={closeModal}>
                close
              </button>
             </div>
          </div>
        )
      }
    </>
  );
};

export default UniCompo;
