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
          <span className="section-label">The Real Value of Odoo in Brisbane</span>
          <h2>When It’s Implemented Properly</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>A Single Platform</h4>
              <p>
                Odoo provides a single platform to deal with sales, operations, finances and internal operations with common data.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Flexible Growth</h4>
              <p>
                You are free to begin with a small number of modules and grow with your business. A fixed framework does not constrain you.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Tailored Configuration</h4>
              <p>
                The configuration must be based on the way your business is conducted- not the way the software is programmed.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Unified Working System</h4>
              <p>
                 Our strength is our power to combine automation, integration, and data into one working system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

