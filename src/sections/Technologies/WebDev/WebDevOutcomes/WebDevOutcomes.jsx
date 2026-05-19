import "./WebDevOutcomes.css";
import outcomeImage from "../../../../assets/images/tech-outcomes.webp";

const WebDevOutcomes = () => {
  return (
    <section className="tech-outcomes-section">
      <div className="tech-outcomes-container">
        <div className="tech-outcomes-image">
          <img src={outcomeImage} alt="Why Choose Infogenx for Web Design" />
        </div>
        <div className="tech-outcomes-content">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Why Do Modern Businesses Partner With Our Web Design Company in Brisbane?</h2>
          <div className="outcome-item">
            <h4>Technology and Integration Depth</h4>
            <p>
              Most web design agencies in Brisbane are design studios first. They're great at making things look good. But when you need your website to talk to your CRM, feed into a reporting dashboard, or plug into an automation workflow — they hit a wall pretty fast.
            </p>
          </div>
          <div className="outcome-item">
            <h4>End-to-End Capability</h4>
            <p>
              Infogenx is a technology company. Data engineering, cloud infrastructure, AI, automation — we do all of it. Which means when your website needs to connect to the rest of your business systems, we already know how to do that.
            </p>
          </div>
          <div className="outcome-item">
            <h4>Long-Term Partnerships & Support</h4>
            <p>
              We stay involved after launch. Updates, improvements, and new integrations as your business changes.
            </p>
          </div>
          <div className="outcome-item">
            <h4>100% Ownership & No Lock-in</h4>
            <p>
              You own everything we build for you, with zero long-term vendor lock-in or licensing issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevOutcomes;


