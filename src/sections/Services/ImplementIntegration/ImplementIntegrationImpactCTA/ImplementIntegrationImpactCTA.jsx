import "./ImplementIntegrationImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.png";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        {/* LEFT */}
        <div className="impact-cta-left">
          <h2>Ready to Deploy with Confidence?</h2>

          <p>
            Whether you're deploying Microsoft, Zoho, or Odoo, Infogenx ensures
            a smooth, scalable integration and successful go-live for your
            business.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Implementation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" />
                Enterprise-Ready Solutions
              </li>
              <li>
                <img src={Correct} alt="correct" /> Cutting-Edge Technology
              </li>
              <li>
                <img src={Correct} alt="correct" /> Outcomes You Can Measure
              </li>
            </ul>

            <p className="impact-note">
              Let’s build the future insights.
              <br />
              <strong>Contact us today.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevImpactCTA;
