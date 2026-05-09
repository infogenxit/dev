import "./MicrosoftBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Built for Real-World Microsoft Impact</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Active Microsoft Partner</h4>
              <p>
                An active Brisbane-based Microsoft partner dedicated to helping you integrate and optimise your business systems.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>30+ Years Experience</h4>
              <p>
                Our team brings over three decades of collective experience in Dynamics 365, Power BI, and the broader Microsoft ecosystem.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Outcome-Driven Setup</h4>
              <p>
                We look for real solutions, not just workarounds, ensuring technology complements your processes rather than getting in the way.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Long-Term Support</h4>
              <p>
                We continue to support you beyond the initial setup, providing improvements and adjustments as your business needs evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

