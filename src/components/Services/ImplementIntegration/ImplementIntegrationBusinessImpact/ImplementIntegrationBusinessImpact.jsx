import "./ImplementIntegrationBusinessImpact.css";
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
          <h2>Built for Implementation That Delivers</h2>
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
                Consulting and delivery backed by local expertise and
                accountability across Australia.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Certified Implementation Across All Platforms</h4>
              <p>
                We are certified in Microsoft, Zoho, and Odoo, delivering
                dependable and custom-fit solutions.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Proven Outcomes: On-Time, On-Budget Delivery</h4>
              <p>
                We pride ourselves on delivering solutions on time and within
                your budget, every time.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Security-First Approach</h4>
              <p>
                We implement solutions aligned with security, compliance, and
                operational governance standards in Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
