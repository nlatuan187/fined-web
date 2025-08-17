import React from 'react';
import Header from './Header';

const Hero = () => (
  <div className="hero-section">
    <div className="content-wrapper">
      <Header />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <div className="hero-title-section">
              <h1 className="gradient-text">Đối tác tin cậy trong</h1>
              <h1 className="dark-text">giáo dục tài chính</h1>
            </div>
            <div className="hero-description">
              Giúp các tổ chức tài chính xây dựng niềm tin, tăng khả năng tiếp cận sản phẩm và gắn kết với khách hàng thông qua giáo dục tài chính.
            </div>
            <a href="#contact-section" className="hero-cta">
              <div className="cta-text">Liên hệ</div>
              <svg className="cta-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-bg"></div>
          <img
            src="/images/hero-phone.png"
            alt="Hero Phone"
            className="hero-phone"
          />
          <div className="info-card">
            <div className="info-card-content">
              <div className="info-card-value">100+</div>
              <div className="info-card-label">Chủ đề tài chính</div>
            </div>
          </div>
          <div className="lesson-card">
            <div className="lesson-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="4" fill="rgba(255, 243, 217, 0.5)"></rect>
                <path d="M14 19.3995L18.3649 21.8549C19.1642 22.3049 20.1424 21.6397 19.932 20.7984L18.7751 16.1811L22.6351 13.0703C23.3398 12.5029 22.9611 11.4268 22.0356 11.3583L16.9555 10.9573L14.9676 6.59428C14.61 5.80191 13.39 5.80191 13.0324 6.59428L11.0445 10.9475L5.96443 11.3486C5.03887 11.417 4.66023 12.4931 5.36492 13.0605L9.22494 16.1713L8.06799 20.7886C7.85763 21.6299 8.83578 22.2951 9.63513 21.8451L14 19.3995Z" fill="#FFC344"></path>
              </svg>
            </div>
            <div className="lesson-text">Customized financial lesson</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero-section {
        padding: 25px 49px;
        width: 100%;
        min-height: 710px;
        background: linear-gradient(180deg, #EFF9FA 0%, #FCFEFE 100%);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        overflow: hidden; /* Fix background overlapping */
      }
      .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 120px;
        width: 100%;
      }
      .hero-content {
        display: flex;
        padding-right: 1px;
        justify-content: center;
        align-items: center;
        gap: 25px;
        width: 100%;
        z-index: 2;
      }
      .hero-left {
        display: flex;
        width: 577px;
        height: 348px;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;
      }
      .hero-text-container {
        display: flex;
        width: 577px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 45px;
      }
      .hero-title-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
      }
      .hero-title-section h1 {
        margin: 0;
        font-weight: 700;
        font-size: 64px;
        line-height: 1.2;
        letter-spacing: -2px;
      }
      .gradient-text {
        background: linear-gradient(90deg, #7FD5DB 0%, #00ACB8 50%, #008993 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .dark-text {
        color: #3D3D3D;
      }
      .hero-description {
        width: 552px;
        color: #333;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
      }
      .highlight-text {
        color: #00ACB8;
        font-weight: 700;
      }
      .hero-cta {
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        background-color: #00ACB8;
        cursor: pointer;
        text-decoration: none;
      }
      .cta-text {
        color: #FFF;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
      }
      .cta-arrow {
        width: 24px;
        height: 24px;
      }
      .hero-right {
        width: 648px;
        height: 422px;
        position: relative;
        z-index: 1;
      }
      .hero-image-bg {
        position: absolute;
        width: 1200px;
        height: 1000px;
        left: 50%;
        top: -250px;
        border-radius: 45%;
        background: linear-gradient(180deg, #e0f7fa 0%, #ffffff 70%);
        transform: translateX(-30%) rotate(-15deg);
        z-index: 0;
      }
      .hero-phone {
        width: 400px; /* Increased size */
        height: auto;
        position: absolute;
        left: 150px; /* Adjusted position */
        top: -40px; /* Adjusted position */
        z-index: 2;
      }
      .info-card {
        position: absolute;
        left: 420px; /* Adjusted position */
        top: 150px; /* Adjusted position */
        width: 260px;
        padding: 20px;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #FFDB8E;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        backdrop-filter: blur(10px);
        z-index: 3;
        text-align: center;
      }
      .info-card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      .info-card-value {
        font-size: 48px;
        font-weight: 700;
        color: #008993;
      }
      .info-card-label {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
      .lesson-card {
        padding: 8px 16px;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        border-radius: 20px;
        box-shadow: -8px 8px 28px 0 rgba(0, 0, 0, 0.06);
        position: absolute;
        left: 0px;
        top: 310px;
        background-color: #FFF;
        border: 1px solid #eee;
        z-index: 3;
      }
      .lesson-icon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lesson-text {
        color: #333;
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
      }
      @media (max-width: 991px) {
        .hero-section {
          padding: 20px 30px;
          height: auto;
        }
        .content-wrapper {
          gap: 60px;
        }
        .hero-content {
          flex-direction: column;
          gap: 40px;
        }
        .hero-left {
          width: 100%;
          height: auto; /* Allow height to adjust */
        }
        .hero-title-section h1 {
          font-size: 48px;
        }
        .hero-text-container {
          width: 100%;
        }
        .hero-description {
          width: 100%; /* Ensure text wraps correctly */
        }
        .hero-right {
          width: 100%;
          height: 450px; /* Adjusted height */
        }
        .hero-phone {
          width: 280px; /* Mobile size */
          left: 50%;
          transform: translateX(-50%);
          top: 0;
        }
        .info-card {
            left: auto;
            right: 0px;
            top: 120px;
            width: 220px;
        }
        .lesson-card {
            left: 0;
            top: auto;
            bottom: 20px;
        }
      }
      @media (max-width: 640px) {
        .hero-section {
          padding: 15px 20px;
        }
        .hero-title-section h1 {
            font-size: 40px;
            letter-spacing: -1.5px;
        }
        .hero-description {
          font-size: 16px;
          line-height: 1.5;
        }
      }
    `}</style>
  </div>
);

export default Hero;
