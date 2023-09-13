import React, { useContext, useState } from "react";
import style from "./expenses.module.scss";
import { LinkContext } from "../../../../../App";
import { NavLink } from "react-router-dom";

const ExpList = [
  {
    serial: "1",
    extra: "Test Fee (Bachelor Degree)",
    amount: "30 Euro-50 Euro Per Test",
  },
  {
    serial: "2",
    extra: "HRD (Depends upon particular State Gov.)",
    amount: "Rs. 500/- to Rs. 1500/- (Self) Agent- Rs. 7,000/-",
  },
  {
    serial: "3",
    extra: "Legalization (Scholarship Documents) (July-August)",
    amount: "Rs.2,000/- (approx.)- Self Rs. 3000/- per doc- Agent",
  },
  {
    serial: "4",
    extra:"Apostille & Translation of any other required by university Other than Scholarship Docs & Degree/12th ",
    amount: "Rs. 2500/- per document ",
  },
  {
    serial: "5",
    extra: "Visa Fee (VFS ITALY-overall service charges) (August) ",
    amount: "Rs.10,000/- (approx.)",
  },
  {
    serial: "6",
    extra: "Dummy Flight Tickets and Accommodation (August)",
    amount: "Rs.2,000/- (approx.)",
  },
  {
    serial: "7",
    extra: "Travel Insurance (August)",
    amount: "Rs.6,000/- (approx.)",
  },
  {
    serial: "8",
    extra: "Original Flight Tickets (After Visa)",
    amount: "Rs.30,000/- (approx.) ",
  },
  {
    serial: "9",
    extra: "University Enrollment Fee (Oct-Dec)",
    amount: "16 Euro- 200 Euro (approx.) Depends upon University",
  },
  {
    serial: "10",
    extra: "Residence Permit + Stamp Duty Fee",
    amount: "100 Euro + 16 Euro (approx.)",
  },
  {
    serial: "11",
    extra: "Backup (Living Cost)",
    amount: "Rs. 30,000/- per month Overall Rs. 1,00,000/- (For three months)",
  },
  {
    serial: "12",
    extra: "For MBBS- IMAT Registration Fee",
    amount: "130 Euro (approx.)",
  },
];

const Expenses = () => {
  const { handleLinkClick } = useContext(LinkContext);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={style.divContainer}>
        <div className={style.expContainer}>
          <div className={style.linkDiv}>
            <NavLink to={"/"} onClick={() => handleLinkClick(0)}>
              Home
            </NavLink>
          </div>

          {/* the tab div begins */}

          <div className={style.tabsDiv}>
            <NavLink to={"/guidelines"}>
              <button
                className={activeTab === 1 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(1)}
              >
                Guidelines to Apply
              </button>
            </NavLink>

            <NavLink to={"/documents"}>
              <button
                className={activeTab === 2 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(2)}
              >
                Documents required
              </button>
            </NavLink>

            <NavLink to={"/expenses"}>
              <button
                className={activeTab === 3 ? style.activeTabs : style.tabs}
                onClick={() => handleTabClick(3)}
              >
                Extra Expenses
              </button>
            </NavLink>
          </div>

          {/* the tab div ends */}
          <h1>Guidelines For Applying To an Italian University</h1>

          <table className={style.tableStyle}>
            <thead>
              <tr>
                <th className={style.firstCol}>S. No</th>
                <th>Extra Amount (To maintain by student)</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {ExpList.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className={style.firstCol}>{data.serial}</td>
                    <td>{data.extra}</td>
                    <td>{data.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Expenses;
