import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.companyName || !formData.service) {
      setStatusMessage('Vui lòng điền vào các trường bắt buộc (*).');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.companyName,
            service_interest: formData.service,
            message: formData.message
          },
        ]);

      if (error) throw error;

      setStatusMessage('Cảm ơn bạn! Thông tin đã được gửi thành công.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setStatusMessage(`Đã có lỗi xảy ra: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section" id="contact-section">
      <div className="contact-title">Liên hệ hợp tác</div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            {/* Form Fields */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Họ tên (<span className="required">*</span>)</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Nhập họ tên" className="form-input" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email (<span className="required">*</span>)</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Nhập email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Nhập số điện thoại" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="companyName" className="form-label">Tên công ty, doanh nghiệp (<span className="required">*</span>)</label>
              <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Nhập tên công ty, doanh nghiệp" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="service" className="form-label">Bạn quan tâm tới dịch vụ nào? (<span className="required">*</span>)</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-select" required>
                <option value="" disabled>Bạn quan tâm tới dịch vụ nào?</option>
                <option value="Xây dựng chương trình toàn diện">Xây dựng chương trình toàn diện</option>
                <option value="Thiết kế trải nghiệm học">Thiết kế trải nghiệm học</option>
                <option value="Xây dựng khung chương trình">Xây dựng khung chương trình</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Tin nhắn cho Finful (nếu có)</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Nhập tin nhắn cho Finful" className="form-textarea"></textarea>
            </div>
          </div>
          <div className="contact-note">* Với những yêu cầu cụ thể hơn, vui lòng liên hệ <a href="mailto:hello@finful.co" className="email-link">hello@finful.co</a></div>
          <button type="submit" className="submit-button" disabled={loading}>
            <div className="submit-text">{loading ? 'Đang gửi...' : 'Gửi thông tin'}</div>
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
      <style jsx>{`
        .contact-section {
          margin: 100px auto;
          padding: 0 20px; /* Add horizontal padding for smaller screens */
          display: flex;
          width: 708px;
          flex-direction: column;
          align-items: center;
          gap: 39px;
        }
        .contact-title {
          color: #000;
          text-align: center;
          font-size: 48px;
          font-weight: 600;
          width: 100%;
        }
        .contact-form-container {
          padding: 40px; /* Increased padding */
          display: flex;
          /* height: 732px; remove fixed height */
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 10px 0 #D8D8D8;
          background-color: rgba(248, 248, 249, 0.70);
        }
        .contact-form {
          display: flex;
          width: 558px;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
        }
        .form-fields {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
          width: 100%;
        }
        .form-row {
          display: flex;
          align-items: center;
          gap: 24px;
          width: 100%;
        }
        .form-label {
          color: #000;
          font-size: 16px;
          font-weight: 600;
          width: 100%;
        }
        .required {
          color: #E63B13;
        }
        .form-input, .form-select, .form-textarea {
          padding: 13px 18px;
          border: 1px solid #ccc;
          width: 100%;
          border-radius: 12px;
          background-color: #FFF;
          font-size: 16px;
          font-family: 'Inter', sans-serif;
        }
        .form-textarea {
            min-height: 100px;
            resize: vertical;
        }
        .form-select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%205.5L10%200.5L0%200.5L5%205.5Z%22%20fill%3D%22%23B0B0B0%22/%3E%3C/svg%3E');
            background-repeat: no-repeat;
            background-position: right 18px center;
        }
        .submit-button {
          padding: 10px;
          display: flex;
          height: 48px; /* Increased height */
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          border-radius: 8px; /* Adjusted border-radius */
          cursor: pointer;
          background-color: #00ACB8;
          border: none; /* Removed border */
        }
        .submit-text {
          color: #FFF;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
        .submit-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        .contact-note {
          color: #000;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          width: 100%;
        }
        .email-link {
          color: #00ACB8;
        }
        .status-message {
            width: 100%;
            text-align: center;
            margin-top: 20px; /* Added margin */
            font-size: 16px;
            color: #00ACB8;
        }
        @media (max-width: 640px) {
          .contact-section {
            width: 90%;
            max-width: 500px;
          }
          .contact-title {
            font-size: 32px;
            line-height: 40px;
          }
          .form-row {
            flex-direction: column;
            gap: 20px;
          }
          .contact-form-container {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
