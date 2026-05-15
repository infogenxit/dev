import "./MicrosoftApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Understand & Discover",
    desc: "We start by understanding your business and current systems to ensure the right foundation.",
  },
  {
    number: "2",
    title: "Workflow Design",
    desc: "We design a solution that fits your specific workflows, avoiding unnecessary complexity.",
  },
  {
    number: "3",
    title: "Build & Configuration",
    desc: "Our team builds and configures your Microsoft environment properly from the ground up.",
  },
  {
    number: "4",
    title: "Integrate & Migrate",
    desc: "We connect your systems and migrate your data carefully, ensuring total data integrity.",
  },
  {
    number: "5",
    title: "Team Training",
    desc: "We train your team so they actually use the system to its full potential.",
  },
  {
    number: "6",
    title: "Evolving Support",
    desc: "We stay on to support and improve your system over time as your business grows.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Process</span>
          <h2>A Proven Approach to Microsoft Implementation and Optimisation</h2>
        </div>
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
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="app-corner-accent"
      />
    </section>
  );
};
export default AppDevApproach;


