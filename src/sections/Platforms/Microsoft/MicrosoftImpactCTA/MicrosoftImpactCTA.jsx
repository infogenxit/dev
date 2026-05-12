import "./MicrosoftImpactCTA.css";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Ready to Get More From Microsoft?
          </h2>
          <p>
            If you’re investing in Microsoft Dynamics 365, Power BI, or broader Microsoft solutions, it’s worth doing it properly. At Infogenx, as your Microsoft partner in Brisbane, we take the time to understand your business first, then build systems that genuinely support it.
            <br /><br />
            Book a free strategy session today by calling <strong>+61 403339424</strong>. No pressure. Just a straightforward conversation about what will work for you.
          </p>
          <div className="impact-buttons">
            <button className="primary-btn">Book Your Strategy Session</button>
            <button className="secondary-btn">
              Talk to an Expert <span>↗</span>
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

