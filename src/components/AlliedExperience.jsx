import React from 'react';
import { Link } from 'react-router-dom';
import './ExperienceDetail.css';
import StarBorder from '../StarBorder';

const AlliedExperience = () => {
  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-image-large">
            <img 
              src="./logos/Allied.png" 
              alt="Allied Solutions Logo" 
              className="experience-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="experience-placeholder" role="img" aria-label="Allied Solutions" style={{ display: 'none' }}>AS</div>
          </div>
          <div className="experience-info">
            <h1>Full-Stack Software Engineering Intern</h1>
            <div className="experience-subtitle">Allied Solutions</div>
            <div className="experience-meta">
              <span>May 2025 - Present</span>
              <span>Indianapolis, IN</span>
            </div>
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h2>Role Overview</h2>
            <p>
              As a Full-Stack Software Engineering Intern at Allied Solutions, I work on the Centerpoint platform, 
              contributing to both backend and frontend development using C# and React.js. I actively participate 
              in sprint releases and collaborate with cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>

          <div className="experience-section">
            <h2>Key Responsibilities</h2>
            <div className="responsibilities-grid">
                             <div className="responsibility-item">
                 <h3>Backend Development</h3>
                 <p>Working closely with Engineering and AI development teams to migrate legacy services and implement modern solutions using C# for the Centerpoint platform, ensuring scalability and performance.</p>
                                   <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Link to="/backend-showcase" className="frontend-link-btn">
                      View Backend →
                    </Link>
                  </div>
               </div>
               <div className="responsibility-item">
                 <h3>Frontend Development</h3>
                 <p>Building responsive and intuitive user interfaces using React.js, focusing on user experience and accessibility.</p>
                                   <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <Link to="/frontend-showcase" className="frontend-link-btn">
                      View Frontend →
                    </Link>
                  </div>
               </div>
              <div className="responsibility-item">
                <h3>Sprint Management</h3>
                <p>Actively contributing to 5 sprint releases, delivering 10 feature stories with comprehensive testing and deployment support.</p>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2>Technical Achievements</h2>
            <div className="achievements-list">
              <div className="achievement-item">
                <h3>Feature Development</h3>
                <p>Successfully delivered 10 feature stories with full testing and deployment support, ensuring high code quality and reliability.</p>
              </div>
              <div className="achievement-item">
                <h3>Legacy Migration</h3>
                <p>Collaborated on migrating legacy services to modern architectures, improving system performance and maintainability.</p>
              </div>
              <div className="achievement-item">
                <h3>Capstone Project</h3>
                <p>Delivered an interdepartmental intern capstone project to a department of 200 engineers, demonstrating technical leadership and communication skills.</p>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              <span className="tech-tag">C#</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML/CSS</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">Agile/Scrum</span>
              <span className="tech-tag">Testing</span>
              <span className="tech-tag">Deployment</span>
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

export default AlliedExperience; 