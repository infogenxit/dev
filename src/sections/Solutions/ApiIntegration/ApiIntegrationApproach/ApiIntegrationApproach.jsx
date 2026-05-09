import "./ApiIntegrationApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "Integration Discovery",
    desc: "We assess your systems, workflows, and data gaps to identify where integration will create the most value.",
  },
  {
    number: "2",
    title: "API Strategy & Design",
    desc: "We design secure, scalable API frameworks that support reliable connectivity and long-term flexibility.",
  },
  {
    number: "3",
    title: "System Connection & Orchestration",
    desc: "We connect platforms, automate data movement, and align workflows for smoother cross-system execution.",
  },
  {
    number: "4",
    title: "Governance & Reliability",
    desc: "We build integrations with visibility, control, and resilience so data flows securely and consistently.",
  },
  {
    number: "5",
    title: "Optimisation & Scale",
    desc: "We continuously refine performance and reliability to support growth, complexity, and changing business needs.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Smarter Path to Connected Systems</h2>
        </div>

        {/* Cards */}
        <div className="approach-grid">
          {steps.map((step, index) => (
            <div className="approach-card" key={index}>
              <span className="step-number">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Accent */}
      {/* <div className="approach-accent" /> */}
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="app-corner-accent"
      />
    </section>
  );
};

export default AppDevApproach;
