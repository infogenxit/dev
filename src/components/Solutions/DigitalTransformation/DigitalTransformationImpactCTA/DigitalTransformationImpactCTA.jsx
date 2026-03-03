import "./DigitalTransformationImpactCTA.css";
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
            Ready to Modernise with Purpose? <span>Impact</span>
          </h2>

          <p>
            If legacy systems, manual processes, or disconnected platforms are slowing your business, 
            Infogenx can help you move forward with clarity.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Primary CTA: Start Your Transformation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Secondary CTA: Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Connected solutions built to scale
              </li>
              <li>
                <img src={Correct} alt="correct" /> Technology aligned with business goals
              </li>
              <li>
                <img src={Correct} alt="correct" /> Outcomes designed for real impact
              </li>
            </ul>

            <p className="impact-note">
               Let’s modernise with purpose.
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
