import React from "react";
import discover from './discover.module.scss';
import destiOne from "../../../Assets/Destination/russia.jpeg";
import destiTwo from "../../../Assets/Destination/kazakhstan.jpg";
import destiThree from "../../../Assets/Destination/uzbekistan.webp";
import destiFour from "../../../Assets/Destination/italy.webp";

const eduList = [
  { image: destiOne, text: "RUSSIA", textOne:"universities", uValue:"10", textTwo:"population",pValue:"1 million", textThree:"Capital", cValue:"xyz"},
  { image: destiTwo, text: "KAZAKHSTAN", textOne:"universities", uValue:"10", textTwo:"population",pValue:"1 million", textThree:"Capital", cValue:"xyz" },
  { image: destiThree, text: "UZBEKISTAN", textOne:"universities", uValue:"10", textTwo:"population",pValue:"1 million", textThree:"Capital", cValue:"xyz" },
  { image: destiFour, text: "ITALY", textOne:"universities", uValue:"10", textTwo:"population",pValue:"1 million", textThree:"Capital", cValue:"xyz" },
];

const DiscoverRussia = () => {
  return (
    <div className={discover.discoverContainer}>
      <h1 className={discover.discoverTitle}>Destinations to Study Abroad</h1>
      <div className={`container-fluid ${discover.colsContainer}`}>
        <div className={`row ${discover.rowOptions}`}>
          {eduList.map((option) => (
            <div className={`col-md-3 col-lg-3 ${discover.optionContainer}`}>
              <div className="row">
                <div
                  className={`col-md-12 col-lg-12 ${discover.optionUpper}`}
                  style={{
                    backgroundImage: `url(${option.image})`,
                    backgroundSize: "100% 93%",
                    backgroundPosition: "center",
                    backgroundRepeat:"no-repeat"
                  }}
                > <p>{option.text}</p></div>
                <div className={`col-md-12 col-lg-12 container-fluid ${discover.optionLower}`}>
                 <div className="row">
                    <div className={`col-12 ${discover.lowerText}`}>
                        <div className="row">
                          <div className={`col-6 ${discover.lowerTextLeft}`}>
                          <p>{option.textOne}</p>
                          </div>
                          <div className={`col-6 ${discover.lowerTextRight}`}>
                          <p>{option.uValue}</p>
                          </div>
                            
                        </div>
                    </div>
                    
                    <div className={discover.hrDiv}>
                    <hr className={discover.discoverHr}/>
                    </div>

                    <div className={`col-12 ${discover.lowerText}`}>
                        <div className="row">
                          <div className={`col-6 ${discover.lowerTextLeft}`}>
                          <p>{option.textTwo}</p>
                          </div>
                          <div className={`col-6 ${discover.lowerTextRight}`}>
                          <p>{option.pValue}</p>
                          </div>
                            
                        </div>
                    </div>

                    <div className={discover.hrDiv}>
                    <hr className={discover.discoverHr}/>
                    </div>

                    <div className={`col-12 ${discover.lowerText}`}>
                        <div className="row">
                          <div className={`col-6 ${discover.lowerTextLeft}`}>
                          <p>{option.textThree}</p>
                          </div>
                          <div className={`col-6 ${discover.lowerTextRight}`}>
                          <p>{option.cValue}</p>
                          </div>
                            
                        </div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverRussia;