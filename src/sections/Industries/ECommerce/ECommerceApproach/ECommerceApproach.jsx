import "./ECommerceApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Free Consultation",
    desc: "We look at your current setup and understand exactly what's not working before suggesting a plan.",
  },
  {
    number: "2",
    title: "Custom Solution Design",
    desc: "A clear plan — what we're building, which platform we're using, and what the timeline looks like.",
  },
  {
    number: "3",
    title: "Build and Integrate",
    desc: "We build your store and connect it cleanly to your payment gateways, logistics, and internal systems.",
  },
  {
    number: "4",
    title: "Quality Assurance",
    desc: "Rigorous testing of checkout flows, mobile responsiveness, and site speed before launch.",
  },
  {
    number: "5",
    title: "Launch and Ongoing Support",
    desc: "We stay on after go-live for maintenance, updates, and performance monitoring as you scale.",
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

