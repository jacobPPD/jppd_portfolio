import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import './App.css'
import SplitText from './SplitText'
import ScrollFloat from './ScrollFloat'
import Magnet from './Magnet'
import GlassIcons from './GlassIcons'
import Dock from './Dock'
import { VscHome, VscPerson, VscBriefcase, VscProject, VscTools, VscMail } from 'react-icons/vsc'
import Threads from './Threads'
import SpotlightCard from './SpotlightCard'

// Lazy load project components for better performance
const UAVProject = lazy(() => import('./components/UAVProject'))
const SmartSleeveProject = lazy(() => import('./components/SmartSleeveProject'))
const StockPredictionProject = lazy(() => import('./components/StockPredictionProject'))

// Lazy load experience components
const AlliedExperience = lazy(() => import('./components/AlliedExperience'))
const IUExperience = lazy(() => import('./components/IUExperience'))
const FrontendShowcase = lazy(() => import('./components/FrontendShowcase'))

// WebGL Debug Component
const WebGLDebug = () => {
  const [webglInfo, setWebglInfo] = useState(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      setWebglInfo({
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER),
        version: gl.getParameter(gl.VERSION),
        unmaskedRenderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Not available',
        unmaskedVendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Not available'
      });
    } else {
      setWebglInfo({ error: 'WebGL not supported' });
    }
  }, []);

  if (!webglInfo) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '10px', 
      fontSize: '12px', 
      zIndex: 1000,
      maxWidth: '300px'
    }}>
      <strong>WebGL Debug Info:</strong><br/>
      {webglInfo.error ? (
        <span style={{color: 'red'}}>{webglInfo.error}</span>
      ) : (
        <>
          Vendor: {webglInfo.vendor}<br/>
          Renderer: {webglInfo.renderer}<br/>
          Version: {webglInfo.version}<br/>
          Unmasked Renderer: {webglInfo.unmaskedRenderer}<br/>
          Unmasked Vendor: {webglInfo.unmaskedVendor}
        </>
      )}
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [showDebug, setShowDebug] = useState(false)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Debug mode toggle (hold Ctrl+Shift+D)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setShowDebug(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAnimationComplete = () => {
    console.log('Title animation completed!');
  };

  const handleImageError = (e) => {
    console.log('❌ Image failed to load:', e.target.src);
    console.log('Error details:', e.target.error);
    e.target.style.display = 'none';
    e.target.nextSibling.style.opacity = '1';
  };

  const handleImageLoad = (e) => {
    console.log('✅ Image loaded successfully:', e.target.src);
    console.log('Image dimensions:', e.target.naturalWidth, 'x', e.target.naturalHeight);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Loading Portfolio...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {showDebug && <WebGLDebug />}
      <Routes>
        <Route path="/uav" element={
          <Suspense fallback={
            <div className="loading-screen">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <h2>Loading UAV Project...</h2>
              </div>
            </div>
          }>
            <UAVProject />
          </Suspense>
        } />
        <Route path="/smart-sleeve" element={
          <Suspense fallback={
            <div className="loading-screen">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <h2>Loading Smart Sleeve Project...</h2>
              </div>
            </div>
          }>
            <SmartSleeveProject />
          </Suspense>
        } />
        <Route path="/stock-prediction" element={
          <Suspense fallback={
            <div className="loading-screen">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <h2>Loading Stock Prediction Project...</h2>
              </div>
            </div>
          }>
            <StockPredictionProject />
          </Suspense>
        } />
        <Route path="/allied-experience" element={
          <Suspense fallback={
            <div className="loading-screen">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <h2>Loading Allied Solutions Experience...</h2>
              </div>
            </div>
          }>
            <AlliedExperience />
          </Suspense>
        } />
        <Route path="/iu-experience" element={
          <Suspense fallback={
            <div className="loading-screen">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <h2>Loading Indiana University Experience...</h2>
              </div>
            </div>
          }>
            <IUExperience />
          </Suspense>
        } />
        <Route path="/frontend-showcase" element={
          <Suspense fallback={
            <div className="loading-screen">
              <div className="loading-content">
                <div className="loading-spinner"></div>
                <h2>Loading Frontend Showcase...</h2>
              </div>
            </div>
          }>
            <FrontendShowcase />
          </Suspense>
        } />
        <Route path="/" element={
          <>
            {/* Dock Navigation */}
            <Dock 
              items={[
                { 
                  icon: <VscHome size={24} />, 
                  label: 'Home', 
                  onClick: () => scrollToSection('home') 
                },
                { 
                  icon: <VscPerson size={24} />, 
                  label: 'About', 
                  onClick: () => scrollToSection('about') 
                },
                { 
                  icon: <VscBriefcase size={24} />, 
                  label: 'Experience', 
                  onClick: () => scrollToSection('experience') 
                },
                { 
                  icon: <VscProject size={24} />, 
                  label: 'Projects', 
                  onClick: () => scrollToSection('projects') 
                },
                { 
                  icon: <VscTools size={24} />, 
                  label: 'Skills', 
                  onClick: () => scrollToSection('skills') 
                },
                { 
                  icon: <VscMail size={24} />, 
                  label: 'Contact', 
                  onClick: () => scrollToSection('contact') 
                },
              ]}
              panelHeight={80}
              baseItemSize={60}
              magnification={90}
            />

            {/* Hero Section */}
            <section id="home" className="hero">
              {/* Threads Background */}
              <div className="threads-background">
                <Threads
                  amplitude={1}
                  distance={0}
                  enableMouseInteraction={true}
                  color={[0.4, 0.2, 0.8]} // Purple color to match your theme
                />
              </div>
              <div className="hero-content">
                <div className="hero-text-container">
                  <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='top bottom'
                    scrollEnd='top center'
                    stagger={0.03}
                    containerClassName="hero-title-line"
                    textClassName="hero-title-text"
                  >
                    Hello World
                  </ScrollFloat>
                  
                  <div className="hero-spacer"></div>
                  
                  <ScrollFloat
                    animationDuration={1.2}
                    ease='back.inOut(2)'
                    scrollStart='top bottom+=20%'
                    scrollEnd='top center'
                    stagger={0.03}
                    containerClassName="hero-title-line"
                    textClassName="hero-title-text"
                  >
                    I'm Jacob Papas Dennerline
                  </ScrollFloat>
                  
                  <ScrollFloat
                    animationDuration={1.4}
                    ease='back.inOut(2)'
                    scrollStart='top bottom+=10%'
                    scrollEnd='top center'
                    stagger={0.03}
                    containerClassName="hero-subtitle-line"
                    textClassName="hero-subtitle-text"
                  >
                    Full Stack Software Engineering and Masters Student
                  </ScrollFloat>
                </div>
                
                <div className="hero-magnet-buttons">
                  <Magnet padding={100} disabled={false} magnetStrength={20}>
                    <button onClick={() => scrollToSection('projects')} className="magnet-btn-primary">
                      View My Work
                    </button>
                  </Magnet>
                  
                  <Magnet padding={100} disabled={false} magnetStrength={20}>
                    <button onClick={() => scrollToSection('contact')} className="magnet-btn-secondary">
                      Get In Touch
                    </button>
                  </Magnet>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
              <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                  <div className="about-text">
                    <p>
                      I'm an Accelerated Master's student at Indiana University's Luddy School of Informatics, 
                      Computing, and Engineering, specializing in Intelligent Systems Engineering with a focus on 
                      Computer Engineering. With a GPA of 3.73/4.00, I'm passionate about machine learning, 
                      embedded systems, and creating innovative solutions that bridge the gap between hardware 
                      and software.
                    </p>
                    <p>
                      Currently working as a Full-Stack Software Engineering Intern at Allied Solutions, 
                      I'm actively contributing to the Centerpoint platform using C# and React.js. I've 
                      delivered 10+ feature stories and collaborated with cross-functional teams to migrate 
                      legacy services into scalable cloud-native architectures.
                    </p>
                    <p>
                      When I'm not coding or studying, you can find me exploring aviation, playing board games, 
                      enjoying Greek cuisine, working on 3D printing projects, or listening to vinyl records.
                    </p>
                  </div>
                  <div className="about-stats">
                    <div className="stat-item">
                      <h3>3.73</h3>
                      <p>GPA</p>
                    </div>
                    <div className="stat-item">
                      <h3>10+</h3>
                      <p>Features Delivered</p>
                    </div>
                    <div className="stat-item">
                      <h3>200+</h3>
                      <p>Students Mentored</p>
                    </div>
                    <div className="stat-item">
                      <h3>3</h3>
                      <p>Languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
              <div className="container">
                <h2>Professional Experience</h2>
                <div className="experience-grid">
                  <Link to="/allied-experience" className="experience-link">
                    <SpotlightCard className="experience-spotlight-card assistant-instructor-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="experience-header">
                        <h3>Full-Stack Software Engineering Intern</h3>
                        <span className="company">Allied Solutions</span>
                        <span className="duration">May 2025 - Present</span>
                      </div>
                      <div className="experience-skills">
                        <div className="skill-box">C# Development</div>
                        <div className="skill-box">React.js</div>
                        <div className="skill-box">Agile/Scrum</div>
                      </div>
                    </SpotlightCard>
                  </Link>
                  <Link to="/iu-experience" className="experience-link">
                    <SpotlightCard className="experience-spotlight-card assistant-instructor-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="experience-header">
                        <h3>Assistant Instructor</h3>
                        <span className="company">ENGR-E 222, ENGR-E 101</span>
                        <span className="duration">August 2023 - May 2025</span>
                      </div>
                      <div className="experience-skills">
                        <div className="skill-box">Machine Learning</div>
                        <div className="skill-box">Python</div>
                        <div className="skill-box">Teaching</div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
              <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                  <Link to="/uav" className="project-link">
                    <SpotlightCard className="project-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="project-header">
                        <div className="project-image-placeholder">
                          <img src="./logos/UAV.png" alt="UAV Project" onError={handleImageError} onLoad={handleImageLoad} />
                        </div>
                        <h3>Unmanned Aerial Vehicle</h3>
                      </div>
                      <div className="project-skills">
                        <div className="skill-box">C++</div>
                        <div className="skill-box">Arduino</div>
                        <div className="skill-box">PID Control</div>
                      </div>
                    </SpotlightCard>
                  </Link>

                  <Link to="/smart-sleeve" className="project-link">
                    <SpotlightCard className="project-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="project-header">
                        <div className="project-image-placeholder">
                          <img src="./logos/smartsleeve.png" alt="Smart Sleeve Project" onError={handleImageError} onLoad={handleImageLoad} />
                        </div>
                        <h3>Smart Sleeve</h3>
                      </div>
                      <div className="project-skills">
                        <div className="skill-box">Python</div>
                        <div className="skill-box">C++</div>
                        <div className="skill-box">Machine Learning</div>
                      </div>
                    </SpotlightCard>
                  </Link>

                  <Link to="/stock-prediction" className="project-link">
                    <SpotlightCard className="project-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="project-header">
                        <div className="project-image-placeholder">
                          <img src="./logos/Stock.png" alt="Stock Prediction Project" onError={handleImageError} onLoad={handleImageLoad} />
                        </div>
                        <h3>Stock Prediction Model</h3>
                      </div>
                      <div className="project-skills">
                        <div className="skill-box">Python</div>
                        <div className="skill-box">React.js</div>
                        <div className="skill-box">CNN</div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills">
              <div className="container">
                <h2>Professional Skillset</h2>
                <GlassIcons 
                  items={[
                    { icon: <img src="./logos/Cpp.png" alt="C++" onError={handleImageError} onLoad={handleImageLoad} />, color: 'blue', label: 'C++' },
                    { icon: <img src="./logos/C.png" alt="C" onError={handleImageError} onLoad={handleImageLoad} />, color: 'indigo', label: 'C' },
                    { icon: <img src="./logos/Csharp.png" alt="C#" onError={handleImageError} onLoad={handleImageLoad} />, color: 'purple', label: 'C#' },
                    { icon: <img src="./logos/Python.png" alt="Python" onError={handleImageError} onLoad={handleImageLoad} />, color: 'green', label: 'Python' },
                    { icon: <img src="./logos/SQL.png" alt="SQL" onError={handleImageError} onLoad={handleImageLoad} />, color: 'teal', label: 'SQL' },
                    { icon: <img src="./logos/MATLAB.png" alt="MATLAB" onError={handleImageError} onLoad={handleImageLoad} />, color: 'orange', label: 'MATLAB' },
                    { icon: <img src="./logos/react.png" alt="React" onError={handleImageError} onLoad={handleImageLoad} />, color: 'cyan', label: 'React' },
                    { icon: <img src="./logos/AWS.png" alt="AWS" onError={handleImageError} onLoad={handleImageLoad} />, color: 'amber', label: 'AWS' },
                    { icon: <img src="./logos/Docker.png" alt="Docker" onError={handleImageError} onLoad={handleImageLoad} />, color: 'blue', label: 'Docker' },
                    { icon: <img src="./logos/GitHub.png" alt="GitHub" onError={handleImageError} onLoad={handleImageLoad} />, color: 'emerald', label: 'GitHub' },
                    { icon: <img src="./logos/API.png" alt="API Development" onError={handleImageError} onLoad={handleImageLoad} />, color: 'violet', label: 'API Development' },
                    { icon: <img src="./logos/MachineLearning.png" alt="Machine Learning" onError={handleImageError} onLoad={handleImageLoad} />, color: 'rose', label: 'Machine Learning' },
                    { icon: <img src="./logos/SolidWorks.png" alt="SolidWorks" onError={handleImageError} onLoad={handleImageLoad} />, color: 'sky', label: 'SolidWorks' },
                    { icon: <img src="./logos/Fusion.png" alt="Fusion360" onError={handleImageError} onLoad={handleImageLoad} />, color: 'fuchsia', label: 'Fusion360' },
                    { icon: <img src="./logos/VS.png" alt="Visual Studio" onError={handleImageError} onLoad={handleImageLoad} />, color: 'lime', label: 'Visual Studio' }
                  ]}
                  className="skills-glass-icons"
                />
                
                {/* Centered last row */}
                <div className="skills-last-row">
                  <GlassIcons 
                    items={[
                      { icon: <img src="./logos/Postman.png" alt="Postman" onError={handleImageError} onLoad={handleImageLoad} />, color: 'orange', label: 'Postman' },
                      { icon: <img src="./logos/Excel.png" alt="Excel" onError={handleImageError} onLoad={handleImageLoad} />, color: 'green', label: 'Excel' }
                    ]}
                    className="skills-glass-icons-last-row"
                  />
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
              <div className="container">
                <h2>Get In Touch</h2>
                <div className="contact-content">
                  <div className="contact-info">
                    <h3>Let's work together!</h3>
                    <p>I'm always interested in new opportunities and exciting projects in software engineering, machine learning, and embedded systems.</p>
                    <div className="contact-links">
                      <a href="mailto:jpapasd@iu.edu" className="contact-link">
                        jpapasd@iu.edu
                      </a>
                      <a href="https://github.com/jacobPPD" target="_blank" rel="noopener noreferrer" className="contact-link">
                        GitHub
                      </a>
                      <a href="https://linkedin.com/in/jacobpapasdennerline/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="footer">
              <div className="container">
                <p>&copy; 2024 Jacob Papas Dennerline. All rights reserved.</p>
              </div>
            </footer>
          </>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App 