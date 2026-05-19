import "./CloudComputingExpertise.css";
import IconA from "../../../../assets/images/icon1.webp";
import IconB from "../../../../assets/images/icon2.webp";
import IconC from "../../../../assets/images/icon3.webp";
import IconD from "../../../../assets/images/icon4.webp";
import IconE from "../../../../assets/images/icon5.webp";

const WebDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        <div className="appdev-expertise-header">
          <span className="section-label">What We Do</span>
          <h2>
            Our Cloud Computing <br />
            Integration Expertise
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud-Native Architectures</h4>
            <p>
              Design serverless architectures and distributed microservices engineered for automated scaling.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Secure Workload Migration</h4>
            <p>
              Perform lift-and-shift of transactional databases and legacy ERP platforms with minimal downtime.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Multi-Cloud Architecture</h4>
            <p>
              Deploy and orchestrate secure hybrid workloads seamlessly across AWS, Microsoft Azure, and GCP environments.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Cost Governance & Auditing</h4>
            <p>
              Perform deep environment audits to discover overprovisioning, optimize nodes, and reduce licensing fees.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Enterprise Cloud Security</h4>
            <p>
              Implement identity access management (IAM), strict encryption rules, and threat monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevExpertise;


