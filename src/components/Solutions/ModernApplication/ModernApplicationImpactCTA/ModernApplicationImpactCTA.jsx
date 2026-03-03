import "./ModernApplicationImpactCTA.css";
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
            Build Applications That <span>Drive Real Impact</span>
          </h2>

          <p>
            Whether you are creating new digital products, modernising legacy systems, or improving user experience, 
            Infogenx helps you build with clarity and confidence.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Application Engineering
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
                <img src={Correct} alt="correct" /> Secure applications built to scale
              </li>
              <li>
                <img src={Correct} alt="correct" /> Technology aligned with business goals
              </li>
              <li>
                <img src={Correct} alt="correct" /> Performance you can measure
              </li>
            </ul>

            <p className="impact-note">
              Let’s engineer what’s next.
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
