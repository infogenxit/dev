import "./OdooBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Our Approach</span>
          <h2>A Business-First Approach to Odoo Implementation and Optimisation</h2>
          <p className="impact-intro-text" >
            ERP projects fail mainly due to the fact that they are handled as IT initiatives rather than business decisions. We do not act in the same manner.
          </p>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Know your business" />
            </div>
            <div className="impact-content">
              <h4>Real Workflow Knowledge</h4>
              <p>
                We begin by knowing how your business really works, not necessarily what you have in a process document.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="System development" />
            </div>
            <div className="impact-content">
              <h4>Reality-Based Development</h4>
              <p>
                We develop the system based on the reality of your operations, ensuring the tools fit the people, not the other way around.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Simple and clean" />
            </div>
            <div className="impact-content">
              <h4>No Extravagance</h4>
              <p>
                We maintain the installation simple and clean—no extra features you don't need, just pure efficiency.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Post-go-live" />
            </div>
            <div className="impact-content">
              <h4>Continuous Improvement</h4>
              <p>
                 We remain post-go-live, as that is when the real improvements and optimisations occur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


