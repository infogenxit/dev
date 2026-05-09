import "./SupportBusinessImpact.css";
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
          <h2>Built for Performance and Efficiency</h2>
        </div>

        {/* Grid */}
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>
                Australian-Led Consulting with Local Accountability and
                Nationwide Delivery
              </h4>
              <p>
                Local expertise ensures your platforms are supported and
                optimised for Australian business needs.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Data-Driven Optimisation for Maximum ROI</h4>
              <p>
                We leverage data to continually refine your system to achieve
                optimal performance and return on investment.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Proven Outcomes: Higher Efficiency and Lower Costs</h4>
              <p>
                Our solutions reduce downtime and improve overall system
                performance, thereby lowering operational costs.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Security-First Approach Aligned to Australian Standards</h4>
              <p>
                Ensuring your systems remain secure and compliant with
                Australian standards, every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
