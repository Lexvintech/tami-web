import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import logo from './assets/tami-logo.png';
import './App.css';

function App() {
  const websiteUrl = 'https://www.tami-institute.com'; 

  // State to manage the dropdown visibility using mouse events
  const [isProgramsHovered, setIsProgramsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">TAMI</div>
        <div className="nav-links">
          <a href="#about">About</a>
          
          {/* Programs Dropdown */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setIsProgramsHovered(true)}
            onMouseLeave={() => setIsProgramsHovered(false)}
          >
            <a href="#programs">Programs ▾</a>
            {isProgramsHovered && (
              <div className="dropdown-menu">
                <a href="#data-science">Data Science (3yrs)</a>
                <a href="#ai-engineer">AI Engineer (4yrs)</a>
                <a href="#machine-learning">Machine Learning (3yrs)</a>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            <a href="#contact">Contact ▾</a>
            {isContactHovered && (
              <div className="dropdown-menu">
                <span className="dropdown-text">+255 752 132 002</span>
                <span className="dropdown-text">+255 798 964 434</span>
                <a href="mailto:info@tami.co.tz">info@tami.co.tz</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <img src={logo} alt="TAMI Logo" className="hero-logo" />
        <h1 className="hero-title">Tanzania Artificial Intelligence and Machine Learning Institute</h1>
        <p className="hero-slogan">Intelligence Drives Innovation</p>
        <button className="cta-button">Explore Programs</button>
      </main>

      {/* Business Card QR Section */}
      <section className="qr-section">
        <div className="qr-card">
          <h2>Scan to Connect</h2>
          <p>Scan this QR code with your phone to visit our official homepage. Perfect for your business cards!</p>
          
          <div className="qr-wrapper">
            <QRCode 
              value={websiteUrl} 
              size={180} 
              bgColor="#ffffff" 
              fgColor="#0b318f" 
              level="H" 
            />
          </div>
          <p className="qr-url">{websiteUrl}</p>
        </div>
      </section>

      {/* Footer with About Us */}
      <footer className="footer" id="about">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About TAMI</h3>
            <p>
              We are a premier institute fundamentally focused on preparing the next generation of <strong>Data Analysts, Machine Learning Experts, and Artificial Intelligence Engineers</strong>. 
              Join us to master cutting-edge technology, drive digital innovation in Tanzania, and secure your place at the forefront of the global tech revolution.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TAMI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;