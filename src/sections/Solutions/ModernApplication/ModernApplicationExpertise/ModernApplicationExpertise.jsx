import "./ModernApplicationExpertise.css";
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
          <span className="section-label">Modern Application Engineering</span>
          <h2>
            AI-Enabled Applications Powering Performance, Efficiency, and Long-Term Business Growth
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>AI-Enabled Application Development</h4>
            <p>
              Build intelligent applications that automate workflows, improve usability, and support faster execution.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Custom Application Engineering</h4>
            <p>
              Create tailored web and mobile applications aligned with your business goals and operational needs.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud-Native Application Engineering</h4>
            <p>
              Develop scalable applications designed for performance across modern cloud and hybrid environments.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Application Modernisation</h4>
            <p>
              Upgrade legacy systems into faster, more usable, and future-ready digital applications.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Secure, Scalable Architecture</h4>
            <p>
              Ensure applications are resilient, compliant, and built to perform under real business demand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
