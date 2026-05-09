import React from "react";
import "./ShopifyBusinessImpact.css";
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
          <h2>A Shopify Agency That Delivers Results</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Hands-On Agency</h4>
              <p>
                A local Brisbane team that specializes in building dependable back-end processes that keep your store running smoothly.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Scalable Infrastructure</h4>
              <p>
                We focus on building systems that support real growth — not just getting you live, but helping you expand predictably.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Real eCommerce Experience</h4>
              <p>
                Our strength comes from combining Shopify with automation and data so everything works together in one unified system.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Australian Market Experts</h4>
              <p>
                We understand local payment preferences, shipping expectations, and consumer behaviour in the Australian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

