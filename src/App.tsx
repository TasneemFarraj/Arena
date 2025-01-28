import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/workflow-management"/>
            <Route path="/knowledge-base"/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
