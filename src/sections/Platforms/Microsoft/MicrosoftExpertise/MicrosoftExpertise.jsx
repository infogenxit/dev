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
          <span className="section-label">Our Microsoft Capabilities — Strategy, Delivery, and Optimisation</span>
          <h2>Why Are Businesses Moving to Microsoft Dynamics 365 in Brisbane?</h2>
          <p className="expertise-intro-text" style={{ maxWidth: "950px", margin: "20px auto 0", color: "#666", fontSize: "1.05rem", lineHeight: "1.7" }}>
            Microsoft Dynamics 365 is highly preferred by and famous among companies seeking greater control of their operations. Integration of sales, service, finance and operations is possible all at a single platform. Hence, no need to navigate multiple applications to get work done efficiently.
            <br /><br />
            Integration with Microsoft Power BI imparts businesses with reporting and insights in real time, which in any case supports them to make quicker decisions. With Microsoft Copilot in Brisbane, you will enjoy seeing how AI can help automate tasks and streamline teamwork.
            <br /><br />
            However, the technology itself isn't enough. If not configured correctly, it can be underused or become too complicated. As an expert Dynamics 365 consultant in Brisbane, we ensure that the setup is right - from workflows to integrations - so that it complements your business, and doesn't get in the way.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "600", color: "#00123c" }}>
            We work with businesses throughout the whole Microsoft ecosystem - from strategy with initial planning to long-term support.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Microsoft Dynamics 365 Implementation" className="expertise-icon" />
            <h4>Microsoft Dynamics 365 Implementation</h4>
            <p>
              As a Dynamics 365 partner in Brisbane, we design systems that align with your sales, service and operational processes. This is how we support your employees to work smarter with less administrative clutter.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Power BI & Reporting Brisbane" className="expertise-icon" />
            <h4>Power BI & Reporting</h4>
            <p>
              We create dashboards that are easy to use. As a Power BI consultant in Brisbane, we aim to help you get the most out of your data without having to slog through reports.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Power Platform Solutions" className="expertise-icon" />
            <h4>Power Platform Solutions</h4>
            <p>
              With Power Apps and Power Automate in Brisbane, we build apps and automate processes to minimise manual tasks and achieve consistent outcomes.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Microsoft Azure & Integrations" className="expertise-icon" />
            <h4>Microsoft Azure & Integrations</h4>
            <p>
              Using Microsoft Azure in Brisbane, we take care of and secure your systems and help them to grow. By integrating your systems using Azure Logic Apps, we ensure data can flow from one system to another.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Microsoft 365 & Copilot" className="expertise-icon" />
            <h4>Microsoft 365 & Copilot</h4>
            <p>
              We support driving the most out of Microsoft 365, boosting collaboration and productivity, and Microsoft Copilot provides AI-powered support in your apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

