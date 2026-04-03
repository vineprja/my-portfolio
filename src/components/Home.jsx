// Home.jsx
import React from "react";
import "./Home.css";

export default function Home({ children }) {
  return (
    <div className="page-container">
      
      {/* Main Content - Hero Section */}
      <main className="main-content">
        <div className="home-container">
          <div className="home-grid">
            
            {/* Left Text Card */}
            <div className="glass-card">
              <h2 className="hi-text">Hi, I am</h2>
              <h1 className="name">Jovine Casquejo</h1>
              <h3 className="title">
                Web Designer <br />
              </h3>
              <p className="description">
                I specialize in designing modern and responsive web interfaces. I enjoy turning ideas into clean and interactive designs that improve user experience.
              </p>
            </div>

            {/* Right Photo */}
            <div className="photo-wrapper">
              <div className="glow-effect"></div>
              <img src="/jovine.jpg" alt="Jovine Casquejo" className="profile-photo" />
            </div>

          </div>
        </div>
      </main>

      {/* All Other Sections */}
      <div className="sections-container">
        {children}
      </div>
    </div>
  );
}