import React from 'react';
import { footerLinks } from './data';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="footer-brand-info">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/10c07711dc1b993b8e8f4c6fb2bafabceccf2340?width=272" alt="Finful Logo" className="footer-logo" />
          <div className="footer-copyright">© 2025 Finful, Inc.</div>
        </div>
        <div className="footer-contact">
          <div className="social-links">
            <a href="https://www.facebook.com/finful.co" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6667 4.66666H16.3333C14.471 4.66666 12.8333 6.30434 12.8333 8.16666V10.5H10.5V14H12.8333V23.3333H16.3333V14H18.6667L19.8333 10.5H16.3333V8.16666C16.3333 7.85472 16.5914 7.59666 16.9033 7.59666H18.6667V4.66666Z" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/finful/" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99996 11.6667H10.5V21H6.99996V11.6667ZM8.74996 7C9.72164 7 10.5 7.77836 10.5 8.75C10.5 9.72164 9.72164 10.5 8.74996 10.5C7.77832 10.5 6.99996 9.72164 6.99996 8.75C6.99996 7.77836 7.77832 7 8.74996 7ZM17.5 11.6667H20.4166V13.065C20.8933 12.2384 22.0266 11.375 23.5516 11.375C26.8716 11.375 27.4166 13.5117 27.4166 16.28V21H23.9166V16.9167C23.9166 15.75 23.8866 14.2334 22.3816 14.2334C20.8766 14.2334 20.6266 15.4717 20.6266 16.8217V21H17.1266L17.5 11.6667Z" fill="white" fill-opacity="0.7"/>
              </svg>
            </a>
          </div>
          <a href="mailto:hello@finful.co" className="footer-email">
            <svg className="social-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83331 7H22.1666C23.2712 7 24.1666 7.89543 24.1666 9V19C24.1666 20.1046 23.2712 21 22.1666 21H5.83331C4.72874 21 3.83331 20.1046 3.83331 19V9C3.83331 7.89543 4.72874 7 5.83331 7Z" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.1667 9L14 15L3.83334 9" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>hello@finful.co</span>
          </a>
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
        opacity: 0.7;
        transition: opacity 0.2s ease-in-out;
      }
      .social-icon:hover {
        opacity: 1;
      }
      .footer-email {
        display: flex;
        align-items: center;
        gap: 13px;
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        opacity: 0.7;
        transition: opacity 0.2s ease-in-out;
      }
      .footer-email:hover {
        opacity: 1;
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
