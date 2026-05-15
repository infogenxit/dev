import React from "react";
import "./ShopifyImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Planning to Switch to Shopify? Start with the Right Setup
          </h2>
          <p>
            If you’re looking at the Shopify transition, the key is getting the structure right from the beginning. Fixing a poorly set-up store later is always more time-consuming and costly. At Infogenx, as your Shopify expert in Brisbane, we focus on building systems that support real growth—not just getting you live.
            <br /><br />
            Call us now on <strong>+61 403339424</strong> for a free consultation.
          </p>
          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Get a Free Consultation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Built for real growth
              </li>
              <li>
                <img src={Correct} alt="correct" /> Clean backend systems
              </li>
              <li>
                <img src={Correct} alt="correct" /> Ongoing scaling support
              </li>
            </ul>
            <p className="impact-note">Let us build the future together.<br /><strong>Call us now on +61 403339424.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevImpactCTA;



