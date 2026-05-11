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
          <span className="section-label">Integrated Zoho Services to Optimise and Grow Your Business</span>
          <h2>
            Why Partnering with a Zoho Consultant in Brisbane Improves Operational Performance?
          </h2>
          <p style={{ marginTop: "20px", color: "#555", fontSize: "1.05rem", lineHeight: "1.7" }}>
            Zoho is more than a CRM, an integrated business system for sales, finance, human resources and operations. But it matters the most and has its own value in how well it’s implemented. Out-of-the-box setups rarely match real business workflows.
            <br /><br />
            Our experienced Zoho consultant in Brisbane will set it up correctly. They will connect it to your other systems and tailor it to your business. With 30+ years of experience, Infogenx offers structured Zoho implementations that minimise manual tasks, provide greater visibility, and build a scalable system that's future-proofed to perform.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "600", color: "#00123c" }}>
            We cover the full lifecycle—from strategy to support. No gaps, no handovers.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Zoho CRM Brisbane" className="expertise-icon" />
            <h4>Zoho CRM in Brisbane</h4>
            <p>
              CRM shouldn't be an administrative burden. We properly document your sales process, create realistic pipelines and automate follow-up reminders so you can turn leads into sales, not just keep chasing them.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Zoho One Brisbane" className="expertise-icon" />
            <h4>Zoho One</h4>
            <p>
              If you're sick of dealing with multiple tools, Zoho One in Brisbane gives you a single platform. We build systems that integrate your sales, finance, HR and operations - so you have a single source of truth.
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
              Need something more advanced? We integrate Zoho with Xero, MYOB or your existing systems and set up a system that provides seamless financial, inventory and workflow support.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Zoho Development Brisbane" className="expertise-icon" />
            <h4>Zoho Development in Brisbane</h4>
            <p>
              For complex needs, we go deeper. From custom workflows to API integrations and advanced scripting, we build exactly what your business needs—no shortcuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

