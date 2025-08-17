import React from 'react';
import { services } from './data';

const Services = () => (
  <div className="services-section">
    <div className="services-title">Các dịch vụ</div>
    <div className="services-content">
      {services.map((service, index) => (
        <div key={index} className={`service-item ${index === 1 ? 'reverse' : ''}`}>
          <div className="service-text">
            <div className="service-header">
              <div className="service-bullet">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.5" cy="7" r="6.5" fill="#00ACB8"></circle>
                </svg>
              </div>
              <div className="service-title">{service.title}</div>
            </div>
            <div className="service-description">{service.description}</div>
            <div className={`service-cards ${service.cards.length === 2 ? 'wide' : ''}`}>
              {service.cards.map((card, cardIndex) => (
                <div key={cardIndex} className={`service-card ${service.cards.length === 2 ? 'wide' : ''}`}>
                  <div className="service-card-content">
                    <div className="service-card-icon">
                      <img src={card.icon} alt="" className="card-icon" />
                    </div>
                    <div className="service-card-title">{card.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="service-illustration">
            <img src={service.illustration} alt={service.title} className="illustration-image" />
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      .services-section {
        padding: 100px 0; /* Increased padding */
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
        background-color: #F4F6F7;
      }
      .services-title {
        color: #222326;
        text-align: center;
        font-size: 54.8px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: -2.24px;
      }
      .services-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 200px;
        width: 100%;
      }
      .service-item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 159px;
        width: 100%;
        max-width: 1200px;
      }
      .service-item.reverse {
        flex-direction: row-reverse;
      }
      .service-text {
        display: flex;
        width: 562px;
        flex-direction: column;
        align-items: flex-start;
        gap: 27px;
      }
      .service-header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
      }
      .service-bullet {
        width: 13px;
        height: 13px;
      }
      .service-title {
        color: #0D0F2C;
        font-size: 32px;
        font-weight: 600;
        line-height: 58px;
        letter-spacing: -1px;
      }
      .service-description {
        color: #8B8C8F;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      .service-cards {
        display: flex;
        align-items: center;
        gap: 13px;
        width: 100%;
      }
      .service-cards.wide {
        gap: 17px;
      }
      .service-card {
        padding: 14px 16px;
        display: flex;
        width: 167px;
        height: 142px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 5px;
        background-color: #FFF;
      }
      .service-card.wide {
        width: 275px;
      }
      .service-card-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 18px;
      }
      .service-card-icon {
        padding: 7px;
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #E5F6F7;
      }
      .card-icon {
        width: 26px;
        height: 26px;
      }
      .service-card-title {
        color: #616265;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
      .service-illustration {
        width: 410px;
        height: 355px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .illustration-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      .service-illustration-3 {
        width: 387px;
        height: 293px;
        position: relative;
      }
      .illustration-bg {
        width: 298px;
        height: 293px;
        background: linear-gradient(135deg, #EFF9FA 0%, #B2E6E9 100%);
        border-radius: 16px;
        position: absolute;
        left: 0px;
        top: 0px;
      }
      .illustration-person {
        width: 173px;
        height: 292px;
        position: absolute;
        left: 47px;
        top: 0px;
      }
      .illustration-overlay {
        width: 200px;
        height: 72px;
        border-radius: 10px;
        position: absolute;
        left: 187px;
        top: 108px;
        background-color: #00ACB8;
      }
      .illustration-blackboard {
        width: 44px;
        height: 44px;
        position: absolute;
        left: 202px;
        top: 121px;
      }
       @media (max-width: 991px) {
          .services-section {
            padding: 60px 20px;
          }
          .services-title {
            font-size: 32px;
            line-height: 40px;
          }
          .service-item {
            flex-direction: column;
            gap: 40px;
          }
          .service-item.reverse {
            flex-direction: column;
          }
          .service-text {
            width: 100%;
            max-width: 600px;
          }
          .service-title {
            font-size: 24px;
            line-height: 32px;
          }
          .service-cards {
            flex-wrap: wrap;
            gap: 15px;
          }
          .service-card, .service-card.wide {
            width: 200px;
          }
        }
        @media (max-width: 640px) {
          .service-cards {
            flex-direction: column;
          }
          .service-card, .service-card.wide {
            width: 100%;
          }
        }
    `}</style>
  </div>
);

export default Services;
