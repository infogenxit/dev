import "./ManufacturingImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Get a Free Consultation With Infogenx
          </h2>
          <p>
            If your systems are costing more than they’re saving, let’s fix that. We’ll review your setup and show you where better Brisbane Manufacturing IT Solutions can improve efficiency—no pressure, just practical advice.
            <br /><br />
            Call us now on <strong>+61 403339424</strong> for a straight assessment.
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
                <img src={Correct} alt="correct" /> Real-time production visibility
              </li>
              <li>
                <img src={Correct} alt="correct" /> Automated reporting & RPA
              </li>
              <li>
                <img src={Correct} alt="correct" /> Enterprise mobility for floor staff
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


