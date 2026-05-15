import "./ZohoImpactCTA.css";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Want to Get the Most Out of Zoho?
          </h2>
          <p>
            If you've invested in Zoho, you might as well get it right. As your Brisbane Zoho consultant, we understand your business - then we build the system.
            <br /><br />
            Call us on <strong>+61 403339424</strong> for a free consultation. No pressure. No sales talk. A simple discussion of options.
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
            <h3 style={{ color: "#ffffff", marginBottom: "20px" }}>Ready to Make Zoho Actually Work for You?</h3>
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Certified Zoho Partnerships
              </li>
              <li>
                <img src={Correct} alt="correct" /> 30+ Years Experience
              </li>
              <li>
                <img src={Correct} alt="correct" /> Real-World Outcomes
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



