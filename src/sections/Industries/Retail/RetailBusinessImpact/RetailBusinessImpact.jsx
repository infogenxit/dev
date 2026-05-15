import "./RetailBusinessImpact.css";
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
          <h2>Why Retailers Work With Infogenx?</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Local Team" />
            </div>
            <div className="impact-content">
              <h4>Queensland Market Experts</h4>
              <p>
                Local Brisbane team that understands the Queensland retail market and its specific customer preferences.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Scalable" />
            </div>
            <div className="impact-content">
              <h4>Built to Scale</h4>
              <p>
                Solutions designed to handle both single independent stores and growing multi-location chains seamlessly.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Security" />
            </div>
            <div className="impact-content">
              <h4>Cybersecurity-First</h4>
              <p>
                Every solution is built compliance-ready and cybersecurity-first to protect sensitive customer payment data.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Estimates" />
            </div>
            <div className="impact-content">
              <h4>Zero-Obligation Estimates</h4>
              <p>
                We provide free project estimates with zero obligation, giving you a straight assessment of your technology needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


