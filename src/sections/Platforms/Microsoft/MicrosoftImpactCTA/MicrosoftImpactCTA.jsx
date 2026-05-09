import "./MicrosoftImpactCTA.css";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Get a Free <span>Strategy Session</span>
          </h2>
          <p>
            Ready to get more from Microsoft? We take the time to understand your business first, then build systems that genuinely support it.
          </p>
          <div className="impact-buttons">
            <button className="primary-btn">Book a free strategy session</button>
            <button className="secondary-btn">
              +61 403339424 <span>↗</span>
            </button>
          </div>
        </div>
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Dynamics 365 & Power BI
              </li>
              <li>
                <img src={Correct} alt="correct" /> Azure, Power Apps & Automate
              </li>
              <li>
                <img src={Correct} alt="correct" /> Expert setup & data migration
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

