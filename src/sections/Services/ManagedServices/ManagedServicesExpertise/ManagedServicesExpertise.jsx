import "./ManagedServicesExpertise.css";
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
          <span className="section-label">Workflow Automation</span>
          <h2>
            Intelligent Business Automation, Custom Integration, and Seamless Processes
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Operations & Process Automation</h4>
            <p>
              We leverage RPA tools like UiPath, Automation Anywhere, and Blue Prism to automate rule-based processes cleanly.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Sales & CRM Automation</h4>
            <p>
              Automate lead capture, follow-up sequences, pipeline reporting, and updates inside Microsoft, Zoho, and Odoo.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>ERP & Finance Automation</h4>
            <p>
              Connect systems to automate data entry, invoice processing, supply chain updates, and payment approvals flawlessly.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>HR & Employee Onboarding</h4>
            <p>
              Remove HR admin overhead by automating leave requests, document flows, onboarding systems, and compliance.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>AI-Powered Intelligent RPA</h4>
            <p>
              Combine RPA with machine learning, NLP, and document understanding to handle unstructured emails and contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
