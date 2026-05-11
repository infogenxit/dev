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
            <h4>Zoho CRM in Brisbane</h4>
            <p>
              The foundation of your sales engine. We configure it to reflect your specific sales pipeline, ensuring no lead is missed.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Zoho One Brisbane" className="expertise-icon" />
            <h4>Zoho One</h4>
            <p>
              The complete operating system for business. We help you manage over 45+ integrated applications from one dashboard.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Zoho Analytics Brisbane" className="expertise-icon" />
            <h4>Zoho Analytics</h4>
            <p>
              Data is no use unless you can get at it right. We transform your data into easy-to-understand, real-time dashboards so you can make decisions without wading through spreadsheets.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Zoho Automation Brisbane" className="expertise-icon" />
            <h4>Zoho Automation & Zoho Flow</h4>
            <p>
              Every business loses hours every week on repetitive work. We automate processes such as approvals, notifications and syncs so that things just get done automatically - and reliably.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Zoho Creator Brisbane" className="expertise-icon" />
            <h4>Zoho Creator</h4>
            <p>
              Sometimes, generic tools don't always fit the bill. We build customised apps with Zoho Creator in Brisbane for job management, recruitment and internal processes.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconA} alt="Zoho ERP Brisbane" className="expertise-icon" />
            <h4>Zoho ERP, Integration & Implementation</h4>
            <p>
              Need something more advanced? We integrate Zoho with Xero, MYOB or your existing ecommerce platform so that your inventory, finance and sales are in sync.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Zoho Development Brisbane" className="expertise-icon" />
            <h4>Zoho Development in Brisbane</h4>
            <p>
              For those who need deep customisation, our developers build bespoke scripts (Deluge) to push Zoho's capabilities to the limit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

