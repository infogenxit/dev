import "./ZohoApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Discovery",
    desc: "We learn how you work and where the friction is.",
  },
  {
    number: "2",
    title: "Strategy",
    desc: "We map your processes to Zoho's capabilities.",
  },
  {
    number: "3",
    title: "Implementation",
    desc: "We configure, develop and integrate.",
  },
  {
    number: "4",
    title: "Training & Support",
    desc: "We ensure your team knows how to use it.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>How We Work: Our Process</h2>
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

