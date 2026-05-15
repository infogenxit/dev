import "./ECommerceApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Discovery Conversation",
    desc: "We start with an honest conversation about your business goals and platform needs before giving you a realistic quote.",
  },
  {
    number: "2",
    title: "Custom Strategy & Design",
    desc: "No $29 themes. We design for conversions first, ensuring your store looks like your brand and actually sells.",
  },
  {
    number: "3",
    title: "Build and Clean Integration",
    desc: "We build and connect everything—payments, logistics, and SEO—cleanly to your existing business environment.",
  },
  {
    number: "4",
    title: "Mobile & Speed Optimisation",
    desc: "Since 70% of shopping is mobile, we ensure your store works flawlessly on every screen with baked-in technical SEO.",
  },
  {
    number: "5",
    title: "Launch and Ongoing Support",
    desc: "Launch day is just the beginning. We don't disappear; we stay involved with maintenance and performance monitoring.",
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


