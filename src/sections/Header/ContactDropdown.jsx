import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import Icon1 from "../../assets/images/Intelligent Automation.webp";
import Icon2 from "../../assets/images/Digital Transformation.webp";

const ContactDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/contact-us" onClick={closeMenu}>
          <div className="service-img">
            <img src={Icon1} alt="Get in Touch" />
          </div>
          <div className="service-info">
            <h4>Get in Touch</h4>
            <p>Connect with our experts to discuss your next big idea.</p>
          </div>
        </Link>
        <Link to="/contact-us" onClick={closeMenu}>
          <div className="service-img">
            <img src={Icon2} alt="Global Locations" />
          </div>
          <div className="service-info">
            <h4>Global Locations</h4>
            <p>Find our offices and reach out to our local teams worldwide.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ContactDropdown;
