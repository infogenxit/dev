import "./OdooBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.png";
import Business2 from "../../../../assets/images/businessimg2.png";
import Business3 from "../../../../assets/images/businessimg3.png";
import Business4 from "../../../../assets/images/businessimg4.png";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        {/* Header */}
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Built for Odoo That Performs</h2>
        </div>

        {/* Grid */}
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Australian-Led, Locally Accountable</h4>
              <p>
                Consulting and delivery backed by local accountability and nationwide support.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Certified Odoo Expertise</h4>
              <p>
                Strong capability in Odoo implementation, customisation, and unified operational delivery.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Proven Operational Outcomes</h4>
              <p>
                Improved efficiency, stronger control, and better cost management across business operations.

              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Security-First by Design</h4>
              <p>
                 Solutions aligned with Australian security expectations, compliance needs, and business standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
