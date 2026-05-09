import "./OdooExpertise.css";
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
          <span className="section-label">Odoo ERP Partners</span>
          <h2>
            End-to-end Odoo solutions built for control, agility, and business growth
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Odoo Module Selection</h4>
            <p>
              Choose the right Odoo modules to match your workflows, priorities, and operational requirements.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>ERP Implementation and Configuration</h4>
            <p>
              Deploy Odoo with the structure, setup, and controls needed for smoother day-to-day operations.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Custom Module Development</h4>
            <p>
              Extend Odoo with tailored functionality that fits your business model and process requirements.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Workflow Automation and Integration</h4>
            <p>
              Connect teams, systems, and processes to reduce manual effort and improve operational flow.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Post-Go-Live Optimisation and Support</h4>
            <p>
              Refine performance, support adoption, and keep your Odoo environment aligned with business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
