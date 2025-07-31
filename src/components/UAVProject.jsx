import { useNavigate } from 'react-router-dom';
import '../App.css';

const UAVProject = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">JPPD</div>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Project Content */}
      <div className="project-container">
        <div className="project-header">
          <div className="project-image-large">
            <div className="project-placeholder">UAV</div>
          </div>
          <div className="project-info">
            <h1>Unmanned Aerial Vehicle</h1>
            <p className="project-subtitle">Autonomous Flight Control System</p>
            <div className="project-meta">
              <span className="project-date">January 2025 - May 2025</span>
              <span className="project-duration">5 months</span>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <h2>Project Overview</h2>
            <p>
              Engineered and built a full-body UAV equipped with advanced flight control systems. 
              The project involved designing and implementing a complete autonomous flight system 
              with real-time sensor processing and precise control algorithms.
            </p>
          </div>

          <div className="project-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <h3>Hardware Components</h3>
                <ul>
                  <li>6 high-precision sensors (IMU, GPS, Altimeter, etc.)</li>
                  <li>3 high-torque actuators for flight control</li>
                  <li>Arduino Mega microcontroller</li>
                  <li>Custom-built carbon fiber frame</li>
                  <li>Brushless motors with ESCs</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>Software Architecture</h3>
                <ul>
                  <li>4,450 lines of optimized C++ code</li>
                  <li>Dual PID controllers for pitch and roll</li>
                  <li>Real-time sensor fusion algorithms</li>
                  <li>Autonomous navigation system</li>
                  <li>Fail-safe mechanisms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🛫 Autonomous Flight</h3>
                <p>Complete autonomous operation with GPS waypoint navigation and obstacle avoidance</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Real-time Control</h3>
                <p>Sub-10ms response time for flight control inputs with optimized PID tuning</p>
              </div>
              <div className="feature-card">
                <h3>🎯 Precision Control</h3>
                <p>Ziegler-Nichols method implementation for optimal PID controller performance</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Safety Systems</h3>
                <p>Multiple fail-safe mechanisms including emergency landing and return-to-home</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Technical Challenges & Solutions</h2>
            <div className="challenges-list">
              <div className="challenge-item">
                <h3>Challenge: System Lag</h3>
                <p><strong>Problem:</strong> Initial implementation had 50ms+ response time causing unstable flight</p>
                <p><strong>Solution:</strong> Optimized sensor fusion algorithms and implemented interrupt-driven control loops, reducing response time to under 10ms</p>
              </div>
              <div className="challenge-item">
                <h3>Challenge: PID Tuning</h3>
                <p><strong>Problem:</strong> Manual PID tuning was time-consuming and suboptimal</p>
                <p><strong>Solution:</strong> Implemented Ziegler-Nichols method for systematic PID parameter optimization</p>
              </div>
              <div className="challenge-item">
                <h3>Challenge: Sensor Integration</h3>
                <p><strong>Problem:</strong> Multiple sensors providing conflicting data</p>
                <p><strong>Solution:</strong> Developed custom sensor fusion algorithm using Kalman filtering for accurate state estimation</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Arduino</span>
              <span className="tech-tag">PID Control</span>
              <span className="tech-tag">Embedded Systems</span>
              <span className="tech-tag">Sensor Fusion</span>
              <span className="tech-tag">Real-time Systems</span>
              <span className="tech-tag">Control Theory</span>
              <span className="tech-tag">Hardware Integration</span>
            </div>
          </div>

          <div className="project-section">
            <h2>Results & Impact</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>🎯 Performance</h3>
                <p>Stable autonomous flight with ±0.5m position accuracy</p>
              </div>
              <div className="result-item">
                <h3>⚡ Efficiency</h3>
                <p>90% reduction in system response time (50ms → 5ms)</p>
              </div>
              <div className="result-item">
                <h3>🛡️ Reliability</h3>
                <p>100% successful autonomous missions with zero crashes</p>
              </div>
              <div className="result-item">
                <h3>📈 Scalability</h3>
                <p>Modular design allows easy integration of additional sensors and features</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-navigation">
          <button onClick={() => navigate('/')} className="btn-secondary">
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default UAVProject; 