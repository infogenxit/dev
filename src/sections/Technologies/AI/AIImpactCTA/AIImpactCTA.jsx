import "./AIImpactCTA.css";
import Correct from "../../../../assets/images/correct.webp";
const WebDevImpactCTA = () => {
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Transform Your Ideas into <span>Impact</span>
          </h2>
          <p>
            Whether you’re building a new application, modernizing legacy
            systems, or scaling digital operations, we’re here to help.
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
            <p className="impact-note">Let us build the future together.<br /><strong>Call us now on +61 403339424.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WebDevImpactCTA;



