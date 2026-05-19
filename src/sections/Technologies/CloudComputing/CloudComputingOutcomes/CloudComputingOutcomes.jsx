import "./CloudComputingOutcomes.css";
import outcomeImage from "../../../../assets/images/tech-outcomes.webp";

const WebDevOutcomes = () => {
  return (
    <section className="tech-outcomes-section">
      <div className="tech-outcomes-container">
        <div className="tech-outcomes-image">
          <img src={outcomeImage} alt="Why Choose Infogenx on Cloud" />
        </div>
        <div className="tech-outcomes-content">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Why Brisbane Businesses Work With Infogenx on Cloud?</h2>
          <div className="outcome-item">
            <h4>We Assess Before We Recommend</h4>
            <p>
              We won't tell you to move everything to the cloud if it doesn't make sense. Some workloads belong there. Some don't yet. We'll be honest about both.
            </p>
          </div>
          <div className="outcome-item">
            <h4>AWS, Azure, and Google Cloud — All Three</h4>
            <p>
              We're not locked into one provider, which means we recommend what's actually right for your workload, not whatever partnership benefits us most.
            </p>
          </div>
          <div className="outcome-item">
            <h4>Migration Without the Horror Stories</h4>
            <p>
              Brisbane cloud migration projects fail when they're rushed or poorly scoped. We plan it properly — sequencing workloads, removing dependencies, testing before cutover, and keeping your team informed at every step.
            </p>
          </div>
          <div className="outcome-item">
            <h4>Security and Compliance Built In</h4>
            <p>
              Not bolted on afterward. We architect cloud environments with security controls, access governance, and compliance requirements considered from the start.
            </p>
          </div>
          <div className="outcome-item">
            <h4>Local Team & Senior Involvement Throughout</h4>
            <p>
              You get the same senior people from scoping to delivery. Infogenx leadership stays directly involved — no handoffs to a junior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevOutcomes;


