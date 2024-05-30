import React from 'react';
import './sideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faPlus, faUser, faUserGroup} from '@fortawesome/free-solid-svg-icons';


interface SidebarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="sidebar">
      <ul className='sidebar-menu'>
        <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => onTabClick('home')}>
        <FontAwesomeIcon className="sidebar-icon" icon={faHouse} /><div className="sidebar-name">Home</div>
        </li>
        <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`}  onClick={() => onTabClick('search')}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sidebar-icon"/><div className="sidebar-name">Search</div>
        </li>
        <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`}  onClick={() => onTabClick('friends')}>
        <FontAwesomeIcon icon={faUserGroup} className="sidebar-icon"/><div className="sidebar-name">Friends</div>
        </li>
        <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`}  onClick={() => onTabClick('add-post')}>
        <FontAwesomeIcon icon={faPlus} className="sidebar-icon"/><div className="sidebar-name">Add Post</div>
        </li>
        <li className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`}  onClick={() => onTabClick('profile')}>
        <FontAwesomeIcon icon={faUser} className="sidebar-icon"/><div className="sidebar-name">Profile</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
