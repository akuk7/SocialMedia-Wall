import React from "react";
import "./sideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouse,
  faMagnifyingGlass,
  faMoon,
  faPlus,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import logo from "../../assets/images/logo.png";
import { useTheme } from "../../contexts/themeContext";
import { faSun } from "@fortawesome/free-regular-svg-icons";

interface SidebarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabClick }) => {
  const { isLightMode, toggleTheme } = useTheme();
  const { device } = useSelector((state: RootState) => state.windowSize);
  return (
    <div className={`sidebar ${device}  ${isLightMode ? 'light' : ''}`}>
      <div className="company">
        <img className="company-logo" alt="link it" src={logo} />
        <div className="company-name">Link It</div>
      </div>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabClick("home")}
        >
          <FontAwesomeIcon className="sidebar-icon" icon={faHouse} />
          <div className="sidebar-name">Home</div>
        </li>
        {/* <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`}  onClick={() => onTabClick('search')}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sidebar-icon"/><div className="sidebar-name">Search</div>
        </li>
        <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`}  onClick={() => onTabClick('friends')}>
        <FontAwesomeIcon icon={faUserGroup} className="sidebar-icon"/><div className="sidebar-name">Friends</div> */}
        {/* </li> */}
        <li
          className={`sidebar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabClick("add-post")}
        >
          <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
          <div className="sidebar-name">Add Post</div>
        </li>
        <li
          className={`sidebar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabClick("profile")}
        >
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
          <div className="sidebar-name">Profile</div>
        </li>
        <li
          className={`sidebar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabClick("notification")}
        >
          <FontAwesomeIcon icon={faBell} className="sidebar-icon" />
          <div className="sidebar-name">Notifications</div>
        </li>

        <li className={`sidebar-item`} onClick={toggleTheme}>
          {isLightMode ? (
            <>
              <FontAwesomeIcon icon={faMoon} className="sidebar-icon" />
              <div className="sidebar-name">Dark Mode</div>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSun} className="sidebar-icon" />
              <div className="sidebar-name">Light Mode</div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
