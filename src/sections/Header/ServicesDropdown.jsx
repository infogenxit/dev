import { Link } from "react-router-dom";
import { PATHS } from "../../route/paths";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Implementation & Integration.webp";
import CodeBox2 from "../../assets/images/Managed Services.webp";
import CodeBox3 from "../../assets/images/Consulting & Advisory.webp";
import CodeBox4 from "../../assets/images/Support & Optimization.webp";
import CodeBox5 from "../../assets/images/Digital Marketing.png";

const ServicesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to={PATHS.implementationIntegration} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Implementation & Integration" />
          </div>
          <div className="service-info">
            <h4>Implementation & Integration</h4>
            <p>
              Seamlessly integrate complex systems and implement scalable enterprise solutions.
            </p>
          </div>
        </Link>
        <Link to={PATHS.managedServices} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox2} alt="Managed Services" />
          </div>
          <div className="service-info">
            <h4>Managed Services</h4>
            <p>
              Optimize your operations with proactive management and 24/7 infrastructure monitoring.
            </p>
          </div>
        </Link>
        <Link to={PATHS.consultingAdvisory} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Consulting & Advisory" />
          </div>
          <div className="service-info">
            <h4>Consulting & Advisory</h4>
            <p>
              Strategic technology roadmaps to align your digital investments with business goals.
            </p>
          </div>
        </Link>
        <Link to={PATHS.supportOptimization} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox4} alt="Support & Optimisation" />
          </div>
          <div className="service-info">
            <h4>Support & Optimisation</h4>
            <p>Continuous performance tuning and expert support to keep your systems running at peak.</p>
          </div>
        </Link>
        <Link to={PATHS.digitalMarketing} onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox5} alt="Digital Marketing" />
          </div>
          <div className="service-info">
            <h4>Digital Marketing</h4>
            <p>Data-driven SEO, performance marketing, and brand strategies to drive measurable growth.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ServicesDropdown;

