import "./IntelligentAutomationExpertise.css";
import IconA from "../../../../assets/images/icon1.webp";
import IconB from "../../../../assets/images/icon2.webp";
import IconC from "../../../../assets/images/icon3.webp";
import IconD from "../../../../assets/images/icon4.webp";
import IconE from "../../../../assets/images/icon5.webp";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        <div className="appdev-expertise-header">
          <span className="section-label">
            Intelligent Automation Solutions
          </span>
          <h2>
            Build connected automation across your core systems to simplify work, reduce friction,
            and improve operational performance.
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Process Discovery and Mapping</h4>
            <p>
              Identify high-impact automation opportunities across workflows, systems, and teams.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>AI Workflow Design and Deployment</h4>
            <p>
               Build intelligent workflows with governance, compliance, and operational fit built in.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Continuous Optimisation and Monitoring</h4>
            <p>
              Refine automation performance over time to sustain efficiency and deliver measurable gains.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Platform-Aligned Automation</h4>
            <p>
              Deliver connected automation across Microsoft, Zoho, and Odoo environments.
            </p>
          </div>
          <div className="expertise-item">
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

