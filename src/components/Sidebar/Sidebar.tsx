import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarItems, SidebarItem } from "./sidebarConfig";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.route) {
      setActiveRoute(item.route);
      navigate(item.route);
    } else if (item.expandable) {
      setIsSubmenuVisible(!isSubmenuVisible);
      setActiveSubmenu(item.name);
      setIsCollapsed(true); // Collapse sidebar when a submenu is toggled
    }
  };

  const handleCloseSubmenu = () => {
    setIsSubmenuVisible(false);
    setActiveSubmenu(null);
    setIsCollapsed(false);
  };

  const filteredItems = sidebarItems.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  const renderSubmenu = () => {
    if (!isSubmenuVisible) return null;
  
    const submenuItems = sidebarItems.find(
      (item) => item.name === activeSubmenu
    )?.subItems;
  
    return (
      <div className={`submenu ${isSubmenuVisible ? "visible" : ""}`}>
        <button className="close-submenu-btn" onClick={handleCloseSubmenu}>
          <img
            src="/src/assets/close-icon.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </button>
        <ul className="menu">
          {submenuItems?.map((subItem, index) => (
            <li
              key={index}
              className={`menu-item ${subItem.route === activeRoute ? "active" : ""}`}
              onClick={() => handleItemClick(subItem)}
            >
              <img
                src={subItem.icon}
                alt={`${subItem.name} Icon`}
                className="menu-icon"
              />
              <div className="menu-text-container">
                <span className="menu-text">{subItem.name}</span>
                <span className="submenu-description">{subItem.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="header">
          <div className="logo-container" onClick={() => navigate("/")}>
            <img
              src="/src/assets/Arena-logo-icon.svg"
              alt="Logo"
              className="logo"
            />
            {!isCollapsed && <h1 className="app-name">ARENA</h1>}
          </div>
          <div className="toggle" onClick={handleToggle}>
            <img
              src={
                isCollapsed
                  ? "/src/assets/sidebar-right.svg"
                  : "/src/assets/sidebar-left.svg"
              }
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
              className={`menu-item ${item.route === activeRoute ? "active" : ""}`}
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
      {renderSubmenu()}
    </>
  );
};

export default Sidebar;
