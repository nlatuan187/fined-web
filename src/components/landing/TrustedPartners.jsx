import React from 'react';
import { partners } from './data';

const TrustedPartners = () => (
  <div className="trusted-partners-section">
    <div className="partners-title">Tin tưởng bởi các tổ chức</div>
    <div className="logo-slider-container">
      <div className="logo-slider">
        {[...partners, ...partners].map((partner, index) => (
          <div className="logo-slide" key={index}>
            <img src={partner.src} alt={partner.alt} className="partner-logo" />
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .trusted-partners-section {
        padding: 100px 0;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }
      .partners-title {
        color: #8B8C8F;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: -0.8px;
      }
      .logo-slider-container {
        width: 100%;
        overflow: hidden;
        position: relative;
        --logo-width: 180px; /* Control logo width here */
        --gap: 60px;
      }
      .logo-slider-container::before,
      .logo-slider-container::after {
        content: '';
        position: absolute;
        top: 0;
        width: 200px; /* Width of the fade effect */
        height: 100%;
        z-index: 2;
      }
      .logo-slider-container::before {
        left: 0;
        background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
      }
      .logo-slider-container::after {
        right: 0;
        background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
      }
      .logo-slider {
        display: flex;
        gap: var(--gap);
        width: calc((${partners.length * 2} * (var(--logo-width) + var(--gap))));
        animation: scroll 40s linear infinite;
      }
      .logo-slide {
        width: var(--logo-width);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .partner-logo {
        max-width: 100%;
        height: auto;
        max-height: 60px;
      }
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-1 * (${partners.length} * (var(--logo-width) + var(--gap)))));
        }
      }
       @media (max-width: 768px) {
        .logo-slider-container::before,
        .logo-slider-container::after {
            width: 50px;
        }
       }
    `}</style>
  </div>
);

export default TrustedPartners;
