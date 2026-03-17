import "./ImplementIntegrationApproach.css";
import cornerAssent from "../../../../assets/images/corner-accent.png";
const steps = [
  {
    number: "1",
    title: "Phased Rollout with Minimal Disruption",
    desc: "We plan a phased approach that ensures minimal operational disruption while delivering the full solution.",
  },
  {
    number: "2",
    title: "Custom Configuration and Secure API Development",
    desc: "Tailor your systems to your business needs with custom configurations and API integrations that connect your platforms.",
  },
  {
    number: "3",
    title: "Testing, Training, and Successful Handover",
    desc: "We ensure all systems are rigorously tested, user-trained, and delivered with full operational handover to your teams.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <img
        src={cornerAssent}
        alt="corner accent"
        className="automation-corner-accent"
      />
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Smarter Path to Successful Implementation</h2>
        </div>

        {/* Cards */}
        <div className="approach-grid">
          {steps.map((step, index) => (
            <div className="approach-card" key={index}>
              {/* <span className="step-number">{step.number}</span> */}
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <hr
          style={{
            margin: "50px 0px",
            border: "1px solid  rgba(248, 138, 60, 0.792)",
          }}
        />
        <div className="business-outcome">
          <h1>Business Outcomes</h1>
          <div className="outcome-container">
            <div className="business-outcome-item">
              <h3>Increase Efficiency</h3>
              <p>
                Eliminate manual tasks and accelerate process cycle times,
                enhancing business agility and operational speed.
              </p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Boost Accuracy</h3>
              <p>
                Reduce human errors through automation, ensuring consistency and
                reliable data-driven decisions across your operations.
              </p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Enhance Productivity</h3>
              <p>
                Free up talent by automating routine processes, allowing your
                team to focus on high-value strategic activities.
              </p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Drive Growth</h3>
              <p>
                Reallocate resources effectively toward critical initiatives to
                enable your business to scale faster and achieve long-term
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevApproach;
