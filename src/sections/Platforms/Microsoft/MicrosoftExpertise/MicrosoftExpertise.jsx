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
          <h2>Why Choosing a Brisbane-Based Microsoft Partner Makes a Difference</h2>
          <p className="expertise-intro-text" style={{ maxWidth: "900px", margin: "20px auto 0", color: "#666" }}>
            Partnering with a Microsoft Dynamics 365 consultant in Brisbane ensures that your technology is not just 'installed' but truly configured to support your growth. Microsoft Dynamics 365 integrates seamlessly with the tools you already use—Outlook, Excel, and Teams—to centralise your customer data, sales pipelines, and operations.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Microsoft Dynamics 365 Implementation" className="expertise-icon" />
            <h4>Microsoft Dynamics 365 Implementation</h4>
            <p>
              Integrate sales, service, and operations into a single platform. We ensure your setup aligns with your actual workflows to reduce administrative clutter.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Power BI & Reporting Brisbane" className="expertise-icon" />
            <h4>Power BI & Reporting</h4>
            <p>
              Create easy-to-use dashboards that show you the numbers without slogging through reports. Get real-time insights to support quicker decisions.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Power Platform Solutions" className="expertise-icon" />
            <h4>Power Platform Solutions</h4>
            <p>
              Build custom Power Apps and use Power Automate to minimise manual tasks and achieve consistent operational outcomes across your business.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Microsoft Azure & Integrations" className="expertise-icon" />
            <h4>Microsoft Azure & Integrations</h4>
            <p>
              Secure and scale your systems with Azure. We use Azure Logic Apps to ensure data flows correctly between all your different tools.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Microsoft 365 & Copilot" className="expertise-icon" />
            <h4>Microsoft 365 & Copilot</h4>
            <p>
              Maximise productivity with Microsoft 365 and leverage Microsoft Copilot for AI-powered support, helping your team work smarter every day.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconA} alt="Microsoft Dynamics 365 Consultant Brisbane" className="expertise-icon" />
            <h4>Microsoft Dynamics 365 Consultant Brisbane</h4>
            <p>
              Our Brisbane-based consultants are available to provide the strategic advice and hands-on support you need to maintain your technical edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

