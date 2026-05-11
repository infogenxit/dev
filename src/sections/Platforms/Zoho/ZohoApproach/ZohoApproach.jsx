import "./ZohoApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    desc: "We get clear on your processes, tools and objectives before we do anything.",
  },
  {
    number: "2",
    title: "Solution Design",
    desc: "We build the right system for your business - not a one-size-fits-all.",
  },
  {
    number: "3",
    title: "Build & Configuration",
    desc: "We configure, test and build your system to ensure it's ready to go.",
  },
  {
    number: "4",
    title: "Data Migration",
    desc: "We transfer your data safely and securely.",
  },
  {
    number: "5",
    title: "Training",
    desc: "We train your team to use the system, and not just access the system.",
  },
  {
    number: "6",
    title: "Ongoing Support",
    desc: "We continue to help you improve, adapt and optimise.",
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

