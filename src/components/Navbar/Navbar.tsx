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
          <img src="/src/assets/home-icon.svg" alt="Home" className="icon" />
          <span>Home</span>
        </div>

        <div className="nav-item">
          <img src="/src/assets/notification-icon.svg" alt="Notification" className="icon" />
          <span>Notification</span>
        </div>

        <div className="nav-item">
          <img src="/src/assets/language-icon.svg" alt="Language" className="icon" />
          <span>English</span>
        </div>

        <div className="dropdown-container">
          <div className="nav-item" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
            <img src="/src/assets/user-icon.svg" alt="User" className="icon" />
            <span>User Names</span>
            <span>{isUserMenuOpen ? "▲" : "▼"}</span>
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