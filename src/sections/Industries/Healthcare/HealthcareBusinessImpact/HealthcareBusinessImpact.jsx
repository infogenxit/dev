import "./HealthcareBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Why Practices Choose Infogenx</span>
          <h2>Over the Big Vendors</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Custom Fit vs Generic</h4>
              <p>
                The big software vendors sell you a product. We figure out what your operation actually needs first.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Australian Compliance</h4>
              <p>
                HIPAA and Australian healthcare regulations compliance is baked in from the start, not just a checkbox.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Seamless Interoperability</h4>
              <p>
                We ensure your new systems work flawlessly with your existing healthcare tools and databases.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Cost-Efficient Infrastructure</h4>
              <p>
                We design for the long run, building infrastructure that doesn't quietly inflate your costs year over year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

