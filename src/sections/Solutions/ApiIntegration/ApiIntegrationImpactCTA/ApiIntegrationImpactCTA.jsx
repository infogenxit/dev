import "./ApiIntegrationImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Not Sure If You Need API Integration in Brisbane?
          </h2>
          <p>
            We’ll review your current setup and show you where integration can improve performance. Whether you are integrating platforms, automating data flow, or eliminating system silos, Infogenx helps you build connected operations that scale.
            <br /><br />
            Call us now on <strong>+61 403339424</strong> for a free consultation.
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

