import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ExperienceDetail.css';
import DecryptedText from '../DecryptedText';

const BackendShowcase = () => {
  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-info">
            <h1>Backend Development</h1>
            <div className="experience-subtitle">Allied Solutions - Centerpoint Platform</div>
            <div className="experience-meta">
              <span>May 2025 - Present</span>
              <span>Indianapolis, IN</span>
            </div>
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h2>Backend Development Showcase</h2>
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem 2rem',
              background: 'rgba(139, 92, 246, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '16px',
              margin: '2rem 0'
            }}>
              <DecryptedText
                text="You know I can't show any of this part"
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                revealDirection="center"
                style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  display: 'block',
                  marginBottom: '1rem'
                }}
              />
              
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                marginTop: '2rem',
                lineHeight: '1.6'
              }}>
                Due to confidentiality agreements and security protocols, I cannot display 
                the backend code, architecture, or implementation details from my work at Allied Solutions.
              </p>
              
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                marginTop: '1rem',
                fontStyle: 'italic'
              }}>
                The backend work involves C# development, API design, database optimization, 
                and cloud-native architecture for the Centerpoint platform.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <h2>What I Can Share</h2>
            <div className="responsibilities-grid">
                                            <div className="responsibility-item">
                 <h3>Technologies Used</h3>
                 <p>C#, .NET Framework, SQL Server, Azure Cloud Services, REST APIs, Git version control, and Agile development methodologies.</p>
               </div>
              <div className="responsibility-item">
                <h3>Development Process</h3>
                <p>Working in cross-functional teams using Scrum methodology, participating in sprint planning, code reviews, and continuous integration/deployment.</p>
              </div>
              <div className="responsibility-item">
                <h3>Impact & Results</h3>
                <p>Successfully delivered 10+ feature stories with comprehensive testing and deployment support, contributing to 5 sprint releases.</p>
              </div>
            </div>
          </div>

                     <div className="experience-section">
             <h2>Key Responsibilities</h2>
             <div className="achievements-list">
               <div className="achievement-item">
                 <h3>Legacy Migration</h3>
                 <p>Collaborating with Engineering and AI development teams to migrate legacy services to modern cloud-native architectures, improving system performance and maintainability.</p>
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
    </div>
  );
};

export default BackendShowcase; 