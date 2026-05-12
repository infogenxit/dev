import "./FinanceBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Our Impact</span>
          <h2>Why Businesses Choose Infogenx?</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Workflow Focus" />
            </div>
            <div className="impact-content">
              <h4>Real Workflow Focus</h4>
              <p>
                Solutions built around your actual business operations, not generic templates that force you to change how you work.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Compliance" />
            </div>
            <div className="impact-content">
              <h4>Security & Compliance</h4>
              <p>
                Strong focus on accuracy and protection, ensuring your systems meet Australian regulatory standards like ASIC and the Privacy Act.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Efficiency" />
            </div>
            <div className="impact-content">
              <h4>Reduced Manual Work</h4>
              <p>
                Drastically improve efficiency by automating repetitive tasks like data entry, invoicing, and reconciliation.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Support" />
            </div>
            <div className="impact-content">
              <h4>Ongoing Reliable Support</h4>
              <p>
                We stay involved after launch. Reliable support is part of how we work—if something needs fixing or improving, we're available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

