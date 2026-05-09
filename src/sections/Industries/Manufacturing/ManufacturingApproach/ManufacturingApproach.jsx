import "./ManufacturingApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Free Consultation",
    desc: "We get into how your operation actually runs before we suggest anything.",
  },
  {
    number: "2",
    title: "Solution Design",
    desc: "A clear plan — what we're building, what we're connecting, and what the timeline looks like.",
  },
  {
    number: "3",
    title: "Build and Integrate",
    desc: "We connect to your existing systems. Nothing gets ripped out unless it genuinely needs to go.",
  },
  {
    number: "4",
    title: "Quality Assurance",
    desc: "Rigorous testing ensures security, performance, and reliability before the final rollout.",
  },
  {
    number: "5",
    title: "Support After Go-Live",
    desc: "We don't hand over and disappear. Ongoing support, fixes, and scaling come with every engagement.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Approach</span>
          <h2>How We Deliver Practical Systems</h2>
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

