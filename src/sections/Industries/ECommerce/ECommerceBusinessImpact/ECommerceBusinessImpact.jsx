import "./ECommerceBusinessImpact.css";
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
          <h2>Why is Infogenx Trusted by Modern Enterprises?</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Direct Support" />
            </div>
            <div className="impact-content">
              <h4>Direct Developer Access</h4>
              <p>
                Get a direct line to the people actually building your store, not an account manager playing telephone with a dev team.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Local Experts" />
            </div>
            <div className="impact-content">
              <h4>Australian Market Experts</h4>
              <p>
                We understand local payment preferences, shipping expectations, and consumer behaviour—which matters for conversions.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="No Shortcuts" />
            </div>
            <div className="impact-content">
              <h4>No Shortcuts, No Fluff</h4>
              <p>
                We build online stores around how your customers actually shop, not generic templates that look the same as everyone else.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Support" />
            </div>
            <div className="impact-content">
              <h4>We Don't Disappear</h4>
              <p>
                Most agencies vanish after launch. We stay involved, providing the maintenance and monitoring your growth requires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


