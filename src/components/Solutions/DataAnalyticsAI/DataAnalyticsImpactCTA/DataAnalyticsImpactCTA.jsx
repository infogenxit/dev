import "./DataAnalyticsImpactCTA.css";
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
           Ready to Turn Data <span>Into Decisions?</span>
          </h2>

          <p>
            Whether you are improving visibility, connecting fragmented data, or applying AI,
            Infogenx helps you build intelligence that drives action.
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

        {/* RIGHT */}
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Decision-ready insights at scale
              </li>
              <li>
                <img src={Correct} alt="correct" /> Trusted data foundations for growth
              </li>
              <li>
                <img src={Correct} alt="correct" /> Outcomes built for measurable value
              </li>
            </ul>

            <p className="impact-note">
              Let’s turn insight into impact.
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
