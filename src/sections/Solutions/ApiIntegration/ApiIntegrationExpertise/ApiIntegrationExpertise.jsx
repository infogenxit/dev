import "./ApiIntegrationExpertise.css";
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
          <span className="section-label">Integration & API Enablement</span>
          <h2>
            Connect platforms, automate data flow, and create seamless operations across your digital ecosystem.
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Integration Discovery and Mapping</h4>
            <p>
              Identify disconnected systems, data gaps, and high-value integration opportunities across your environment.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>API Strategy and Architecture</h4>
            <p>
              Design scalable API frameworks that support secure communication and long-term interoperability.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>System Integration and Deployment</h4>
            <p>
              Connect platforms, applications, and workflows with minimal disruption and strong operational fit.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Data Flow Governance and Reliability</h4>
            <p>
              Ensure integrations are secure, traceable, and structured for dependable data movement.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Monitoring and Optimisation</h4>
            <p>
              Continuously improve integration performance, reliability, and scalability as business needs evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
