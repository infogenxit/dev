import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import Icon1 from "../../assets/images/Modern Applications.webp";
import Icon2 from "../../assets/images/Data Analytics & AI.webp";

const InsightDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown compact">
      <div className="services-grid">
        <Link to="https://blog.infogenx.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          <div className="service-img">
            <img src={Icon1} alt="Blog" />
          </div>
          <div className="service-info">
            <h4>Blog</h4>
            <p>Explore the latest trends in AI, automation, and digital innovation.</p>
          </div>
        </Link>
        <Link to="/insights/case-studies" onClick={closeMenu}>
          <div className="service-img">
            <img src={Icon2} alt="Case Studies" />
          </div>
          <div className="service-info">
            <h4>Case Studies</h4>
            <p>See how we help businesses transform and scale with smart technology.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default InsightDropdown;

