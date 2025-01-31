import React, { useState } from "react";
import "./KnowledgeBase.scss";
import { knowledgeBaseData } from "./knowledgeBaseConfig";

const KnowledgeBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const totalPages = Math.ceil(knowledgeBaseData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = knowledgeBaseData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
  
    <div className="knowledge-base">
     <div className="white-space">Space</div>
      <div className="header">
        <h2>Knowledge Base</h2>
        <div className="actions">
          <button className="filter-btn">Filter</button>
          <button className="add-btn">+ Add New</button>
        </div>
      </div>
      <div className="card-container">
        {currentData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-footer">
                <span>{item.sections} Sections</span>
                <span>{item.articles} Articles</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="pagination-footer">
        <span>
          Showing {startIndex + 1} - {Math.min(endIndex, knowledgeBaseData.length)} of {knowledgeBaseData.length}
        </span>
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            &lt;&lt; {/* << */}
          </button>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt; {/* < */}
          </button>
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt; {/* > */}
          </button>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            &gt;&gt; {/* >> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;