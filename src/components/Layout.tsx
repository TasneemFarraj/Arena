import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;