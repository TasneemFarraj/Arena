import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import KnowledgeBase from "./components/KnowledgeBase/KnowledgeBase";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="knowledge-base" element={<KnowledgeBase />} />
          <Route path="/workflow-management"/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;