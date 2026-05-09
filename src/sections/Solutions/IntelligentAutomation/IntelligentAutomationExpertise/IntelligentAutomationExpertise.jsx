import "./IntelligentAutomationExpertise.css";
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
          <span className="section-label">
            Intelligent Automation Solutions
          </span>
          <h2>
            Build connected automation across your core systems to simplify work, reduce friction,
            and improve operational performance.
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Process Discovery and Mapping</h4>
            <p>
              Identify high-impact automation opportunities across workflows, systems, and teams.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>AI Workflow Design and Deployment</h4>
            <p>
               Build intelligent workflows with governance, compliance, and operational fit built in.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Continuous Optimisation and Monitoring</h4>
            <p>
              Refine automation performance over time to sustain efficiency and deliver measurable gains.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Platform-Aligned Automation</h4>
            <p>
              Deliver connected automation across Microsoft, Zoho, and Odoo environments.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Secure, Scalable Execution</h4>
            <p>
              Support long-term efficiency with reliable, governed, and scalable automation systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
