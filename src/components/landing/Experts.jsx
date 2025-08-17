import React from 'react';
import { experts } from './data';

const Experts = () => (
  <>
    <div className="experts-badge">
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/897f1dbb1436ef20781744e39f3fbd5869346839?width=32" alt="Star" className="badge-icon" />
      <div className="badge-text">Chuyên gia đồng hành</div>
    </div>
    <div className="experts-section">
      {experts.map((expert, index) => (
        <div key={index} className="expert-card">
          <div className="expert-card-bg"></div>
          <img src={expert.img} alt={expert.name} className="expert-image" />
          <div className="expert-name-bg">
            <div className="expert-name">{expert.name}</div>
          </div>
          <div className="expert-credentials" dangerouslySetInnerHTML={{ __html: expert.credentials }} />
        </div>
      ))}
    </div>
    <style jsx>{`
      .experts-badge {
        margin: 50px auto;
        padding: 0;
        display: flex;
        width: 220px;
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
      .experts-section {
        margin: 50px 0;
        padding: 0;
        display: flex;
        gap: 50px;
        justify-content: center;
        align-items: flex-start;
      }
      .expert-card {
        width: 406px;
        height: 489px;
        position: relative;
      }
      .expert-card-bg {
        width: 406px;
        height: 434px;
        border-radius: 12px 12px 0 0;
        border: 1px solid #7FD5DB;
        position: absolute;
        left: 0px;
        top: 55px;
        background-color: #ECF8F9;
      }
      .expert-image {
        width: auto;
        height: 306px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
      }
      .expert-name-bg {
        padding: 10px;
        display: flex;
        width: 406px;
        height: 53px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: absolute;
        left: 0px;
        top: 306px;
        background-color: #00ACB8;
      }
      .expert-name {
        color: #FFF;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
      }
      .expert-credentials {
        width: 389px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        position: absolute;
        left: 8px;
        top: 376px;
      }
      @media (max-width: 991px) {
        .experts-section {
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
      }
    `}</style>
  </>
);

export default Experts;
