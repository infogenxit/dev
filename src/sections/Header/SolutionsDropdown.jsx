import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Digital Transformation.webp";
import CodeBox2 from "../../assets/images/Intelligent Automation.webp";
import CodeBox3 from "../../assets/images/Modern Applications.webp";
import CodeBox4 from "../../assets/images/Data Analytics & AI.webp";
import CodeBox5 from "../../assets/images/Integration & API Enablement.webp";
const SolutionsDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/solutions/digital-transformation" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Digital Transformation" />
          </div>
          <div className="service-info">
            <h4>Digital Transformation</h4>
            <p>
              Reimagine your business for the digital age with modern processes and tech.
            </p>
          </div>
        </Link>
        <Link to="/solutions/intelligent-automation" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox2} alt="Intelligent Automation" />
          </div>
          <div className="service-info">
            <h4>Intelligent Automation</h4>
            <p>
              Harness AI and RPA to automate workflows and eliminate manual bottlenecks.
            </p>
          </div>
        </Link>
        <Link to="/solutions/modern-applications" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Modern Applications" />
          </div>
          <div className="service-info">
            <h4>Modern Applications</h4>
            <p>
              Build future-ready web and mobile apps with cutting-edge architectures.
            </p>
          </div>
        </Link>
        <Link to="/solutions/data-analytics-ai" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox4} alt="Data Analytics & AI" />
          </div>
          <div className="service-info">
            <h4>Data Analytics & AI</h4>
            <p>Turn raw data into actionable insights with advanced machine learning and BI.</p>
          </div>
        </Link>
        <Link to="/solutions/api-integration" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox5} alt="Integration & API Enablement" />
          </div>
          <div className="service-info">
            <h4>Integration & API Enablement</h4>
            <p>
              Connect your ecosystem with secure, high-performance API architectures.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SolutionsDropdown;


