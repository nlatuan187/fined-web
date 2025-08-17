import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';

const TechcombankProjectDetail = () => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/#contact-section');
  };

  return (
    <>
      <ProjectHeader />
      <div className="project-detail-container">
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="breadcrumb-content" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
            <svg className="back-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9996 11.4999H8.99957L12.2926 8.20694L10.8786 6.79294L6.58557 11.0859C6.21063 11.461 6 11.9696 6 12.4999C6 13.0303 6.21063 13.5389 6.58557 13.9139L10.8786 18.2069L12.2926 16.7929L8.99957 13.4999H18.9996V11.4999Z" fill="#656C86"/></svg>
            <span className="breadcrumb-text">Dự án</span>
            <svg className="breadcrumb-dot" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#656C86"/></svg>
            <span className="breadcrumb-text">Techcombank FinWise Edu cho học sinh</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-wrapper">
            {/* Header */}
              <div className="partnership-banner">
                <div className="partnership-logos">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/17b159c4964951033e7936d3b54d813aa782a8f6?width=230" alt="Finful" className="finful-logo" />
                <span className="partnership-x">x</span>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/5eb1aa8a5395e8f80504488216994fde007e2fd6?width=478" alt="Techcombank" className="partner-logo" />
              </div>
            </div>
            <h1 className="project-title">Techcombank FinWise Edu cho học sinh</h1>

            {/* Description & Images */}
            <p className="description-text">Ứng dụng FinWise Edu được Finful thiết kế phục vụ Chương trình "Quản lý Tài chính cho thế hệ tiếp nối vượt trội" do Techcombank tổ chức. Chương trình nằm trong chuỗi những đặc quyền chiến lược dành cho gia đình Hội viên cao cấp được Techcombank chú trọng triển khai trong nhiều năm liên tiếp.</p>
            <img src="/projects/techcombank-event.png" alt="Sự kiện Techcombank FinWise Edu" className="project-image" />
            <p className="description-text highlighted">Tệp người học của FinWise Edu vô cùng đa dạng, bao trùm từ cấp 1 tới cấp 3, đặt ra bài toán cần thiết kế chương trình học vừa đảm bảo thu hút các độ tuổi, vừa đảm bảo cá nhân hoá trải nghiệm học và gắn kết tốt với tổng thể chương trình. Với FinWise Edu, Finful tập trung vào <span className="emphasized">"game hoá"</span> trải nghiệm học cũng như <span className="emphasized">trực quan hoá</span> các kiến thức tài chính để dù ở độ tuổi nào, các bạn cũng có thể dễ hiểu, dễ nhớ và dễ áp dụng.</p>
            <p className="description-text">Trong 2 năm liên tiếp, Finful không chỉ đứng sau phụ trách sự phát triển của ứng dụng FinWise Edu, mà còn đồng hành cùng Techcombank trong những buổi workshop tại các tỉnh thành, trực tiếp tiếp xúc với người học - các bạn học sinh đa dạng độ tuổi ở các cấp học. Tại đây, Finful giới thiệu với các bạn về FinWise Edu, cùng Techcombank lan toả và khuyến khích các bạn tham gia tích cực vào chương trình.</p>
            <img src="/projects/techcombank-workshops.png" alt="Workshops của FinWise Edu" className="project-image" />
                <h2 className="screenshots-title">Một số hình ảnh về ứng dụng FinWise Edu</h2>
            <img src="/projects/techcombank-app-screenshots.png" alt="Ảnh chụp màn hình ứng dụng FinWise Edu" className="project-image" />

            {/* Contact CTA */}
            <div className="divider" />
            <div className="contact-cta">
                <Link to="/#contact-section" className="contact-button">Liên hệ hợp tác</Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* --- GENERAL & LAYOUT --- */
        .project-detail-container { 
          background: #FFF;
          overflow-x: hidden; 
          font-family: 'Inter', sans-serif; /* APPLY FONT */
        }
        .main-content { padding: 52px 0; }
        .content-wrapper { max-width: 912px; margin: 0 auto; padding: 0 20px; }
        .project-image { width: 100%; height: auto; display: block; margin: 40px 0; }
        
        /* --- BREADCRUMB --- */
        .breadcrumb-section { border-bottom: 1px solid #E5E5E5; }
        .breadcrumb-content { max-width: 912px; margin: 0 auto; height: 45px; display: flex; align-items: center; gap: 10px; padding: 0 20px; cursor: pointer; }
        .back-icon { width: 24px; height: 24px; }
        .breadcrumb-text { color: #656C86; font-size: 16px; font-weight: 600; }
        .breadcrumb-dot { fill: #656C86; width: 5px; height: 5px; }

        /* --- PARTNERSHIP & TITLE --- */
        .partnership-banner { background-color: #232B35; display: flex; min-height: 152px; justify-content: center; align-items: center; margin-bottom: 40px; }
        .partnership-logos { border-radius: 10px; background-color: #FFF; display: flex; align-items: center; gap: 30px; justify-content: center; padding: 21px 47px; }
        .finful-logo { width: 115px; }
        .partner-logo { width: 239px; }
        .partnership-x { font-size: 32px; color: #B0B0B0; }
        .project-title { font-size: 36px; font-weight: 800; color: #262626; margin-bottom: 40px; }

        /* --- DESCRIPTION TEXT --- */
        .description-text { font-size: 17px; line-height: 1.5; margin-bottom: 20px; color: #262626; }
        .description-text.highlighted { margin-top: 40px; }
        .emphasized { color: #00ACB8; font-weight: 700; }

        /* --- SCREENSHOTS --- */
        .screenshots-title { font-size: 24px; font-weight: 700; margin-top: 40px; color: #262626; }

        /* --- CONTACT CTA --- */
        .divider { height: 1px; background: #CFD2DB; margin-top: 60px; }
        .contact-cta { text-align: center; padding: 80px 0; background: #F2FAFB; margin: 60px -20px 0; border-radius: 10px; }
        .contact-button {
            display: inline-flex;
            height: 48px;
            padding: 10px 24px;
          justify-content: center;
          align-items: center;
          gap: 10px;
            border-radius: 8px;
          background: #00ACB8;
          color: #FFF;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
          cursor: pointer;
            text-decoration: none;
            transition: background-color 0.2s ease;
        }
        .contact-button:hover {
            background-color: #008a94;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 640px) {
            .project-title { font-size: 28px; }
            .partnership-logos { flex-direction: column; padding: 20px; gap: 15px; }
            .project-image, .description-text.highlighted { margin-top: 20px; }
        }
      `}</style>
    </>
  );
};
export default TechcombankProjectDetail;
