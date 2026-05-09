import React from "react";
import "./ShopifyExpertise.css";
import IconA from "../../../../assets/images/icon1.webp";
import IconB from "../../../../assets/images/icon2.webp";
import IconC from "../../../../assets/images/icon3.webp";
import IconD from "../../../../assets/images/icon4.webp";
import IconE from "../../../../assets/images/icon5.webp";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        <div className="appdev-expertise-header">
          <span className="section-label">Our Shopify Capabilities</span>
          <h2>From Build to Scale</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Shopify Development</h4>
            <p>
              We develop Shopify stores to be fast, clean, and focused on your customer experience — not generic templates.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Shopify App Development</h4>
            <p>
              When standard features aren't enough, we build custom Shopify apps to add specific functionality to your unique workflows.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Shopify Integration</h4>
            <p>
              We integrate Shopify with your CRMs, ERPs, and accounting tools to ensure data moves seamlessly across your entire business.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Shopify Automation</h4>
            <p>
              Eliminate manual work with practical eCommerce automation tools to manage repetitive processes like order processing and updates.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Shopify Analytics</h4>
            <p>
              Set up reporting that actually makes sense. Track sales and customer behaviour without searching through fragmented tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

