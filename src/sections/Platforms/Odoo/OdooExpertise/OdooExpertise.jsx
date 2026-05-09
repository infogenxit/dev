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
          <span className="section-label">Our Role as an Odoo Consultant</span>
          <h2>
            Beyond Setup, Focused on Results. We don’t treat Odoo as a product, but a component of a bigger system.
          </h2>
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

