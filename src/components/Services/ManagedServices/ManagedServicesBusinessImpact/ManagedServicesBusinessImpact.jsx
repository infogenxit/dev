import "./ManagedServicesBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.png";
import Business2 from "../../../../assets/images/businessimg2.png";
import Business3 from "../../../../assets/images/businessimg3.png";
import Business4 from "../../../../assets/images/businessimg4.png";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        {/* Header */}
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Built for Business Impact</h2>
        </div>

        {/* Grid */}
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Australian-led Consultings</h4>
              <p>
                Local expertise ensures your business gets tailored solutions
                with national scalability.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Predictable Costs and Reliable Uptime</h4>
              <p>
                Our structured services come with fixed costs and maximum uptime
                for peace of mind.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Proven Outcomes</h4>
              <p>
                Reduced Downtime and IT Burden. Focus on growth while we handle
                the tech, ensuring minimal disruptions.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Security-first Approach</h4>
              <p>
                Your data and operations are secure, compliant, and protected
                with a robust security framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
