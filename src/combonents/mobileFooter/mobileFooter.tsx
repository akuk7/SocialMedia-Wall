import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMessage, faMoon, faPlus, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import './mobileFooter.scss'; // Assuming you have a CSS file for styling
import { useActiveTab } from '../../contexts/activeTabContext';
import logo from "../../assets/images/logo.png"
import { useTheme } from '../../contexts/themeContext';
interface MobileFooterProps {
    activeTab: string;
    onTabClick: (tab: string) => void;
  }
const MobileFooter: React.FC<MobileFooterProps> = (onTabClick) => {
   const {activeTab, setActiveTab} = useActiveTab();
   const { isLightMode, toggleTheme } = useTheme();



  return (
    
    <div className={`mobile-footer  ${isLightMode ? 'light' : ''}`}>
      <div className='footer-menu'>
        <img src={logo} alt='logo' className='footer-icon'/>
          <FontAwesomeIcon icon={faHouse} className="footer-icon" onClick={() => {setActiveTab('home');
            console.log('working')
          }}/>
       
       
          <FontAwesomeIcon icon={faPlus} className="footer-icon" onClick={() => setActiveTab('add-post')}/>
          <FontAwesomeIcon icon={faUser} className="footer-icon"onClick={() => {setActiveTab('profile');
            console.log('working')
          }} />
           <div onClick={toggleTheme}>
          {isLightMode ? (
            <>
              <FontAwesomeIcon icon={faMoon} className="footer-icon" />
            
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSun} className="footer-icon" />
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
