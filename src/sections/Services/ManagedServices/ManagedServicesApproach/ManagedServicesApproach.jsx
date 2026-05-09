import "./ManagedServicesApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "24/7 Proactive Monitoring",
    desc: "We provide round-the-clock monitoring of your platforms to detect and fix issues before they impact operations.",
  },
  {
    number: "2",
    title: "Automated Incident Response",
    desc: "Our systems are designed to automatically respond to incidents, ensuring immediate action and minimal downtime.",
  },
  {
    number: "3",
    title: "Regular Performance Optimisation",
    desc: "We fine-tune your systems regularly to keep them performing at their best, ensuring efficiency and speed.",
  },
  {
    number: "4",
    title: "Transparent Reporting and Analytics",
    desc: "We provide clear, actionable insights through regular performance reports, keeping you informed at every step.",
  },
  {
    number: "5",
    title: "Dedicated Support and Local Expertise",
    desc: "Our Australian-based team is always ready to offer expert advice and hands-on support tailored to your needs.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>Our Development Approach</h2>
        </div>

        {/* Cards */}
        <div className="approach-grid">
          {steps.map((step, index) => (
            <div className="approach-card" key={index}>
              {/* <span className="step-number">{step.number}</span> */}
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Accent */}
      {/* <div className="approach-accent" /> */}
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="app-corner-accent"
      />
    </section>
  );
};

export default AppDevApproach;
