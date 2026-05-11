import "./OdooExpertise.css";
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
          <span className="section-label">The Real Value of Odoo in Brisbane</span>
          <h2>Beyond Setup, Focused on Results</h2>
          <p className="expertise-intro-text" style={{ maxWidth: "900px", margin: "20px auto 0", color: "#666" }}>
            Odoo provides a single platform to deal with sales, operations, finances and internal operations. Rather than having to alternate between several tools, it all operates on the same dataset. However, the software’s performance is only as good as the configuration that is done. We ensure that our configuration is based on how you conduct business, rather than software programming.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Odoo Application in Brisbane</h4>
            <p>
              We design your Odoo ERP system around actual workflows—sales, operations, finance—to provide your team with frictionless use.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Odoo Customisation</h4>
            <p>
              Being an Odoo developer in Brisbane, we customize modules, logic and reporting where necessary. We do it well.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Odoo Integration</h4>
            <p>
              We integrate Odoo with your current accounting software, CRMs, or bespoke systems and have data flow without causing waste.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Odoo Automation in Brisbane</h4>
            <p>
              We eliminate manual repetitive work with the functionality of Odoo and third-party integrations, allowing your team to work in reality.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Post-Go-Live Optimisation</h4>
            <p>
              We remain post-go-live, as that is when improvements occur most, maintaining the installation simple and clean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

