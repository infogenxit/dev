import "./ModernApplicationImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
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
            <p className="impact-note">Let us build the future together.<br /><strong>Call us now on +61 403339424.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevImpactCTA;



