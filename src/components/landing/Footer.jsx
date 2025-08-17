import React from 'react';
import { footerLinks } from './data';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="footer-brand-info">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/10c07711dc1b993b8e8f4c6fb2bafabceccf2340?width=272" alt="Finful Logo" className="footer-logo" />
          <div className="footer-copyright">© 2025 Finful, Inc. All rights reserved.</div>
        </div>
        <div className="footer-contact">
          <div className="social-links">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/678e1dc8e4ad41156580afdd905d48ba435d55e3?width=56" alt="Facebook" className="social-icon" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/6e51634ecdcbbfc6b73522f73c4c1690f919e666?width=56" alt="LinkedIn" className="social-icon" />
          </div>
          <div className="footer-email">hello@finful.co</div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <div className="footer-column-title">CÔNG TY</div>
          <div className="footer-column-links">
            {footerLinks.company.map((link, index) => (
              <div key={index} className="footer-link">{link}</div>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-title">DÀNH CHO CÁ NHÂN</div>
          <div className="footer-column-links">
            {footerLinks.personal.map((link, index) => (
              <div key={index} className="footer-link">{link}</div>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-title">DÀNH CHO TỔ CHỨC</div>
          <div className="footer-column-links">
            {footerLinks.organization.map((link, index) => (
              <div key={index} className="footer-link">{link}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 49px 80px;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #232B35;
      }
      .footer-content {
        display: flex;
        align-items: flex-start;
        gap: 219px;
        width: 100%;
        max-width: 1200px;
      }
      .footer-brand {
        display: flex;
        width: 272px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      .footer-brand-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        width: 100%;
      }
      .footer-logo {
        width: 136px;
        height: 39px;
      }
      .footer-copyright {
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
        opacity: 0.7;
        width: 100%;
      }
      .footer-contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      .social-links {
        display: flex;
        align-items: center;
        gap: 13px;
      }
      .social-icon {
        width: 28px;
        height: 28px;
      }
      .footer-email {
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
      }
      .footer-links {
        display: flex;
        align-items: flex-start;
        gap: 77px;
      }
      .footer-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
      }
      .footer-column-title {
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
        opacity: 0.7;
      }
      .footer-column-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        width: 100%;
      }
      .footer-link {
        color: #FFF;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
      @media (max-width: 991px) {
        .footer-content {
          flex-direction: column;
          gap: 40px;
        }
        .footer-links {
          gap: 40px;
        }
      }
      @media (max-width: 640px) {
        .footer {
          padding: 30px 20px;
        }
        .footer-links {
          flex-direction: column;
          gap: 30px;
        }
      }
    `}</style>
  </div>
);

export default Footer;
