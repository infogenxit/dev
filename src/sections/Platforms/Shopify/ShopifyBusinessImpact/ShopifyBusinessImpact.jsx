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
          <span className="section-label">Our Approach</span>
          <h2>Built Around Real eCommerce Operations</h2>
          <p className="impact-intro-text" >
            Most Shopify projects focus only on design or development. That’s not enough. We start by understanding how your business actually runs—orders, fulfilment, customer flow, and backend operations.
          </p>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Business operations" />
            </div>
            <div className="impact-content">
              <h4>Operations First</h4>
              <p>
                We begin by knowing how your business really works—fulfilment, customer flow, and backend operations.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="System design" />
            </div>
            <div className="impact-content">
              <h4>System-Led Design</h4>
              <p>
                We design the system around your actual business needs, ensuring the technology supports your team, not the other way around.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Practical setup" />
            </div>
            <div className="impact-content">
              <h4>Clean & Practical</h4>
              <p>
                We keep the setup clean and practical—no unnecessary complexity that slows down your site or your team.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Post-launch support" />
            </div>
            <div className="impact-content">
              <h4>Scaling Support</h4>
              <p>
                 And we stay involved after launch, helping you improve performance and scale your business without disruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


