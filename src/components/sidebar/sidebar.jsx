import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./sidebar.css";
import homeIcon from "../../assests/homeIcon.png";
import statsIcon from "../../assests/statsIcon.png";
import hireDoctorIcon from "../../assests/hireDoctorIcon.png";

// SidebarPoint component represents a single point/button in the sidebar
function SidebarPoint(props) {
  const { name, url, icon } = props; // Destructure the 'name' and 'url' props

  // Render a Link representing a sidebar point with its name
  return (
    <Link to={url} className="sidebarPointContainer">
      <img
        style={{ height: 20, width: 20, marginRight: 10 }}
        src={icon} // Use the 'icon' prop to set the source of the image
        alt=""
      />
      <h1 className="sidebarPointHeading">{name}</h1>
    </Link>
  );
}

// Sidebar component represents the entire sidebar containing multiple points/buttons
function Sidebar() {
  // Render sidebar points/buttons using SidebarPoint component
  return (
    <div className="sidebarContainer">
      <SidebarPoint name="Home" icon={homeIcon} url="/home" />{" "}
      {/* Pass homeIcon */}
      <SidebarPoint
        icon={statsIcon}
        name="Doctor stats"
        url="/doctorStats"
      />{" "}
      {/* Pass statsIcon */}
      <SidebarPoint
        icon={hireDoctorIcon}
        name="Hire doctor"
        url="/hireDoctor"
      />
      <SidebarPoint
        icon={hireDoctorIcon}
        name="Hire accountant"
        url="/hireAccountant"
      />
      {/* <SidebarPoint name="Finance" url="/finance" />
      <SidebarPoint name="Settings" url="/settings" /> */}
    </div>
  );
}

export default Sidebar;
