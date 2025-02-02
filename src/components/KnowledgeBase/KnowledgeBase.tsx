import React, { useState } from "react";
import "./KnowledgeBase.scss";
import { knowledgeBaseData } from "./knowledgeBaseConfig";

const KnowledgeBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddNewOverlay, setShowAddNewOverlay] = useState(false);
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
         <div className="top-box">
      </div>
      <div className="knowledge-header">
        <div className="white-space"></div>
        <div className="knowledge-header-actions">
          <button className="view-toggle">
            <img src="/src/assets/Card View squ.svg" alt="Card View" className="icon" />
            <span>Card View</span>
          </button>
          <button className="view-toggle">
            <img src="/src/assets/Card View.svg" alt="List View" className="icon" />
          </button>

          <div className="search-bar">
            <img src="/src/assets/search-normal.svg" alt="Search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button className="filter-btn">
            <img src="/src/assets/filter.svg" alt="Filter" className="icon" />
            <span>Filter</span>
          </button>

          <button
            className="add-btn"
            onClick={() => setShowAddNewOverlay(true)}
          >
            <img src="/src/assets/addSign.svg" alt="Add New" className="icon-footer" />
            Add New
          </button>
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
                <span>
                  <img src="/src/assets/folder.svg" alt="Section Icon" className="icon-footer" />
                  {item.sections} Sections 
                </span>
                <span>
                  <img src="/src/assets/note-text.svg" alt="Article Icon" className="icon-footer" />
                  {item.articles} Articles 
                </span>
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
          <img src="/src/assets/Arrow - leftt 2.svg" alt="Section Icon" className="icon-footer" />
          </button>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
          <img src="/src/assets/Arrow - Left .svg" alt="Section Icon" className="icon-footer" />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
      <button
        key={page}
        className={`pagination-button ${currentPage === page ? "active" : ""}`}
        onClick={() => handlePageChange(page)}
        disabled={page > totalPages}
      >
        {page}
      </button>
    ))}
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
          <img src="/src/assets/Arrow - Right .svg" alt="Section Icon" className="icon-footer" />
          </button>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
          <img src="/src/assets/Arrow - Right 2.svg" alt="Section Icon" className="icon-footer" />
          </button>
        </div>
      </div>

      {/* Add New Collection Overlay */}
      {showAddNewOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button
              className="close-icon"
              onClick={() => setShowAddNewOverlay(false)}
            >
              &times; 
            </button>
            <h2>Add New Collection</h2>
            <form>
              <div className="form-group">
                <label htmlFor="collection-name">Collection Name</label>
                <input
                  type="text"
                  id="collection-name"
                  placeholder="Arena"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  placeholder="Placeholder"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="access-level">Access Level</label>
                <input
                  type="text"
                  id="access-level"
                  placeholder="Placeholder"
                  required
                />
              </div>
              <div className="form-group">
                <label>Upload Thumbnail</label>
                <div className="upload-area">
                  <img src="/src/assets/document-upload.svg" alt="Upload Icon" className="icon-footer" />
                  Click here to upload your Collection Thumbnail or drag and drop.
                  <br />
                  Supported Formats: SQL, INC, PNG (10MB each)
                </div>
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowAddNewOverlay(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
