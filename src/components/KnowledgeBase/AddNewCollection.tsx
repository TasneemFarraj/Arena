import React, { useState } from "react";
import "./AddNewCollection.scss";

interface AddNewCollectionProps {
  formState: {
    collectionName: string;
    description: string;
    tags: string;
    accessLevel: string;
    thumbnail: File | null;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setShowAddNewOverlay: (show: boolean) => void;
}

const AddNewCollection: React.FC<AddNewCollectionProps> = ({
    formState,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    setShowAddNewOverlay,
  }) => {

  // State for image preview
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChangePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      handleFileChange(e); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); 
      };
      reader.readAsDataURL(file); 
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

  return (
    <div className="add-new-collection">
      <div className="add-new-collection-content">
        <div className="add-new-collection-header">
          <div className="add-new-collection-header-content">
            <button className="close-icon" onClick={() => setShowAddNewOverlay(false)}>
              &times;
            </button>
            <img src="/src/assets/archive.svg" alt="Folder Icon" className="icon" />
            <div className="title-container">
              <h2>
                Add <span style={{ fontWeight: "bolder" }}>New Collection</span>
              </h2>
              <p>Knowledge Base / Create New Collection</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="collectionName">
              Collection Name
              <span className="helper-icon">!</span>
            </label>
            <div className="input-wrapper">
              <img src="/src/assets/text.svg" alt="Text Icon" className="icon" />
              <input
                type="text"
                id="collectionName"
                placeholder="Arena"
                value={formState.collectionName}
                onChange={handleInputChange}
                required
              />
              <img src="/src/assets/info-circle.svg" alt="Info Icon" className="info-icon" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description
              <span className="helper-icon">!</span>
            </label>
            <div className="input-wrapper">
              <textarea
                id="description"
                placeholder="Description"
                value={formState.description}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="tags-access-container">
            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <img src="/src/assets/category-2.svg" alt="Tag Icon" className="icon" style={{ marginTop: "25px" }} />
              <input
                type="text"
                id="tags"
                placeholder="Placeholder"
                value={formState.tags}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="accessLevel">Access Level</label>
              <div className="input-wrapper">
                <img src="/src/assets/setting-4.svg" alt="Lock Icon" className="icon" />
                <select
                  style={{ height: "42px", width: "290px", padding: "5px 12px 12px 35px", gap: "12px" }}
                  id="accessLevel"
                  value={formState.accessLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Access Level</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="restricted">Restricted</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="upload-container">
              <label htmlFor="thumbnail" className="upload-area">
                {imagePreview ? (
                  <img src={imagePreview} alt="Thumbnail Preview" className="thumbnail-preview" />
                ) : (
                  <img src="/src/assets/document-upload.svg" alt="Upload Icon" className="icon" />
                )}
                <br />
                <p>
                  <span className="upload-text">Click here</span> to upload your Collection Thumbnail or drag and drop.
                </p>
                <p className="upload-text-details">Supported Formats: SQL, INC, PNG (10MB each)</p>
                <input
                  type="file"
                  id="thumbnail"
                  onChange={handleFileChangePreview}
                  accept=".sql,.inc,.png"
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={!isFormValid()}>
              <img src="/src/assets/addSign.svg" alt="add Icon" className="icon" />
              Create now
            </button>
            <button type="button" className="cancel-btn" onClick={() => setShowAddNewOverlay(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCollection;
