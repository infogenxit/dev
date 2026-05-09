import "./ApiIntegrationImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.png";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        {/* LEFT */}
        <div className="impact-cta-left">
          <h2>
           Ready to Connect <span>What Matters?</span>
          </h2>

          <p>
            Whether you are integrating platforms, automating data flow, or eliminating system silos,
            Infogenx helps you build connected operations that scale.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Get Your FREE Consultation
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
                <img src={Correct} alt="correct" /> Enterprise-ready integration architecture
              </li>
              <li>
                <img src={Correct} alt="correct" /> Reliable connectivity you can trust
              </li>
              <li>
                <img src={Correct} alt="correct" /> Outcomes built for measurable impact
              </li>
            </ul>

            <p className="impact-note">
              Let’s turn connection into performance
              <br />
              <strong>Talk to our experts today.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevImpactCTA;
