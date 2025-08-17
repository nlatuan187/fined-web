import React, { useState, useEffect } from 'react';
import { features } from './data';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="features-section">
      <div className="features-header">
        <div className="features-title-gradient">Điểm nổi bật của</div>
        <div className="features-title">Finful</div>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`feature-card ${isMobile && activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="feature-content">
              <div className="icon-wrapper">
                <img src={feature.icon} alt={feature.alt} className="feature-icon" />
              </div>
              <div className="text-content">
                <div className="feature-title" dangerouslySetInnerHTML={{ __html: feature.title }} />
                <div className="feature-divider"></div>
                <div className="feature-description">{feature.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .features-section {
          margin: 0 auto;
          padding: 100px 0;
          display: flex;
          width: 100%;
          max-width: 1170px;
          flex-direction: column;
          align-items: center;
          gap: 55px;
        }
        .features-header {
          display: flex;
          width: 419px;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .features-title-gradient {
          display: flex;
          height: 59px;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          font-size: 50px;
          font-weight: 700;
          line-height: 88px;
          letter-spacing: -1px;
          background: linear-gradient(90deg, #7FD5DB 0%, #00ACB8 50%, #008993 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .features-title {
          color: #222326;
          text-align: center;
          font-size: 50px;
          font-weight: 700;
          line-height: 58px;
          letter-spacing: -1px;
        }
        .features-grid {
          display: flex;
          align-items: stretch; /* Make cards same height */
          gap: 34px;
          width: 100%;
        }
        .feature-card {
          display: flex;
          width: 267px;
          height: 363px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          padding: 30px;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          background: transparent;
        }
        
        .feature-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 23px;
          text-align: center;
        }

        .icon-wrapper {
          height: 80px; /* Fixed height for icon area */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-icon {
          height: 60px;
          width: 60px;
          transition: all 0.4s ease-in-out;
        }

        .text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-title {
          color: #667380;
          font-size: 16px;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: -0.16px;
          text-transform: uppercase;
          transition: color 0.4s ease-in-out;
        }

        .feature-divider,
        .feature-description {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease-in-out;
        }
        
        .feature-divider {
          width: 66px;
          height: 1px;
          background-color: #FFF;
          margin: 16px 0;
        }

        .feature-description {
          width: 218px;
          color: #FFF;
          font-size: 15px;
          font-weight: 400;
          line-height: 21px;
          letter-spacing: -0.3px;
        }
        
        .feature-card:hover, .feature-card.active {
            background: linear-gradient(180deg, #B2E6E9 0%, #00ACB8 100%);
        }
        .feature-card:hover .feature-icon, .feature-card.active .feature-icon {
            width: 80px;
            height: 80px;
        }
        .feature-card:hover .feature-title, .feature-card.active .feature-title {
            color: #FFF;
        }
        .feature-card:hover .feature-divider, .feature-card.active .feature-divider {
            opacity: 1;
        }
        .feature-card:hover .feature-description, .feature-card.active .feature-description {
            opacity: 1;
            max-height: 150px;
        }
        
        @media (max-width: 991px) {
          .features-grid {
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }
          .feature-card {
            width: calc(50% - 10px);
          }
          .features-title-gradient, .features-title {
            font-size: 32px;
            line-height: 40px;
          }
        }
        @media (max-width: 768px) {
            .feature-card {
                cursor: pointer; /* Add pointer cursor for mobile */
            }
        }
        @media (max-width: 640px) {
           .features-grid {
              flex-direction: column;
              align-items: center;
            }
            .feature-card {
              width: 100%;
              max-width: 300px;
            }
        }
      `}</style>
    </div>
  );
};

export default Features;
