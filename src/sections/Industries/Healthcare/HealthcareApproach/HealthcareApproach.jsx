import "./HealthcareApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Understand Your Operations First",
    desc: "We figure out what your operation actually needs first, then build or configure around that.",
  },
  {
    number: "2",
    title: "Compliance By Design",
    desc: "Every system we build is compliant with HIPAA and Australian healthcare regulations—baked in from the start.",
  },
  {
    number: "3",
    title: "Comprehensive Cybersecurity",
    desc: "Our cybersecurity covers the full picture, from who can access what, to how data moves between systems.",
  },
  {
    number: "4",
    title: "Interoperability Focus",
    desc: "Your new system has to work seamlessly with your existing healthcare tools. We make sure it does.",
  },
  {
    number: "5",
    title: "Long-Term Efficiency",
    desc: "We design for the long run — efficient infrastructure that doesn't quietly inflate your costs year over year.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Approach</span>
          <h2>A Different Approach for Better Results</h2>
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


