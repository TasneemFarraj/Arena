import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";


const Navbar: React.FC = () => {
  const location = useLocation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const routeTitles: { [key: string]: string } = {
    "/": "ARENA",
    "/workflow-management": "Workflow Management",
    "/knowledge-base": "Knowledge Base",
  };

  const currentPageTitle = routeTitles[location.pathname] || "ARENA";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">{currentPageTitle}</span>
      </div>

      <div className="navbar-right">
        <div className="nav-item">
          <img src="/src/assets/Home.svg" alt="Home" className="icon" />
          <span>Home</span>
        </div>

        <div className="nav-item">
          <img src="/src/assets/Notification.svg" alt="Notification" className="icon" />
          <span>Notification</span>
        </div>

        <div className="nav-item">
          <img src="/src/assets/lang.svg" alt="Language" className="icon" />
          <span>English</span>
        </div>

        <div className="dropdown-container">
          <div className="nav-item" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
            <img src="/src/assets/Profile.svg" alt="User" className="user-icon" />
            <span>User Names</span>
            <span>{isUserMenuOpen ?<img src="/src/assets/SmallArrow -UpCircle.svg" alt="Up" className="icon" /> : <img src="/src/assets/SmallArrow - Down Circle.svg" alt=" Down" className="icon"  />}</span>
          </div>
          {isUserMenuOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => setIsUserMenuOpen(false)}>Profile</li>
              <li onClick={() => setIsUserMenuOpen(false)}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;