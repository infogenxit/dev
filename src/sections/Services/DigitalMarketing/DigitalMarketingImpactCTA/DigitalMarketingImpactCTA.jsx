import "./DigitalMarketingImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.png";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        {/* LEFT */}
        <div className="impact-cta-left">
          <h2>Ready to Accelerate Your Growth?</h2>

          <p>
            Let us help you build a powerful online presence and turn your
            audience into loyal customers.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Digital Marketing
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
                <img src={Correct} alt="correct" /> Increased Online Visibility
              </li>
              <li>
                <img src={Correct} alt="correct" /> High-Quality Lead Generation
              </li>
              <li>
                <img src={Correct} alt="correct" /> Sustainable Business Growth
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
