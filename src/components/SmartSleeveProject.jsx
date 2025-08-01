import { useNavigate } from 'react-router-dom';
import '../App.css';

const SmartSleeveProject = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">JPPD</div>
        <div className="nav-links">
          <button 
            onClick={() => navigate('/')} 
            className="back-button"
            aria-label="Return to main portfolio"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/');
              }
            }}
          >
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Project Content */}
      <div className="project-container">
        <div className="project-header">
          <div className="project-image-large">
            <div className="project-placeholder">Smart Sleeve</div>
          </div>
          <div className="project-info">
            <h1>Smart Sleeve - Muscle Fatigue Detection</h1>
            <p className="project-subtitle">Wearable Technology for Athletic Performance</p>
            <div className="project-meta">
              <span className="project-date">August 2024 - January 2025</span>
              <span className="project-duration">6 months</span>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <h2>Project Overview</h2>
            <p>
              Developed an innovative wearable device that monitors muscle fatigue in real-time 
              using advanced sensor technology and machine learning algorithms. The Smart Sleeve 
              provides athletes and fitness enthusiasts with actionable insights to optimize 
              training and prevent injury.
            </p>
          </div>

          <div className="project-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <h3>Hardware Components</h3>
                <ul>
                  <li>MAX32630 microcontroller for low-power operation</li>
                  <li>3 concurrent EMG sensors for muscle activation monitoring</li>
                  <li>Flexible compression sleeve with embedded electronics</li>
                  <li>Bluetooth Low Energy (BLE) for wireless communication</li>
                  <li>Rechargeable lithium-ion battery (8-hour runtime)</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>Software Architecture</h3>
                <ul>
                  <li>Real-time signal processing algorithms</li>
                  <li>Neural network for fatigue prediction</li>
                  <li>React.js web interface for data visualization</li>
                  <li>Python backend for data analysis</li>
                  <li>Mobile app for real-time monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>💪 Real-time Monitoring</h3>
                <p>Continuous muscle activation tracking with 100Hz sampling rate</p>
              </div>
              <div className="feature-card">
                <h3>🧠 AI-Powered Analysis</h3>
                <p>Neural network trained on 36+ hours of muscle activation data</p>
              </div>
              <div className="feature-card">
                <h3>📱 User-Friendly Interface</h3>
                <p>Intuitive web and mobile interfaces for data visualization</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Low-Power Design</h3>
                <p>Optimized for 8+ hours of continuous operation</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Technical Challenges & Solutions</h2>
            <div className="challenges-list">
              <div className="challenge-item">
                <h3>Challenge: Sensor Accuracy</h3>
                <p><strong>Problem:</strong> EMG sensors providing noisy and inconsistent data</p>
                <p><strong>Solution:</strong> Implemented advanced signal filtering and calibration algorithms, achieving 95% accuracy in fatigue detection</p>
              </div>
              <div className="challenge-item">
                <h3>Challenge: Power Management</h3>
                <p><strong>Problem:</strong> High power consumption limiting battery life</p>
                <p><strong>Solution:</strong> Optimized microcontroller sleep modes and implemented efficient data transmission protocols</p>
              </div>
              <div className="challenge-item">
                <h3>Challenge: Comfort & Durability</h3>
                <p><strong>Problem:</strong> Electronics causing discomfort during exercise</p>
                <p><strong>Solution:</strong> Designed flexible PCB and integrated electronics seamlessly into compression fabric</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Data Analysis & Machine Learning</h2>
            <div className="ml-section">
              <h3>Training Data</h3>
              <ul>
                <li>36+ hours of muscle activation recordings</li>
                <li>Data from 15+ different exercise types</li>
                <li>Various intensity levels and fatigue states</li>
                <li>Cross-validation with multiple subjects</li>
              </ul>
              
              <h3>Neural Network Architecture</h3>
              <ul>
                <li>Convolutional Neural Network (CNN) for pattern recognition</li>
                <li>LSTM layers for temporal sequence analysis</li>
                <li>Real-time inference on embedded device</li>
                <li>95% accuracy in fatigue prediction</li>
              </ul>
            </div>
          </div>

          <div className="project-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C++</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Neural Networks</span>
              <span className="tech-tag">Embedded Systems</span>
              <span className="tech-tag">Signal Processing</span>
              <span className="tech-tag">Wearable Technology</span>
            </div>
          </div>

          <div className="project-section">
            <h2>Results & Impact</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>🎯 Accuracy</h3>
                <p>95% accuracy in muscle fatigue detection</p>
              </div>
              <div className="result-item">
                <h3>⚡ Performance</h3>
                <p>Real-time processing with under 100ms latency</p>
              </div>
              <div className="result-item">
                <h3>🔋 Battery Life</h3>
                <p>8+ hours of continuous operation</p>
              </div>
              <div className="result-item">
                <h3>📊 Data Insights</h3>
                <p>36+ hours of analyzed muscle activation data</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-navigation">
          <button 
            onClick={() => navigate('/')} 
            className="btn-secondary"
            aria-label="Return to main portfolio"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/');
              }
            }}
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartSleeveProject; 