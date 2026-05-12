import "./ManufacturingBusinessImpact.css";
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
          <h2>Why Do Manufacturers Work With Infogenx?</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Local Team" />
            </div>
            <div className="impact-content">
              <h4>Brisbane-Based Team</h4>
              <p>
                We're not a remote vendor who's never seen a production floor. We're right here in Brisbane, ready to visit your facility.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Mobility" />
            </div>
            <div className="impact-content">
              <h4>Enterprise Mobility Experts</h4>
              <p>
                As an award-winning IT company, we have real-world experience building enterprise mobility tools that work.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Scalable" />
            </div>
            <div className="impact-content">
              <h4>Scalable Solutions</h4>
              <p>
                Our manufacturing systems are built to scale, serving small facilities and large multi-site operations alike.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Compliance" />
            </div>
            <div className="impact-content">
              <h4>Built-In Compliance</h4>
              <p>
                Compliance and reporting are built into our systems from day one—not patched on later as an afterthought.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

