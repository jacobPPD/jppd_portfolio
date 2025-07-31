import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <h1>Hello World, I'm Jacob</h1>
          <h2>Full Stack Developer</h2>
          <p>Passionate about creating beautiful, functional web applications</p>
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
                I'm a passionate developer with a love for creating intuitive and 
                efficient web applications. I specialize in React, JavaScript, and 
                modern web technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 1</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce application built with React and Node.js</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 2</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>TypeScript</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 3</div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>This very portfolio website built with React and modern CSS</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span>React</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>SASS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span>Node.js</span>
                <span>Express</span>
                <span>Python</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span>Git</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>Figma</span>
                <span>Jest</span>
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
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-links">
                <a href="mailto:jpapasd@iu.edu" className="contact-link">
                  your.email@example.com
                </a>
                <a href="https://github.com/jacobPPD" target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub
                </a>asdasdasd
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
          <p>&copy; 2024 [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
