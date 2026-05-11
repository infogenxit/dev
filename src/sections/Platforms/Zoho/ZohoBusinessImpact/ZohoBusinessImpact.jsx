import "./ZohoBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Our Philosophy</span>
          <h2>The Infogenx Difference: Strategy, Execution, and Long-Term Partnership</h2>
          <p className="impact-intro-text" style={{ maxWidth: "800px", margin: "20px auto 0", color: "#666" }}>
            There are plenty of Zoho partners out there. What makes us different is how we approach the work.
          </p>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Automation first" />
            </div>
            <div className="impact-content">
              <h4>Automation-First</h4>
              <p>
                We believe in automation-first. If it can be made easier or automated, we can make it happen.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Business outcomes" />
            </div>
            <div className="impact-content">
              <h4>Think Business, Not Just Tech</h4>
              <p>
                We deliver against business outcomes, not just technical specifications.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Technical breadth" />
            </div>
            <div className="impact-content">
              <h4>Technical Breadth</h4>
              <p>
                All our tech fits together, from cloud and data to application development and integration.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Local presence" />
            </div>
            <div className="impact-content">
              <h4>We're Local</h4>
              <p>
                Based in Brisbane, you can see us, speak to us, and call us out when you need us.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Long term partnership" />
            </div>
            <div className="impact-content">
              <h4>Long-Term Partnership</h4>
              <p>
                We're here for the long haul. We don't just set and forget; we evolve as your business does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

