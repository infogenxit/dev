import "./ZohoApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "Discovery & Business Alignment",
    desc: "We assess your workflows, goals, and challenges to design a Zoho strategy aligned with measurable outcomes.",
  },
  {
    number: "2",
    title: "Solution Architecture & Planning",
    desc: "Structured system design ensuring scalability, integration readiness, and long-term operational efficiency.",
  },
  {
    number: "3",
    title: "Implementation & Configuration",
    desc: "Precise Zoho setup, customisation, and automation built around your teams and processes.",
  },
  {
    number: "4",
    title: "Testing, Training & Adoption",
    desc: "Comprehensive system testing and guided user training to drive smooth transition and confident adoption.",
  },
  {
    number: "5",
    title: "Ongoing Optimisation & Support",
    desc: "Continuous refinement, performance monitoring, and strategic enhancements as your business evolves.",
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
              <span className="step-number">{step.number}</span>
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
