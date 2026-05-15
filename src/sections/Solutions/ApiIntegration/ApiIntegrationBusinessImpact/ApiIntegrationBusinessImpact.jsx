import "./ApiIntegrationBusinessImpact.css";
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
          <h2>Why Businesses Choose Infogenx for Systems Integration in Brisbane</h2>
          <p className="impact-intro-text" >
            Businesses working with Infogenx are typically dealing with fragmented systems, manual workflows, or scaling challenges. They choose us because we focus on friction-free operations.
          </p>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Real operations" />
            </div>
            <div className="impact-content">
              <h4>Real-World Mapping</h4>
              <p>
                We connect systems in a way that reflects real operations—how your teams actually use the tools day-to-day.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Outcome focused" />
            </div>
            <div className="impact-content">
              <h4>Focus on Outcomes</h4>
              <p>
                We focus on outcomes, not just technical delivery. If it doesn't solve a business problem, it's not the right integration.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Scalable" />
            </div>
            <div className="impact-content">
              <h4>Stable and Scalable</h4>
              <p>
                We build integrations that are stable and scalable, ensuring they continue to work as your transaction volume and team grows.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Support" />
            </div>
            <div className="impact-content">
              <h4>Ongoing Support</h4>
              <p>
                We stay involved beyond implementation to ensure everything works properly and adapt the system as your needs evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


