import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox from "../../assets/images/codebox.webp";
const IndustriesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/industries/healthcare-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Healthcare Solutions" />
          </div>
          <div className="service-info">
            <h4>Healthcare Solutions</h4>
            <p>
              Secure, compliant tech for modern patient care and medical operations.
            </p>
          </div>
        </Link>
        <Link to="/industries/retail-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Retail Solutions" />
          </div>
          <div className="service-info">
            <h4>Retail Solutions</h4>
            <p>
              Omnichannel commerce and POS systems to enhance customer experience.
            </p>
          </div>
        </Link>
        <Link to="/industries/manufacturing-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Manufacturing Solutions" />
          </div>
          <div className="service-info">
            <h4>Manufacturing Solutions</h4>
            <p>
              Smart factory tech and supply chain optimization for modern manufacturing.
            </p>
          </div>
        </Link>
        <Link to="/industries/transport-logistics" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Transport and Logistics" />
          </div>
          <div className="service-info">
            <h4>Transport and Logistics</h4>
            <p>Efficient fleet management and logistics tracking for global supply chains.</p>
          </div>
        </Link>
        <Link to="/industries/e-commerce-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="E-Commerce Solutions" />
          </div>
          <div className="service-info">
            <h4>E-Commerce Solutions</h4>
            <p>Scalable online stores and seamless payment integrations for retail growth.</p>
          </div>
        </Link>
        <Link to="/industries/finance-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Finance Solutions" />
          </div>
          <div className="service-info">
            <h4>Finance Solutions</h4>
            <p>Secure fintech solutions and automated financial processing for modern banking.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default IndustriesDropdown;

