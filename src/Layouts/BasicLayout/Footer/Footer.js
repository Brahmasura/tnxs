import React, { useContext } from "react";
import footer from "./footer.module.scss";
import qr from "../../../Assets/Footer/whatsappQr.png";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../../App";

const Footer = () => {
  const { handleLinkClick } = useContext(LinkContext);
  return (
    <div id="footer" className={`container-fluid ${footer.footerContainer}`}>
      <div className={`row ${footer.footerContent}`}>
        {/* the qr col begins  */}
        <div className={`col ${footer.qrCol}`}>
          <h1 className={footer.brandHead}>GRADUATION ABROAD</h1>
          <p>Direct Representatives of Govt. Medical Universities in Abroad</p>

          <p>
            <span className={footer.contactUsDiv}>CONTACT US :-</span>
            <br />
            withgraduationabroad@gmail.com <br />
            +91-9760390807
            <br /> +91-9811464911
          </p>

          <img src={qr} alt="whatsapp QR" />
          <p>Scan to connect on Whatsapp</p>
          <NavLink to={"/siteMap"} onClick={() => window.scrollTo(0, 0)}>
            <p className={footer.mapPara}>Site Map</p>
          </NavLink>
        </div>

        {/* the qr col ends */}

        <div className={`col ${footer.linkCol}`}>
          <h1>WHY RUSSIA</h1>
          <ul className={footer.footerUl}>
            <NavLink to={"/advantages"} onClick={() => window.scrollTo(0, 0)}>
              <li>Advantages of Higher Education in Russia</li>
            </NavLink>
            <NavLink to={"/ranking"} onClick={() => window.scrollTo(0, 0)}>
              <li>Russian Universities in World University Ranking</li>
            </NavLink>
            <li>Russian Higher Education in Figure</li>

            <li>Tradition of Higher education in Russia</li>
          </ul>
        </div>
        <div className={`col ${footer.linkCol}`}>
          <h1>STUDY IN RUSSIA</h1>
          <ul className={footer.footerUl}>
            <NavLink to={"/preparatory"} onClick={() => window.scrollTo(0, 0)}>
              <li>Preparatory Department</li>
            </NavLink>
            <NavLink to={"/studyInEng"} onClick={() => window.scrollTo(0, 0)}>
              <li>Study in English</li>
            </NavLink>
            <NavLink to={"/mbbsInRussia"} onClick={() => window.scrollTo(0, 0)}>
              <li>MBBS in Russia</li>
            </NavLink>
            <NavLink to={"/universities"} onClick={() => window.scrollTo(0, 0)}>
              <li>Top Universities</li>
            </NavLink>
            <NavLink
              to={"/degreeValidation"}
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Validation Of Degree</li>
            </NavLink>
            <NavLink to={"/tuitionFee"} onClick={() => window.scrollTo(0, 0)}>
              <li>Tuition Fee</li>
            </NavLink>
          </ul>
        </div>
        <div className={`col ${footer.linkCol}`}>
          <h1>LIFE IN RUSSIA</h1>
          <ul className={footer.footerUl}>
            <NavLink to={"/accomodation"} onClick={() => window.scrollTo(0, 0)}>
              <li>Accomodation</li>
            </NavLink>
            <NavLink to={"/prices"} onClick={() => window.scrollTo(0, 0)}>
              <li>Prices</li>
            </NavLink>
            <NavLink to={"/climate"} onClick={() => window.scrollTo(0, 0)}>
              <li>Climate</li>
            </NavLink>
            <NavLink to={"/transport"} onClick={() => window.scrollTo(0, 0)}>
              <li>Transport</li>
            </NavLink>
            <NavLink to={"/safety"} onClick={() => window.scrollTo(0, 0)}>
              <li>Safety</li>
            </NavLink>
            <NavLink to={"/healthcare"} onClick={() => window.scrollTo(0, 0)}>
              <li>Healthcare</li>
            </NavLink>
          </ul>
        </div>
        {/* <div className={`col ${footer.linkCol}`}> */}
        {/* <h1>MBBS ABROAD</h1>
          <ul className={footer.footerUl}>
            <NavLink
              to={"/mbbsRuss"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Russia</li>
            </NavLink>
            <NavLink to={"/mbbsItaly"} onClick={() => {handleLinkClick(0); window.scrollTo(0,0);}}>
            <li>MBBS in Italy</li>
            </NavLink>
            <NavLink
              to={"/mbbsUzbek"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Uzbekistan</li>
            </NavLink>
            <NavLink
              to={"/mbbsKazak"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Kazakhstan</li>
            </NavLink>
          </ul> */}
        {/* </div> */}
        <div className={`col ${footer.linkCol}`}>
          <h1>ABOUT US</h1>
          <ul className={footer.footerUl}>
            <NavLink to={"/ourServices"} onClick={() => window.scrollTo(0, 0)}>
              <li>Our Services</li>
            </NavLink>
            <NavLink to={"/directorDesk"} onClick={() => window.scrollTo(0, 0)}>
              <li>Director's Desk</li>
            </NavLink>
          </ul>

          <h1>MBBS ABROAD</h1>
          <ul className={footer.footerUl}>
            <NavLink
              to={"/mbbsRuss"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Russia</li>
            </NavLink>
            <NavLink
              to={"/mbbsItaly"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Italy</li>
            </NavLink>
            <NavLink
              to={"/mbbsUzbek"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Uzbekistan</li>
            </NavLink>
            <NavLink
              to={"/mbbsKazak"}
              onClick={() => {
                handleLinkClick(0);
                window.scrollTo(0, 0);
              }}
            >
              <li>MBBS in Kazakhstan</li>
            </NavLink>

            <li>
              <div className={footer.callbackDiv}>
                <p>Request a Callback</p>
                <form>
                  <div className={`container-fluid ${footer.callbackForm} `}>
                    <div className="row">
                      {/* <div
                        className={`col-sm-12 col-md-12 col-lg-12 ${footer.formCols}`}
                      > */}
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                          required
                        />
                      {/* </div> */}

                      {/* <div
                        className={`col-sm-12 col-md-12 col-lg-12 ${footer.formCols}`}
                      > */}
                        <input
                          type="text"
                          placeholder="Contact No."
                          name="contact"
                          required
                        />
                      {/* </div> */}
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
