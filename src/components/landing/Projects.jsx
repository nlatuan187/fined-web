import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './data';

const Projects = () => (
  <>
    <div className="projects-badge">
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/897f1dbb1436ef20781744e39f3fbd5869346839?width=32" alt="Star" className="badge-icon" />
      <div className="badge-text">Các dự án của chúng tôi</div>
    </div>
    <div className="projects-section">
      {projects.map((project, index) => {
        let projectLink = project.link;
        if (project.title === "Techcombank FinWise Edu cho học sinh") {
          projectLink = "/projects/techcombank";
        } else if (project.title === "Đào tạo về Thẻ tín dụng cho đội ngũ bán hàng") {
          projectLink = "/projects/shinhan-finance";
        }

        return (
          <div key={index} className="project-card">
            <div className="project-image-container" style={{ backgroundImage: `url(${project.background})` }}>
              <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />
            </div>
            <div className="project-content">
              <div className="project-title">{project.title}</div>
              <div className="project-description">{project.description}</div>
            </div>
            <Link to={projectLink} className="project-cta">
              <div className="project-cta-text">Xem thêm &gt;</div>
            </Link>
          </div>
        );
      })}
    </div>
    <div className="pagination">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="pagination-dot"></div>
      ))}
    </div>
     <style jsx>{`
      .projects-badge {
        margin: 50px auto;
        padding: 0;
        display: flex;
        width: 235px;
        height: 37px;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 20px;
        border: 1px solid #7FD5DB;
        background-color: #ECF8F9;
      }
      .badge-icon {
        width: 16px;
        height: 16px;
      }
      .badge-text {
        color: #333;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
      }
      .projects-section {
        padding: 0 60px;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 42px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .project-card {
        padding: 10px 10px 30px 10px;
        display: flex;
        width: 502px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        border-radius: 10px;
        border: 1px solid #DDD;
        background-color: #FFF;
      }
      .project-image-container {
        height: 209px;
        width: 100%;
        border-radius: 8px 8px 0 0;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .project-image-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 8px 8px 0 0;
      }
      .project-logo {
        max-height: 80px;
        max-width: 200px;
        width: auto;
        height: auto;
        object-fit: contain;
        z-index: 1;
      }
      .project-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px; /* Increased gap */
        width: 100%;
        padding: 0 10px; /* Add some horizontal padding */
      }
      .project-title {
        /* height: 27px; Removed fixed height */
        color: #333;
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        line-height: 1.3; /* Added line-height for better spacing */
      }
      .project-description {
        color: #333;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        opacity: 0.8;
        width: 100%;
      }
      .project-cta {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 163px;
        height: 35px;
        border: 1px solid #333; /* Set border to black */
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
      }
      .project-cta:hover {
        background-color: #f0f0f0;
        border-color: #000;
      }
      .project-cta-text {
        color: #333; /* Set text to black */
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        opacity: 1; /* Ensure full opacity */
      }
      .pagination {
        margin: 50px auto;
        padding: 12px;
        display: flex;
        width: 109px;
        height: 36px;
        align-items: flex-start;
        gap: 12px;
        border-radius: 15984px;
        background-color: rgba(229, 246, 247, 0.20);
      }
      .pagination-dot {
        width: 12px;
        height: 12px;
        border-radius: 15984px;
        opacity: 0.2;
        background-color: #00ACB8;
      }
       @media (max-width: 991px) {
          .projects-section {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }
        }
        @media (max-width: 640px) {
          .projects-section {
            padding: 0 20px;
          }
          .project-card {
            width: 100%;
            max-width: 400px;
          }
        }
    `}</style>
  </>
);

export default Projects;
