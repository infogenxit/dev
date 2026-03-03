import "./ZohoExpertise.css";
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
          <span className="section-label">Zoho Platform Specialists</span>
          <h2>
            Smarter Zoho solutions for connected workflows, automation, and business growth
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho CRM Configuration</h4>
            <p>
              Set up and tailor Zoho CRM to improve pipeline visibility, sales execution, and customer management.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho Flow Automation</h4>
            <p>
              Automate repetitive processes and connect apps to keep operations moving faster with less manual effort.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho Analytics Enablement</h4>
            <p>
              Build dashboards and reporting that turn business data into clearer insight and better decision-making.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho One Deployment</h4>
            <p>
              Roll out the right Zoho apps across your business with a structure aligned to your workflows and goals.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Optimisation, Support, and Compliance</h4>
            <p>
              Improve adoption, refine performance, and keep your Zoho environment aligned with Australian business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
