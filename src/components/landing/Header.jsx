import React from 'react';

const Header = () => (
  <div className="header-section">
    <div className="navbar">
      <div className="navbar-content">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cc5dc9de9362ffa804f91b8a955a44687b1e480e?width=230"
          alt="Finful Logo"
          className="logo"
        />
        <div className="navbar-cta-container">
          <div className="navbar-cta">
            <div className="contact-arrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_187_100)">
                  <path d="M0.750977 5.79529H11.251" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.95532 1.5L11.2508 5.79545L6.95532 10.0909" stroke="white" strokeWidth="1.27273" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_187_100">
                    <rect width="12" height="12" fill="white" transform="translate(0.000976562)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="contact-text">Liên hệ</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .header-section {
        display: flex;
        height: 38px;
        padding-right: 0.5px;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .navbar {
        display: flex;
        width: 100%;
        max-width: 1251px;
        height: 38px;
        justify-content: space-between;
        align-items: center;
      }
      .navbar-content {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        width: 115px;
        height: 33px;
      }
      .navbar-cta-container {
        width: 147px;
        height: 38px;
      }
      .navbar-cta {
        padding: 8px 11.499px 8px 40px;
        display: flex;
        width: 147px;
        height: 38px;
        justify-content: flex-end;
        align-items: center;
        gap: 35.501px;
        border-radius: 8px;
        box-shadow: 0 2px 10px 0 rgba(16, 24, 40, 0.08);
        position: relative;
        cursor: pointer;
        background-color: #00ACB8;
      }
      .contact-arrow {
        width: 12px;
        height: 12px;
        position: absolute;
        right: 11.5px;
        top: 13px;
      }
      .contact-text {
        color: #FFF;
        text-align: center;
        font-size: 13.7px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: -0.028px;
      }
       @media (max-width: 991px) {
          .navbar-content {
            flex-direction: column;
            gap: 20px;
            height: auto;
          }
          .navbar-cta-container {
            display: none;
          }
        }
    `}</style>
  </div>
);

export default Header;
