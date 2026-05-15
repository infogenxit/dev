import "./ApiIntegrationExpertise.css";
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
          <span className="section-label">Our Philosophy</span>
          <h2>Systems Integration in Brisbane Without Breaking What Already Works</h2>
          <p className="expertise-intro-text" style={{ maxWidth: "950px", margin: "20px auto 0", color: "#666", fontSize: "1.05rem", lineHeight: "1.7" }}>
            Every business has a mix of tools — CRM, ERP, finance platforms, cloud apps, and internal systems. The issue isn’t the tools themselves. It’s the gaps between them. With our systems integration in Brisbane, we close those gaps properly.
            <br /><br />
            We don’t replace your systems unless it’s necessary. We integrate what you already use and make it work together properly, removing the friction that slows your team down.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Real-time data exchange" className="expertise-icon" />
            <h4>Real-Time Exchange</h4>
            <p>
              We ensure your systems exchange data in real time, so you're always working with the most current information across every platform.
            </p>
          </div>
          <div className="expertise-item">
            <h4>No Duplication</h4>
            <img src={IconB} alt="No manual syncing" className="expertise-icon" />
            <p>
              Eliminate duplication or manual syncing. Our integrations ensure data is entered once and reflected everywhere it needs to be.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Automated workflows" className="expertise-icon" />
            <h4>Automated Workflows</h4>
            <p>
              Workflows move automatically between platforms, allowing processes to complete without manual handovers or delays.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Consistent information" className="expertise-icon" />
            <h4>Accurate Information</h4>
            <p>
              Teams get consistent, accurate information across all tools, improving decision-making and reducing cross-departmental confusion.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Operational focus" className="expertise-icon" />
            <h4>Operational Clarity</h4>
            <p>
              The goal is not just integration — it’s operational clarity. When data flows properly, your business runs cleaner and faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


