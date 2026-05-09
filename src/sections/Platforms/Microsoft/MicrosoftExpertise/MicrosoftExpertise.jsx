import "./MicrosoftExpertise.css";
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
          <span className="section-label">Trusted Microsoft Partner in Brisbane</span>
          <h2>
            Dynamics 365 - Power BI - Microsoft Solutions
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Microsoft Dynamics 365</h4>
            <p>
              Integrate sales, service, and operations into a single platform. We ensure your setup aligns with your actual workflows to reduce administrative clutter.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Power BI & Reporting</h4>
            <p>
              Create easy-to-use dashboards that show you the numbers without slogging through reports. Get real-time insights to support quicker decisions.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Power Platform Solutions</h4>
            <p>
              Build custom Power Apps and use Power Automate to minimise manual tasks and achieve consistent operational outcomes across your business.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Microsoft Azure & Integrations</h4>
            <p>
              Secure and scale your systems with Azure. We use Azure Logic Apps to ensure data flows correctly between all your different tools.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Microsoft 365 & Copilot</h4>
            <p>
              Maximise productivity with Microsoft 365 and leverage Microsoft Copilot for AI-powered support, helping your team work smarter every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

