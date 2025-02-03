import React, { useState } from "react";
import "./KnowledgeBase.scss";
import { knowledgeBaseData } from "./knowledgeBaseConfig";
import AddNewCollectionOverlay from "./AddNewCollection";

interface FormState {
  collectionName: string;
  description: string;
  tags: string;
  accessLevel: string;
  thumbnail: File | null;
}

const KnowledgeBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddNewOverlay, setShowAddNewOverlay] = useState(false);
  
  const [formState, setFormState] = useState<FormState>({
    collectionName: "",
    description: "",
    tags: "",
    accessLevel: "",
    thumbnail: null,
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    console.log(`Updating ${id}: ${value}`); 
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log("File selected:", e.target.files[0]); 
      setFormState((prevState) => ({
        ...prevState,
        thumbnail: e.target.files![0],
      }));
    }
  };

  const isFormValid = () => {
    return (
      formState.collectionName.trim() !== "" &&
      formState.description.trim() !== "" &&
      formState.tags.trim() !== "" &&
      formState.accessLevel.trim() !== "" &&
      formState.thumbnail !== null
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!isFormValid()) {
      alert("Please fill out all required fields before submitting.");
      return;
    }
  
    const newCollection = {
      id: knowledgeBaseData.length + 1,
      title: formState.collectionName,
      description: formState.description,
      tags: formState.tags.split(","), 
      accessLevel: formState.accessLevel,
      image: URL.createObjectURL(formState.thumbnail!), 
      sections: 0, 
      articles: 0, 
    };
  
    knowledgeBaseData.push(newCollection);
  
    console.log("New Collection Created:", newCollection);
  
    setFormState({
      collectionName: "",
      description: "",
      tags: "",
      accessLevel: "",
      thumbnail: null,
    });
    setShowAddNewOverlay(false);
  };

  return (
    <div className="knowledge-base">
      {/* <div className="top-box"></div> */}
      <div className="knowledge-header">
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

          <button className="add-btn" onClick={() => setShowAddNewOverlay(true)}>
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

      {/* Overlay */}
      {showAddNewOverlay && (
        <AddNewCollectionOverlay
          formState={formState}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          isFormValid={isFormValid}
          setShowAddNewOverlay={setShowAddNewOverlay}
        />
      )}
    </div>
  );
};

export default KnowledgeBase;