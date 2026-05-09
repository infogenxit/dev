import "./OdooImpactCTA.css";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Begin Your Odoo Adventure With An <span>Ideal Approach</span>
          </h2>
          <p>
            Odoo has the potential to be a highly powerful platform- but only when done correctly. When you are looking into getting Odoo in Brisbane, we will provide you with the answer on whether Odoo is the appropriate solution or not.
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
                <img src={Correct} alt="correct" /> Single platform for all operations
              </li>
              <li>
                <img src={Correct} alt="correct" /> Flexible and scalable framework
              </li>
              <li>
                <img src={Correct} alt="correct" /> Built around your actual workflows
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

