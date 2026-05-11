import { Link } from "react-router-dom";
import { PATHS } from "../../route/paths";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Implementation & Integration.webp";
import CodeBox2 from "../../assets/images/Managed Services.webp";
import CodeBox3 from "../../assets/images/Consulting & Advisory.webp";
import CodeBox4 from "../../assets/images/Support & Optimization.webp";

const ServicesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to={PATHS.implementationIntegration} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Implementation & Integration</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>
        <Link to={PATHS.managedServices} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox2} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Managed Services</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>
        <Link to={PATHS.consultingAdvisory} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Consulting & Advisory</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>
        <Link to={PATHS.supportOptimization} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox4} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Support & Optimization</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>
        <Link to={PATHS.digitalMarketing} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Digital Marketing</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ServicesDropdown;
