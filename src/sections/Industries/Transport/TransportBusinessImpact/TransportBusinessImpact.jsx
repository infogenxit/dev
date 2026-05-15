import "./TransportBusinessImpact.css";
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
          <h2>Why Logistics Businesses Choose Infogenx</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Local Team" />
            </div>
            <div className="impact-content">
              <h4>Queensland Freight Experts</h4>
              <p>
                Local Brisbane team that understands the unique operational challenges of Queensland freight and logistics.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="TMS" />
            </div>
            <div className="impact-content">
              <h4>Ready-Built TMS</h4>
              <p>
                Start with a proven Transportation Management System with room for full custom configuration to fit your unique fleet needs.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Integration" />
            </div>
            <div className="impact-content">
              <h4>Seamless Integration</h4>
              <p>
                We connect everything to the systems you already run, ensuring data flows without forcing a total system replacement.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Consultation" />
            </div>
            <div className="impact-content">
              <h4>Zero Lock-In Consultation</h4>
              <p>
                Get a free project estimate with zero obligation. We provide straight answers on what actually needs fixing in your operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


