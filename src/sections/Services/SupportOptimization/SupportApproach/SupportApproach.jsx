import "./SupportApproach.css";
import AppcornerAssent from "../../../../assets/images/corner-accent.png";
const steps = [
  {
    number: "1",
    title: "Health Checks and Performance Audits",
    desc: "We conduct thorough checks to identify potential issues and ensure your platform runs at its best.",
  },
  {
    number: "2",
    title: "Targeted Enhancements and Automation Upgrades",
    desc: "Implement tailored improvements and automation features to enhance performance and reduce manual work.",
  },
  {
    number: "3",
    title: "Fast-Track Issue Resolution and Knowledge Transfer",
    desc: "We resolve issues swiftly and empower your team with the knowledge to handle future challenges.",
  },
  {
    number: "4",
    title: "Scalable Optimisation for Long-Term Growth",
    desc: "We ensure your platform is scalable and continuously improve to meet your evolving business needs.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="automation-corner-accent"
      />
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Smarter Approach to Platform Support</h2>
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
                Eliminate manual processes and speed up operational cycle times,
                boosting overall efficiency.
              </p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Boost Accuracy</h3>
              <p>
                Minimise human errors and improve consistency with automated
                processes and proactive optimisation.
              </p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Enhance Productivity</h3>
              <p>
                Empower teams to focus on high-value tasks by automating
                repetitive workflows.
              </p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Drive Growth</h3>
              <p>
                Free up resources to redirect them toward key business growth
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevApproach;
