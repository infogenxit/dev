import "./ZohoExpertise.css";
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
          <span className="section-label">Integrated Zoho Services to Empower Your Business</span>
          <h2>
            Why Partnering with a Zoho Consultant in Brisbane Improves Operational Performance?
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho CRM Configuration</h4>
            <p>
              Set up and tailor Zoho CRM to improve pipeline visibility, sales execution, and customer management.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho Flow Automation</h4>
            <p>
              Automate repetitive processes and connect apps to keep operations moving faster with less manual effort.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho Analytics Enablement</h4>
            <p>
              Build dashboards and reporting that turn business data into clearer insight and better decision-making.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Zoho One Deployment</h4>
            <p>
              Roll out the right Zoho apps across your business with a structure aligned to your workflows and goals.
            </p>
          </div>
          <div className="expertise-item">
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

