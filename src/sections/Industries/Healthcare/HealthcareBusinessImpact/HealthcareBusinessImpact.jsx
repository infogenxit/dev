import "./HealthcareBusinessImpact.css";
import Business1 from "../../../../assets/images/business_impact_healthcare.png";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Our Difference</span>
          <h2>Why Practices Choose Infogenx Over the Big Vendors</h2>
          <p className="impact-intro-text" style={{ maxWidth: "800px", margin: "20px auto 0", color: "#666" }}>
            The big software vendors sell you a product. We figure out what your operation actually needs first, then build or configure around that. It's a different approach, and it shows in the results.
          </p>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Custom Fit" />
            </div>
            <div className="impact-content">
              <h4>Custom Fit vs Generic</h4>
              <p>
                We don't sell generic software packages. We build systems around what your practice actually needs to function efficiently.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Compliance" />
            </div>
            <div className="impact-content">
              <h4>Baked-In Compliance</h4>
              <p>
                Every system is compliant with HIPAA and Australian healthcare regulations—that's not a checkbox, it's baked in from the start.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Interoperability" />
            </div>
            <div className="impact-content">
              <h4>True Interoperability</h4>
              <p>
                We've learned that interoperability is the biggest headache. Your new system has to work with your existing one. We make sure it does.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Cybersecurity" />
            </div>
            <div className="impact-content">
              <h4>Full-Picture Security</h4>
              <p>
                Our cybersecurity covers the full picture, from access control to how data moves between systems, ensuring patient privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

