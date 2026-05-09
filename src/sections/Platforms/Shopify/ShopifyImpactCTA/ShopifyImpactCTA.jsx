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
            Start with the <span>Right Setup</span>
          </h2>
          <p>
            If you’re looking at the Shopify transition, the key is getting the structure right from the beginning. Fixing a poorly set-up store later is always more costly.
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
            <p className="impact-note">
              Let’s build the future together.
              <br />
              <strong>Call us now on +61 403339424.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevImpactCTA;

