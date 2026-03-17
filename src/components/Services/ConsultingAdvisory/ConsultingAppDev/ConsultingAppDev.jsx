import "./ConsultingAppDev.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "In-Depth Digital Transformation Analysis",
    desc: "We analyze your current systems, helping you identify growth opportunities through digital transformation.",
  },
  {
    number: "2",
    title: "Tailored Platform Selection & Strategy",
    desc: "We align your business needs with the best platform solutions like Microsoft, Zoho, or Odoo.",
  },
  {
    number: "3",
    title: "Roadmap Creation & Execution",
    desc: "We create a clear, actionable roadmap that guides your platform implementation and optimizes long-term results.",
  },
  {
    number: "4",
    title: "Ongoing Monitoring & Optimization",
    desc: "We ensure continuous optimization to keep your systems aligned with business growth.",
  },
  {
    number: "5",
    title: "Post-Implementation Support & Training",
    desc: "We offer support and training to empower your team for long-term success.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>Our Approach to Deliver</h2>
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
