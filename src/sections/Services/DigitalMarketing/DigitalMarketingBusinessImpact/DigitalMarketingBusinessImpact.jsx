import "./DigitalMarketingBusinessImpact.css";
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
          <h2>Transform Your Business with Data-Driven Marketing</h2>
        </div>

        {/* Grid */}
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Results-Driven Approach</h4>
              <p>
                We focus on measurable outcomes like leads, conversions, and
                revenue growth.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Multi-Channel Expertise</h4>
              <p>
                From SEO to social media, we deliver integrated marketing
                strategies across all digital channels.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Cost-Effective Campaigns</h4>
              <p>
                Maximize your marketing budget with optimized campaigns designed
                for high ROI.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Growth-Focused Strategies</h4>
              <p>
                We align marketing efforts with your business goals to ensure
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
