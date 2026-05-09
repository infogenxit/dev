import "./ModernApplicationApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "Application Strategy and Planning",
    desc: "Define the right application approach based on business goals, user needs, and system requirements.",
  },
  {
    number: "2",
    title: "Secure Design and Development",
    desc: "Build modern applications with performance, usability, governance, and scalability built in.",
  },
  {
    number: "3",
    title: "Continuous Improvement and Optimisation",
    desc: "Refine applications over time to improve adoption, functionality, and operational value.",
  },
  {
    number: "4",
    title: "Integration and Deployment",
    desc: "Connect applications with existing systems and launch smoothly with minimal disruption to operations.",
  },
  {
    number: "5",
    title: "Performance Monitoring and Support",
    desc: "Track application performance, resolve issues quickly, and keep systems running reliably as business needs evolve.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>Practical Approach to Modern Application </h2>
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
