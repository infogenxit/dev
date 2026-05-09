import "./MicrosoftApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Discovery",
    desc: "We start by understanding your business and current systems to ensure we design the right solution.",
  },
  {
    number: "2",
    title: "Solution Design",
    desc: "We create a clear plan that fits your workflows, avoiding unnecessary features or complexity.",
  },
  {
    number: "3",
    title: "Build & Configure",
    desc: "Our team builds and configures your Microsoft environment properly from the ground up.",
  },
  {
    number: "4",
    title: "Integrate & Migrate",
    desc: "We connect your systems and migrate your data carefully, ensuring data integrity throughout.",
  },
  {
    number: "5",
    title: "Train & Support",
    desc: "We train your team and stay on to provide ongoing support as your business evolves.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Process</span>
          <h2>A Proven Approach to Microsoft Solutions</h2>
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

