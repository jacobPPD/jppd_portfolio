import { useNavigate } from 'react-router-dom';
import '../App.css';

const StockPredictionProject = () => {
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
            <div className="project-placeholder">Stock Prediction</div>
          </div>
          <div className="project-info">
            <h1>Stock Prediction Model</h1>
            <p className="project-subtitle">AI-Powered Financial Forecasting</p>
            <div className="project-meta">
              <span className="project-date">June 2024 - December 2024</span>
              <span className="project-duration">7 months</span>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <h2>Project Overview</h2>
            <p>
              Developed a sophisticated stock prediction model using Convolutional Neural Networks (CNN) 
              to analyze patterns in stock market data. The system provides real-time predictions for 
              five major stocks and includes a comprehensive web interface for data visualization and 
              performance tracking.
            </p>
          </div>

          <div className="project-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <h3>Data Processing</h3>
                <ul>
                  <li>Real-time stock data from 5 major exchanges</li>
                  <li>40+ common stock movement patterns analyzed</li>
                  <li>Historical data spanning 5+ years</li>
                  <li>Minute-level granularity for high-frequency analysis</li>
                  <li>Automated data cleaning and normalization</li>
                </ul>
              </div>
              <div className="spec-item">
                <h3>Machine Learning Architecture</h3>
                <ul>
                  <li>Convolutional Neural Network (CNN) for pattern recognition</li>
                  <li>LSTM layers for temporal sequence analysis</li>
                  <li>Attention mechanisms for feature importance</li>
                  <li>Ensemble methods for improved accuracy</li>
                  <li>Real-time model updates and retraining</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>📈 High-Accuracy Predictions</h3>
                <p>Advanced CNN model with 85%+ accuracy in trend prediction</p>
              </div>
              <div className="feature-card">
                <h3>🔄 Real-time Updates</h3>
                <p>Continuously updating predictions based on live market data</p>
              </div>
              <div className="feature-card">
                <h3>📊 Comprehensive Analytics</h3>
                <p>Detailed performance metrics and historical analysis</p>
              </div>
              <div className="feature-card">
                <h3>🌐 Web Interface</h3>
                <p>User-friendly dashboard for data visualization and tracking</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Technical Challenges & Solutions</h2>
            <div className="challenges-list">
              <div className="challenge-item">
                <h3>Challenge: Market Volatility</h3>
                <p><strong>Problem:</strong> High market volatility making predictions unreliable</p>
                <p><strong>Solution:</strong> Implemented ensemble methods and volatility-adjusted models to improve prediction stability</p>
              </div>
              <div className="challenge-item">
                <h3>Challenge: Data Quality</h3>
                <p><strong>Problem:</strong> Inconsistent and noisy financial data</p>
                <p><strong>Solution:</strong> Developed robust data preprocessing pipeline with outlier detection and normalization</p>
              </div>
              <div className="challenge-item">
                <h3>Challenge: Model Performance</h3>
                <p><strong>Problem:</strong> Overfitting on historical data</p>
                <p><strong>Solution:</strong> Implemented cross-validation and regularization techniques for better generalization</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Machine Learning Pipeline</h2>
            <div className="ml-section">
              <h3>Data Collection & Preprocessing</h3>
              <ul>
                <li>Real-time API integration with multiple data sources</li>
                <li>Automated data cleaning and feature engineering</li>
                <li>Time-series data normalization and scaling</li>
                <li>Feature selection based on correlation analysis</li>
              </ul>
              
              <h3>Model Architecture</h3>
              <ul>
                <li>1D CNN layers for pattern extraction from time series</li>
                <li>Bidirectional LSTM for temporal dependencies</li>
                <li>Attention mechanism for feature importance weighting</li>
                <li>Dense layers for final prediction output</li>
              </ul>

              <h3>Training & Validation</h3>
              <ul>
                <li>Time-series cross-validation to prevent data leakage</li>
                <li>Hyperparameter optimization using grid search</li>
                <li>Model ensemble for improved prediction accuracy</li>
                <li>Continuous model evaluation and retraining</li>
              </ul>
            </div>
          </div>

          <div className="project-section">
            <h2>Web Interface Features</h2>
            <div className="interface-features">
              <div className="feature-item">
                <h3>📊 Interactive Charts</h3>
                <p>Real-time stock price charts with prediction overlays</p>
              </div>
              <div className="feature-item">
                <h3>📈 Performance Metrics</h3>
                <p>Detailed accuracy metrics and prediction confidence scores</p>
              </div>
              <div className="feature-item">
                <h3>🔍 Historical Analysis</h3>
                <p>Backtesting capabilities with historical performance data</p>
              </div>
              <div className="feature-item">
                <h3>⚙️ Model Settings</h3>
                <p>User-configurable parameters for prediction sensitivity</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">CNN</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">TensorFlow</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">NumPy</span>
              <span className="tech-tag">Financial APIs</span>
            </div>
          </div>

          <div className="project-section">
            <h2>Results & Impact</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>🎯 Prediction Accuracy</h3>
                <p>85%+ accuracy in trend prediction for major stocks</p>
              </div>
              <div className="result-item">
                <h3>⚡ Real-time Performance</h3>
                <p>Sub-second prediction updates with live market data</p>
              </div>
              <div className="result-item">
                <h3>📊 Data Coverage</h3>
                <p>Analysis of 40+ stock movement patterns</p>
              </div>
              <div className="result-item">
                <h3>🔄 Continuous Learning</h3>
                <p>Model improves accuracy over time with new data</p>
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

export default StockPredictionProject; 