import React from 'react';
import { Link } from 'react-router-dom';

const ProjectHeader = () => {
  return (
    <>
      <header className="project-header-container">
        <div className="header-content">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cc5dc9de9362ffa804f91b8a955a44687b1e480e?width=230"
              alt="Finful Logo"
              className="header-logo"
            />
          </Link>
          <a href="/#contact-section" className="header-cta">
            <div className="cta-text">Liên hệ</div>
            <svg className="cta-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </header>
      <style jsx>{`
        .project-header-container {
          width: 100%;
          height: 88px;
          background-color: #FFF;
          border-bottom: 1px solid #E5E5E5;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
        }
        .header-content {
          width: 100%;
          max-width: 1200px; /* Adjust as needed */
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-logo {
          height: 33px;
          width: auto;
        }
        .header-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          border-radius: 8px;
          background-color: #00ACB8;
          color: #FFF;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: background-color 0.2s ease-in-out;
        }
        .header-cta:hover {
          background-color: #008a94;
        }
        .cta-arrow {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </>
  );
};

export default ProjectHeader;
