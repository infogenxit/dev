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
          <span className="section-label">Our Philosophy</span>
          <h2>The Real Value of Odoo in Brisbane: When It’s Implemented Properly</h2>
          <p className="expertise-intro-text" style={{ maxWidth: "950px", margin: "20px auto 0", color: "#666", fontSize: "1.05rem", lineHeight: "1.7" }}>
            Odoo provides a single platform to deal with sales, operations, finances and internal operations. Rather than having to alternate between several tools, it all operates on the same system with common data. This is what makes it useful because of its flexibility. You are free to begin with a small number of modules and grow with your business.
            <br /><br />
            However, this is the aspect that most businesses fail to comprehend: Odoo does not address issues by default. When it is implemented improperly, it ends up being an additional system that people refuse to use. This is why it is important to have an experienced Odoo consultant in Brisbane. The configuration must be based on the way your business is conducted—not the way the software is programmed.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "600", color: "#00123c" }}>
            Our Role as an Odoo Consultant: Beyond Setup, Focused on Results. We consider it a component of a bigger system.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Odoo Application Brisbane" className="expertise-icon" />
            <h4>Odoo Application in Brisbane</h4>
            <p>
              We design your Odoo ERP system around actual workflows—sales, operations, finance—to provide your team with frictionless use.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Odoo Customisation Brisbane" className="expertise-icon" />
            <h4>Odoo Customisation</h4>
            <p>
              Being an Odoo developer in Brisbane, we customize modules, logic and reporting where necessary. It is not all that requires customisation—but where it is, we do it well.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Odoo Integration Brisbane" className="expertise-icon" />
            <h4>Odoo Integration</h4>
            <p>
              We integrate Odoo with your current systems, which could be accounting software, CRMs, or bespoke systems and have data flow across your business without causing waste.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Odoo Automation Brisbane" className="expertise-icon" />
            <h4>Odoo Automation in Brisbane</h4>
            <p>
              The bulk of the value lies in automation. We eliminate manual repetitive work with the functionality of Odoo and third-party integrations, allowing your team to focus on reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


