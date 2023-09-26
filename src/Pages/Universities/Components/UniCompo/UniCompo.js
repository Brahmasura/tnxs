import React, { useState } from "react";
import style from "./uniCompo.module.scss";

const UniCompo = ({ institution }) => {
  const {
    university,
    uni,
    image,
    city,
    web,
    uniDist,
    distance,
    logo,
    pdf,
    gallery,
  } = institution;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalModalOpen, setIsGalModalOpen] = useState(false);

  const handleFeeClick = () => {
    // window.open(pdf, "_blank");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGalClick = () => {
    setIsGalModalOpen(true);
  };

  const closeGalModal = () => {
    setIsGalModalOpen(false);
  };
  return (
    <>
      <div className={style.uniCompoContainer}>
        <h1>{university}</h1>
        <div className={`row ${style.rowContainer}`}>
          <div
            className={`col-12 col-sm-4 col-md-4 col-lg-4 ${style.imageCol}`}
          >
            <img src={image} alt={uni} />
          </div>
          <div className={`col-12 col-sm-8 col-md-8 col-lg-6 ${style.infoCol}`}>
            <p>
              <span className={style.titlePara}>City:</span> {city}
            </p>
            <p>
              <span className={style.titlePara}>University Website: </span>
              <a href={web}>{web}</a>
            </p>
            <p>
              <span className={style.titlePara}>
                {uniDist} distance from Moscow:
              </span>{" "}
              {distance} kilometers
            </p>
            <div className={style.buttonDiv}>
              <button className={style.details}>
                <p>Details</p>
              </button>
              <button className={style.fee} onClick={handleFeeClick}>
                <p>Fee Details</p>
              </button>
              <button className={style.gallery} onClick={handleGalClick}>
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

      {isModalOpen && (
        <div className={style.modalOverlay} onClick={closeModal}>
          <div className={style.modalContent}>
            <iframe src={pdf} title="pdf viewer" width="100%" height="100%" />
            <button className={style.closeButton} onClick={closeModal}>
              close
            </button>
          </div>
        </div>
      )}

      {isGalModalOpen && (
        <div className={style.modalOverlay} onClick={closeGalModal}>
          <div className={`container-fluid ${style.galModalContent}`}>
            <div className="row">
              {gallery.map((pic) => (
                <div className={`col-3 ${style.galCol}`} onClick={ () => window.open(pic, "_blank") }>
                  <img src={pic} alt="kabardino gallery" />
                </div>
              ))}
            </div>
            <button className={style.closeButton} onClick={closeGalModal}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UniCompo;
