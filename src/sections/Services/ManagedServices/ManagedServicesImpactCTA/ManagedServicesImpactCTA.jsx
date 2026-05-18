import "./ManagedServicesImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";

const AppDevImpactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>Ready to Stop Wasting Time?</h2>
          <p>
            Let’s identify where your business is losing time — and automate it properly. Contact Infogenx team today for workflow automation services in Brisbane. No generic bots, no junior handoffs, no fluff. Just clear, measurable operational efficiency.
          </p>
          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Automating Now
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
                <img src={Correct} alt="correct" /> Audit-First Process Mapping
              </li>
              <li>
                <img src={Correct} alt="correct" /> Vendor-Agnostic RPA Tools
              </li>
              <li>
                <img src={Correct} alt="correct" /> Built to Last & Scale
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
