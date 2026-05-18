import "./DataAnalyticsImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";

const AppDevImpactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>Ready to stop guessing?</h2>
          <p>
            If your data is sitting there doing nothing while you're making big calls on gut feel, let's fix that. We're Infogenx — a data analytics agency in Brisbane that helps businesses turn scattered numbers into decisions that actually make sense. No generic dashboards, no junior handoffs, no fluff. Just a straight conversation about your data and whether we can help.
          </p>
          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Unlock Analytics & AI
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
                <img src={Correct} alt="correct" /> 30+ Years Combined IT Experience
              </li>
              <li>
                <img src={Correct} alt="correct" /> 100% Bespoke Data Audits & Dashboards
              </li>
              <li>
                <img src={Correct} alt="correct" /> Genuinely Local (Brisbane, Queensland)
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
