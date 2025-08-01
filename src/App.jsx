import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import './App.css'
import SplitText from './SplitText'
import ScrollFloat from './ScrollFloat'

// Lazy load project components for better performance
const UAVProject = lazy(() => import('./components/UAVProject'))
const SmartSleeveProject = lazy(() => import('./components/SmartSleeveProject'))
const StockPredictionProject = lazy(() => import('./components/StockPredictionProject'))

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

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
        <Route path="/" element={
          <>
            {/* Navigation */}
            <nav className="navbar">
              <div className="nav-brand">JPPD</div>
              <div className="nav-links">
                <button 
                  className={activeSection === 'home' ? 'active' : ''} 
                  onClick={() => scrollToSection('home')}
                  aria-label="Navigate to Home section"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('home');
                    }
                  }}
                >
                  Home
                </button>
                <button 
                  className={activeSection === 'about' ? 'active' : ''} 
                  onClick={() => scrollToSection('about')}
                  aria-label="Navigate to About section"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('about');
                    }
                  }}
                >
                  About
                </button>
                <button 
                  className={activeSection === 'experience' ? 'active' : ''} 
                  onClick={() => scrollToSection('experience')}
                  aria-label="Navigate to Experience section"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('experience');
                    }
                  }}
                >
                  Experience
                </button>
                <button 
                  className={activeSection === 'projects' ? 'active' : ''} 
                  onClick={() => scrollToSection('projects')}
                  aria-label="Navigate to Projects section"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('projects');
                    }
                  }}
                >
                  Projects
                </button>
                <button 
                  className={activeSection === 'skills' ? 'active' : ''} 
                  onClick={() => scrollToSection('skills')}
                  aria-label="Navigate to Skills section"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('skills');
                    }
                  }}
                >
                  Skills
                </button>
                <button 
                  className={activeSection === 'contact' ? 'active' : ''} 
                  onClick={() => scrollToSection('contact')}
                  aria-label="Navigate to Contact section"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('contact');
                    }
                  }}
                >
                  Contact
                </button>
              </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
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
                    scrollStart='top bottom'
                    scrollEnd='center center'
                    stagger={0.04}
                    containerClassName="hero-title-line"
                    textClassName="hero-title-text"
                  >
                    I'm Jacob Papas Dennerline
                  </ScrollFloat>
                  
                  <ScrollFloat
                    animationDuration={1.4}
                    ease='back.inOut(2)'
                    scrollStart='top bottom'
                    scrollEnd='center center'
                    stagger={0.05}
                    containerClassName="hero-subtitle-line"
                    textClassName="hero-subtitle-text"
                  >
                    Full Stack Software Engineering and Masters Student
                  </ScrollFloat>
                </div>
                
                <div className="hero-info">
                  <h2>Full-Stack Software Engineer & Intelligent Systems Engineer</h2>
                  <p>Passionate about machine learning, embedded systems, and creating innovative solutions</p>
                  <div className="hero-buttons">
                    <button onClick={() => scrollToSection('projects')} className="btn-primary">
                      View My Work
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                      Get In Touch
                    </button>
                  </div>
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
                  <div className="experience-card">
                    <div className="experience-header">
                      <h3>Full-Stack Software Engineering Intern</h3>
                      <span className="company">Allied Solutions</span>
                      <span className="duration">May 2025 - Present</span>
                    </div>
                    <ul>
                      <li>Developing Backend and Frontend features for the Centerpoint platform using C# and React.js</li>
                      <li>Actively contributing to 5 sprint releases and delivering 10 feature stories with full testing and deployment support</li>
                      <li>Collaborating cross-functionally with Engineering and AI development teams to migrate legacy services</li>
                      <li>Delivering interdepartmental intern capstone project to a department of 200 engineers</li>
                    </ul>
                  </div>
                  <div className="experience-card">
                    <div className="experience-header">
                      <h3>Assistant Instructor</h3>
                      <span className="company">Indiana University - ENGR-E 222, ENGR-E 101</span>
                      <span className="duration">August 2023 - May 2025</span>
                    </div>
                    <ul>
                      <li>Facilitated development of over 60 unique machine learning models by guiding 60 students through hands-on labs</li>
                      <li>Mentored over 200 undergraduate students in Python and advanced ML applications and containerization</li>
                      <li>Delivered engaging lectures to groups of up to 40 students, utilizing innovative teaching methodologies</li>
                      <li>Dedicated 10+ hours weekly to enhance technical proficiency and teamwork skills of students</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
              <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                  <div className="project-card">
                    <div className="project-image">
                      <div className="project-placeholder" role="img" aria-label="UAV Project">UAV</div>
                    </div>
                    <div className="project-content">
                      <h3>Unmanned Aerial Vehicle</h3>
                      <p>Engineered and built a full body UAV with 6 sensors, 3 actuators, and Arduino microcontroller. Implemented 2 PID controllers using Ziegler-Nichols method for precise flight control.</p>
                      <div className="project-tech">
                        <span>C++</span>
                        <span>Arduino</span>
                        <span>PID Control</span>
                        <span>Embedded Systems</span>
                      </div>
                      <div className="project-highlights">
                        <span>4450 lines of autopilot code</span>
                        <span>Stable autonomous flight</span>
                        <span>Real-time control system</span>
                      </div>
                      <div className="project-actions">
                        <Link 
                          to="/uav" 
                          className="btn-primary"
                          aria-label="View detailed information about the UAV project"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="project-card">
                    <div className="project-image">
                      <div className="project-placeholder" role="img" aria-label="Smart Sleeve Project">Smart Sleeve</div>
                    </div>
                    <div className="project-content">
                      <h3>Smart Sleeve - Muscle Fatigue Detection</h3>
                      <p>Wired, coded, and implemented 3 concurrent sensors to a MAX32630 microcontroller hosted in a compression sleeve for muscle activation monitoring.</p>
                      <div className="project-tech">
                        <span>Python</span>
                        <span>C++</span>
                        <span>React.js</span>
                        <span>Machine Learning</span>
                        <span>Neural Networks</span>
                      </div>
                      <div className="project-highlights">
                        <span>36+ hours of muscle activation data</span>
                        <span>Wearable interface</span>
                        <span>Real-time fatigue detection</span>
                      </div>
                      <div className="project-actions">
                        <Link 
                          to="/smart-sleeve" 
                          className="btn-primary"
                          aria-label="View detailed information about the Smart Sleeve project"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="project-card">
                    <div className="project-image">
                      <div className="project-placeholder" role="img" aria-label="Stock Prediction Project">Stock Prediction</div>
                    </div>
                    <div className="project-content">
                      <h3>Stock Prediction Model</h3>
                      <p>Developed a high-accuracy prediction model leveraging Convolutional Neural Networks to analyze stock movement patterns from five major stocks.</p>
                      <div className="project-tech">
                        <span>Python</span>
                        <span>React.js</span>
                        <span>CNN</span>
                        <span>Machine Learning</span>
                      </div>
                      <div className="project-highlights">
                        <span>40+ stock movement trends</span>
                        <span>Web interface for visualization</span>
                        <span>Real-time data analysis</span>
                      </div>
                      <div className="project-actions">
                        <Link 
                          to="/stock-prediction" 
                          className="btn-primary"
                          aria-label="View detailed information about the Stock Prediction project"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills">
              <div className="container">
                <h2>Professional Skillset</h2>
                <div className="skills-grid">
                  <div className="skill-box">
                    <img 
                      src="./logos/Cpp.png" 
                      alt="C++" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>C++</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/C.png" 
                      alt="C" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>C</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/Csharp.png" 
                      alt="C#" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>C#</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/Python.png" 
                      alt="Python" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Python</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/SQL.png" 
                      alt="SQL" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>SQL</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/MATLAB.png" 
                      alt="MATLAB" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>MATLAB</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/react.png" 
                      alt="React" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>React</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/AWS.png" 
                      alt="AWS" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>AWS</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/Docker.png" 
                      alt="Docker" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Docker</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/GitHub.png" 
                      alt="GitHub" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>GitHub</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/API.png" 
                      alt="API Development" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>API Development</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/MachineLearning.png" 
                      alt="Machine Learning" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Machine Learning</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/SolidWorks.png" 
                      alt="SolidWorks" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>SolidWorks</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/Fusion.png" 
                      alt="Fusion360" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Fusion360</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/VS.png" 
                      alt="Visual Studio" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Visual Studio</span>
                  </div>
                </div>
                
                {/* Centered last row */}
                <div className="skills-last-row">
                  <div className="skill-box">
                    <img 
                      src="./logos/Postman.png" 
                      alt="Postman" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Postman</span>
                  </div>
                  <div className="skill-box">
                    <img 
                      src="./logos/Excel.png" 
                      alt="Excel" 
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    <span>Excel</span>
                  </div>
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