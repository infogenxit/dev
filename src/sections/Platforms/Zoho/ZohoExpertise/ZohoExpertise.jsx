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
            <img src={IconA} alt="Zoho CRM Brisbane" className="expertise-icon" />
            <h4>Zoho CRM</h4>
            <p>
              Transforming CRM from an administrative burden into a growth engine by documenting sales processes and automating follow-ups.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Zoho One Brisbane" className="expertise-icon" />
            <h4>Zoho One</h4>
            <p>
              A comprehensive platform that integrates sales, finance, HR, and operations into a single source of truth for your business.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Zoho Analytics Brisbane" className="expertise-icon" />
            <h4>Zoho Analytics</h4>
            <p>
              Turning complex data into actionable insights through easy-to-understand, real-time dashboards for better decision making.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Zoho Automation Brisbane" className="expertise-icon" />
            <h4>Zoho Automation & Flow</h4>
            <p>
              Reducing manual work by automating approvals, notifications, and seamless cross-tool data syncs across your tech stack.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Zoho Creator Brisbane" className="expertise-icon" />
            <h4>Zoho Creator</h4>
            <p>
              Building custom applications tailored to unique business needs that off-the-shelf software simply cannot meet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

