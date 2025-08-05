import React from 'react';
import { Link } from 'react-router-dom';
import './ExperienceDetail.css';

const IUExperience = () => {
  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-image-large">
            <img 
              src="./logos/IU.png" 
              alt="Indiana University Logo" 
              className="experience-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="experience-placeholder" role="img" aria-label="Indiana University" style={{ display: 'none' }}>IU</div>
          </div>
          <div className="experience-info">
            <h1>Assistant Instructor</h1>
            <div className="experience-subtitle">Indiana University - ENGR-E 222, ENGR-E 101</div>
            <div className="experience-meta">
              <span>August 2023 - May 2025</span>
              <span>Bloomington, IN</span>
            </div>
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h2>Role Overview</h2>
            <p>
              As an Assistant Instructor at Indiana University, I facilitate the development of machine learning models 
              and mentor undergraduate students in Python and advanced ML applications. I deliver engaging lectures 
              and guide students through hands-on labs, dedicating 10+ hours weekly to enhance their technical proficiency.
            </p>
          </div>

          <div className="experience-section">
            <h2>Key Responsibilities</h2>
            <div className="responsibilities-grid">
              <div className="responsibility-item">
                <h3>Machine Learning Instruction</h3>
                <p>Facilitated development of over 60 unique machine learning models by guiding 60 students through hands-on labs.</p>
              </div>
              <div className="responsibility-item">
                <h3>Student Mentorship & Support</h3>
                <p>Mentored over 200 undergraduate students in Python and advanced ML applications, dedicating 10+ hours weekly to enhance technical proficiency and teamwork skills.</p>
              </div>
              <div className="responsibility-item">
                <h3>Lecture Delivery</h3>
                <p>Delivered engaging lectures to groups of up to 40 students, utilizing innovative teaching methodologies.</p>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2>Teaching Achievements & Methodology</h2>
            <div className="achievements-list">
              <div className="achievement-item">
                <h3>60+ ML Models</h3>
                <p>Successfully guided students through the development of over 60 unique machine learning models, ensuring understanding of core concepts through hands-on labs and real-world projects.</p>
              </div>
              <div className="achievement-item">
                <h3>200+ Students Mentored</h3>
                <p>Provided personalized mentorship to over 200 undergraduate students, adapting teaching methods to individual learning styles and helping them master Python and ML applications.</p>
              </div>
              <div className="achievement-item">
                <h3>40 Student Lectures</h3>
                <p>Delivered engaging lectures to groups of up to 40 students, utilizing cutting-edge teaching methodologies to maintain high engagement and comprehension rates.</p>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2>Technologies Taught</h2>
            <div className="tech-grid">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Neural Networks</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Containerization</span>
              <span className="tech-tag">Data Analysis</span>
              <span className="tech-tag">Scikit-learn</span>
              <span className="tech-tag">TensorFlow</span>
            </div>
          </div>
        </div>

        <div className="experience-navigation">
          <Link to="/" className="back-button">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IUExperience; 