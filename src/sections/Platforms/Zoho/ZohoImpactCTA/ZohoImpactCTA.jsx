import "./ZohoImpactCTA.css";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Ready to Make Zoho Actually <span>Work for You?</span>
          </h2>
          <p>
            Stop struggling with disjointed systems. Let's build a platform that helps you grow. Book a consultation with a Zoho expert in Brisbane today.
          </p>
          <div className="impact-buttons">
            <button className="primary-btn">Get Your FREE Consultation</button>
            <button className="secondary-btn">
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Enterprise-ready solutions
              </li>
              <li>
                <img src={Correct} alt="correct" /> Technology you can trust
              </li>
              <li>
                <img src={Correct} alt="correct" /> Outcomes you can measure
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

