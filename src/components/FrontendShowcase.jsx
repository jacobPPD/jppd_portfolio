import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExperienceDetail.css';

const FrontendShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-info">
            <h1>Centerpoint Frontend Showcase</h1>
            <div className="experience-subtitle">Allied Solutions Platform</div>
            <div className="experience-meta">
              <span>React.js Development</span>
              <span>User Interface</span>
            </div>
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h2>Frontend Screenshots</h2>
            <p>
              Below are screenshots of the Centerpoint platform frontend that I helped develop using React.js. 
              These images showcase the user interface components and features I worked on during my internship.
            </p>
          </div>

          <div className="experience-section">
            <div className="frontend-grid">
              <div className="frontend-item">
                <img 
                  src="./logos/cptwo.png" 
                  alt="Centerpoint Platform Screenshot 1" 
                  className="frontend-screenshot"
                  onClick={() => handleImageClick("./logos/cptwo.png", "Centerpoint Platform Screenshot 1")}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="frontend-placeholder" style={{ display: 'none' }}>
                  Screenshot 1
                </div>
                <h3>Platform Interface</h3>
                <p>Main dashboard and navigation components</p>
              </div>
              
              <div className="frontend-item">
                <img 
                  src="./logos/cpthree.png" 
                  alt="Centerpoint Platform Screenshot 2" 
                  className="frontend-screenshot"
                  onClick={() => handleImageClick("./logos/cpthree.png", "Centerpoint Platform Screenshot 2")}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="frontend-placeholder" style={{ display: 'none' }}>
                  Screenshot 2
                </div>
                <h3>User Management</h3>
                <p>User interface for managing system users and permissions</p>
              </div>
              
              <div className="frontend-item">
                <img 
                  src="./logos/cpone.png" 
                  alt="Centerpoint Platform Screenshot 3" 
                  className="frontend-screenshot"
                  onClick={() => handleImageClick("./logos/cpone.png", "Centerpoint Platform Screenshot 3")}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="frontend-placeholder" style={{ display: 'none' }}>
                  Screenshot 3
                </div>
                <h3>Data Visualization</h3>
                <p>Charts and data presentation components</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-navigation">
          <Link to="/allied-experience" className="back-button">
            ← Back to Allied Experience
          </Link>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontendShowcase; 