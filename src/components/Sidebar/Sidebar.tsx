import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarItems } from "./sidebarConfig";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleItemClick = (item: { route?: string }) => {
    if (item.route) {
      setActiveRoute(item.route);
      navigate(item.route);
    }
  };

  const handleLogoClick = () => {
    navigate("/");  
  };

  const filteredItems = sidebarItems.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="header">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src="/src/assets/Arena-logo-icon.svg" alt="Logo" className="logo" />
          {!isCollapsed && <h1 className="app-name">ARENA</h1>}
        </div>
        <div className="toggle" onClick={handleToggle}>
          <img
            src={isCollapsed ? "/src/assets/sidebar-right.svg" : "/src/assets/sidebar-left.svg"}
            alt="Toggle Sidebar"
          />
        </div>
      </div>

      <div className={`search ${isCollapsed ? "collapsed" : ""}`}>
        <div className="search-container">
          <img
            src="/src/assets/search.svg"
            alt="Search"
            className="search-icon"
          />
          {!isCollapsed && (
            <>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
              />
              <div className="cmd-icons">
                <img
                  src="/src/assets/cmdIOS-icon.svg"
                  alt="Cmd1 1"
                  className="icon"
                />
                <img
                  src="/src/assets/cmd-icon.svg"
                  alt="Cmd2"
                  className="icon"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {!isCollapsed && <h1 className="header-menu">Main Menu</h1>}

      <ul className="menu">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${
              item.route === activeRoute ? "active" : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="menu-icon"
            />
            {!isCollapsed && <span className="menu-text">{item.name}</span>}
            {!isCollapsed && item.expandable && (
              <img
                src="/src/assets/addSign.svg"
                alt="Add Sign"
                className="add-sign-icon"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
