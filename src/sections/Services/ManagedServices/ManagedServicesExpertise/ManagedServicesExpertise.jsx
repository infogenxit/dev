import "./ManagedServicesExpertise.css";
import IconA from "../../../../assets/images/icon1.png";
import IconB from "../../../../assets/images/icon2.png";
import IconC from "../../../../assets/images/icon3.png";
import IconD from "../../../../assets/images/icon4.png";
import IconE from "../../../../assets/images/icon5.png";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        {/* Heading */}
        <div className="appdev-expertise-header">
          <span className="section-label">Managed Services</span>
          <h2>
            Proactive Support, Seamless Operations, and Scalable Managed
            Services for Your Business
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>24/7 Monitoring and Response</h4>
            <p>
              Constant monitoring to detect and resolve issues before they
              impact your business.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Timely Updates and Tuning</h4>
            <p>
              Regular updates and optimisations ensure your platforms perform at
              peak efficiency.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>SLA-backed Service Guarantee</h4>
            <p>
              Clear service level agreements ensure reliable uptime and
              predictable service delivery.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Customised Maintenance Plans</h4>
            <p>
              Tailored maintenance to fit your platform needs, ensuring smooth
              and uninterrupted operations.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Comprehensive Security and Compliance</h4>
            <p>
              We ensure your data is secure and compliant with Australian
              standards, mitigating risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
