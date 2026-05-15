import "./TransportApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Free Consultation",
    desc: "First, we understand where things are breaking down — delays, gaps, or confusion — before suggesting anything.",
  },
  {
    number: "2",
    title: "Custom Solution Design",
    desc: "We map out a clear plan. What needs to be fixed, how we’ll do it, how long it’ll take — all agreed before we start.",
  },
  {
    number: "3",
    title: "Build and Integrate",
    desc: "We connect everything to your current systems. We don’t replace things unless it’s actually necessary.",
  },
  {
    number: "4",
    title: "Go-Live and Ongoing Support",
    desc: "Once it’s live, we don’t disappear. We stay involved — fixing issues, improving things, and helping you scale as your operations grow with our Brisbane logistics IT solutions.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Approach</span>
          <h2>How We Deliver Logistics Excellence</h2>
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


