// Contact.jsx - UPDATE LIKE THIS
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="page-container">
      <div className="contact-container">
        <div className="contact-grid">

          {/* LEFT: Text + Button */}
          <div className="contact-left">
            <div className="contact-card">
              <h1 className="collaborate-title">Let's Collaborate</h1>
              <p className="collaborate-text">
                I'm open for freelance work, collaborations, or anything creative.
              </p>

              <a
                href="https://mail.google.com/mail/mu/mp/926/#tl/priority/%5Esmartlabel_personal"
                className="contact-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                kezkejang@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT: Your Photo */}
          <div className="contact-right">
            <div className="photo-container">
              <img 
                src="/catkun.jpg" 
                alt="Cloyd Inoc" 
                className="contact-photo" 
              />
            </div>
          </div>

        </div> {/* END GRID HERE */}

        {/* FOOTER - NOW PERFECTLY CENTERED */}
        <footer className="site-footer">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/jovine.casquejo"
              target="_blank"
              rel="noopener noreferrer"
              className="icon facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://github.com/vineprja"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="copyright">© 2025 Jovine Casquejo. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}