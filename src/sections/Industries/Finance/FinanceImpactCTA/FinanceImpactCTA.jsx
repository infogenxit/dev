import "./FinanceImpactCTA.css";
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
            If your current systems are slowing things down, it’s worth taking a closer look. Get in touch with Infogenx on <strong>+61 403339424</strong> for a straightforward discussion about what’s working and what can be improved.
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
                <img src={Correct} alt="correct" /> Eliminate manual data entry gaps
              </li>
              <li>
                <img src={Correct} alt="correct" /> ASIC & AML/CTF compliance-ready
              </li>
              <li>
                <img src={Correct} alt="correct" /> Secure, unified financial visibility
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



