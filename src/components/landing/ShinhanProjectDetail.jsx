import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';

const ShinhanProjectDetail = () => {
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
            <span className="breadcrumb-text">Đào tạo về Thẻ tín dụng cho đội ngũ bán hàng</span>
        </div>
      </div>

        {/* Main Content */}
      <div className="main-content">
          <div className="content-wrapper">
            {/* Header */}
            <div className="partnership-banner">
                <div className="partnership-logos">
                <img src="https://api.builder.io/api/v1/image/assets/e11f24182a3341ef92fcbb0f5051aa32/f6ee17e37783fd83d0c2cf6d65ece067fd3c39cd?placeholderIfAbsent=true" alt="Finful" className="finful-logo" />
                <span className="partnership-x">x</span>
                <img src="https://api.builder.io/api/v1/image/assets/e11f24182a3341ef92fcbb0f5051aa32/c69c4f6e4157525ec2aefe77c30d89565f7fbbcd?placeholderIfAbsent=true" alt="Shinhan Finance" className="partner-logo" />
              </div>
            </div>
            <h1 className="project-title">Đào tạo về Thẻ tín dụng cho đội ngũ bán hàng</h1>

            {/* Description & Images */}
            <p className="description-text">Finful thiết kế chương trình đào tạo về sản phẩm thẻ tín dụng mới của Shinhan Finance mang tên "The First Credit Card" để đào tạo cho đội ngũ bán hàng hiện tại, với mong muốn nâng cao hiểu biết của họ về sản phẩm của tổ chức, đồng thời tăng khả năng bán chéo sản phẩm.</p>
            <img src="/projects/shinhan-main.png" alt="Chương trình đào tạo Shinhan Finance" className="project-image" />
            <p className="description-text">Chương trình đào tạo này được Finful thiết kế hướng tới cung cấp kiến thức và nâng cao trải nghiệm học của đội ngũ nhân viên, khắc phục những điểm mà hệ thống LMS truyền thống làm chưa tốt. Mục tiêu chúng tôi hướng tới không chỉ là cung cấp cho đội ngũ bán hàng kiến thức về sản phẩm mới, mà còn giúp họ luyện tập để nâng cao khả năng giải quyết tình huống bán hàng bằng công cụ AI, tự động thiết kế các tình huống thực tế và đưa ra nhận xét cải thiện dựa trên câu trả lời của họ.</p>
            <p className="description-text">Với ý tưởng này, Finful đã được Shinhan trao giải Impact Innovation Award. Ngoài ra, chúng tôi cũng đã có cơ hội giới thiệu về công ty cũng như chia sẻ tầm nhìn xây dựng sản phẩm với đội ngũ lãnh đạo của các công ty Shinhan trong khuôn khổ Demo Day thuộc chương trình Global Shinhan Innoboost 2024.</p>
            <img src="/projects/shinhan-award.png" alt="Giải thưởng Impact Innovation Award" className="project-image" />
            <h2 className="screenshots-title">Một số hình ảnh về chương trình đào tạo "The First Credit card"</h2>
            <img src="/projects/shinhan-app-screenshots.png" alt="Ảnh chụp màn hình chương trình đào tạo Shinhan" className="project-image" />

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
        .partner-logo { width: 229px; }
        .partnership-x { font-size: 32px; color: #B0B0B0; }
        .project-title { font-size: 36px; font-weight: 800; color: #262626; margin-bottom: 40px; }

        /* --- DESCRIPTION TEXT --- */
        .description-text { font-size: 17px; line-height: 1.5; margin-bottom: 20px; color: #262626; }
        
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
            .project-image { margin-top: 20px; }
        }
      `}</style>
    </>
  );
};
export default ShinhanProjectDetail;
