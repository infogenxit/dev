import "./RetailImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Get a Free <span>Consultation</span> Today
          </h2>
          <p>
            If your retail technology is costing you more than it's saving you, let's fix that. Get a straight, no-pressure assessment of what your retail IT solutions actually need.
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
                <img src={Correct} alt="correct" /> Connect online and in-store smoothly
              </li>
              <li>
                <img src={Correct} alt="correct" /> Eliminate manual inventory guesswork
              </li>
              <li>
                <img src={Correct} alt="correct" /> Secure your customer payment data
              </li>
            </ul>
            <p className="impact-note">
              Let’s build the future together.
              <br />
              <strong>Call us now on +61 403339424.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevImpactCTA;

