import "./HealthcareImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Get a Free Consultation
          </h2>
          <p>
            If something in your current setup is slowing your team down or keeping you up at night from a compliance standpoint, let's talk it through. No sales pitch — just a straightforward conversation about what’s happening and what could actually fix it with the right Brisbane healthcare IT solutions from Infogenx.
            <br /><br />
            Call us now on <strong>+61 403339424</strong> and we'll get you a free project estimate.
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
                <img src={Correct} alt="correct" /> Compliant with Australian regulations
              </li>
              <li>
                <img src={Correct} alt="correct" /> Custom built for your specific practice
              </li>
              <li>
                <img src={Correct} alt="correct" /> Seamless integration with existing systems
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



