import "./MicrosoftExpertise.css";
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
          <span className="section-label">Microsoft Platform Expertise</span>
          <h2>
            Smarter Microsoft Solutions for Automation, Insight, and Scalable Growth
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Power Platform Automation</h4>
            <p>
              Automate workflows, reduce manual effort, and improve execution with Power Apps, Power Automate, and Power BI.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Azure AI Solutions</h4>
            <p>
              Apply AI services that improve insight, strengthen decision-making, and support more intelligent business operations.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Dynamics Implementation</h4>
            <p>
              Deploy Dynamics solutions that connect teams, streamline processes, and improve visibility across core business functions.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Microsoft Integration and Optimisation</h4>
            <p>
              Connect Microsoft tools with your wider ecosystem to improve data flow, performance, and operational alignment.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Security, Governance, and Compliance</h4>
            <p>
              Build Microsoft environments that are secure, scalable, and aligned with Australian business and compliance expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
