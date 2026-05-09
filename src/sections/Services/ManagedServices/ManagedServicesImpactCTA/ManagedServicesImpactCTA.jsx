import "./ManagedServicesImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.png";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        {/* LEFT */}
        <div className="impact-cta-left">
          <h2>Ready for Seamless Support?</h2>

          <p>
            Let us handle the complexities of your IT systems so you can focus
            on growing your business.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Managed Services
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
                <img src={Correct} alt="correct" /> 24/7 System Vigilance
              </li>
              <li>
                <img src={Correct} alt="correct" /> Instant Issue Resolution
              </li>
              <li>
                <img src={Correct} alt="correct" /> Effortless Scalability
              </li>
            </ul>

            <p className="impact-note">
              Let’s build the future together.
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
