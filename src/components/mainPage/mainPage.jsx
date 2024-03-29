import React from "react";

import "./mainPage.css";

// importing components
import PatientChart from "../chart/chart.jsx";

// stat container
function StatContainerBox(props) {
  const { statName, statValue } = props;
  return (
    <div className="statContainerBox">
      <p style={{ fontSize: 22, fontWeight: 800 }}>{statName}</p>
      <p style={{ fontSize: 20, color: "#211951", fontWeight: "bold" }}>
        {statValue}
      </p>
    </div>
  );
}

function mainPage() {
  return (
    <div className="mainPageContainer">
      <div className="upperMainPageContainer">
        <PatientChart />
      </div>

      <div className="lowerMainPageContainer">
        <div className="totalStatsContainer">
          <StatContainerBox statName="Total Patients" statValue="20" />
          <StatContainerBox statName="Total Doctors" statValue="20" />
          <StatContainerBox statName="Total Nurses" statValue="20" />
          <StatContainerBox statName="Total Ratings " statValue="20" />
          <StatContainerBox statName="Total Accountants" statValue="20" />
          <StatContainerBox statName="Total Beds" statValue="20" />
          <StatContainerBox statName="Total Accountants" statValue="20" />
        </div>
      </div>
    </div>
  );
}

export default mainPage;
