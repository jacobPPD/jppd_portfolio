import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import SplitText from './SplitText'
import UAVProject from './components/UAVProject'
import SmartSleeveProject from './components/SmartSleeveProject'
import StockPredictionProject from './components/StockPredictionProject'

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAnimationComplete = () => {
    console.log('Title animation completed!');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">JPPD</div>
        <div className="nav-links">
          <button 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className={activeSection === 'about' ? 'active' : ''} 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={activeSection === 'experience' ? 'active' : ''} 
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'contact' ? 'active' : ''} 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <SplitText
            text="Hello World, I'm Jacob Papas Dennerline"
            className="hero-title"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
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
            <div className="project-card" onClick={() => navigate('/project/uav')}>
              <div className="project-image">
                <div className="project-placeholder">UAV</div>
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
              </div>
            </div>

            <div className="project-card" onClick={() => navigate('/project/smart-sleeve')}>
              <div className="project-image">
                <div className="project-placeholder">Smart Sleeve</div>
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
              </div>
            </div>

            <div className="project-card" onClick={() => navigate('/project/stock-prediction')}>
              <div className="project-image">
                <div className="project-placeholder">Stock Prediction</div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-items">
                <span>C</span>
                <span>C++</span>
                <span>C#</span>
                <span>Python</span>
                <span>React.js</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Software & Tools</h3>
              <div className="skill-items">
                <span>MATLAB</span>
                <span>Visual Studio</span>
                <span>SolidWorks</span>
                <span>Microsoft Excel & Access</span>
                <span>Fusion360</span>
                <span>Revit</span>
                <span>PostMan</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-items">
                <span>GitHub</span>
                <span>SSMS</span>
                <span>Machine Learning</span>
                <span>Model & System Optimization</span>
                <span>VMs</span>
                <span>VEs</span>
                <span>APIs</span>
                <span>Docker</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                <span>English (Native)</span>
                <span>Greek (Proficient)</span>
                <span>French (Proficient)</span>
              </div>
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
                <a href="tel:+18473723982" className="contact-link">
                  (847) 372-3982
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
    </div>
  )
}

// Main App Component with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/uav" element={<UAVProject />} />
        <Route path="/project/smart-sleeve" element={<SmartSleeveProject />} />
        <Route path="/project/stock-prediction" element={<StockPredictionProject />} />
      </Routes>
    </Router>
  )
}

export default App 