import "./RetailApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Free Consultation",
    desc: "We look at your current setup and understand exactly what's not working.",
  },
  {
    number: "2",
    title: "Custom Solution Design",
    desc: "No one-size-fits-all approach. We design systems based on your store’s needs and budget using our Brisbane retail IT solutions.",
  },
  {
    number: "3",
    title: "Build and Integrate",
    desc: "We build and connect everything cleanly to your existing platforms and systems.",
  },
  {
    number: "4",
    title: "Launch and Ongoing Support",
    desc: "We stay on after go-live for updates, troubleshooting, and scaling as your business grows.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Process</span>
          <h2>Simple and Transparent Delivery</h2>
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


