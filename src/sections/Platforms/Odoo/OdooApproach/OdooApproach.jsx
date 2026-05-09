import "./OdooApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: " Operational Fit Assessment",
    desc: "We assess your workflows, priorities, and system gaps to identify the right Odoo modules and rollout approach.",
  },
  {
    number: "2",
    title: "Solution Design and Configuration",
    desc: "We configure Odoo around your operations, reporting needs, and business controls for a stronger fit from day one.",
  },
  {
    number: "3",
    title: "Implementation and Integration",
    desc: "We deploy Odoo, connect key systems, and streamline workflows to improve efficiency across the business.",
  },
  {
    number: "4",
    title: "Automation and Control",
    desc: "We build structured processes, stronger visibility, and better operational control through tailored automation.",
  },
  {
    number: "5",
    title: "Optimisation and Ongoing Support",
    desc: "We refine performance, support adoption, and help your Odoo environment deliver long-term value as you grow.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Smarter Path to Odoo Success</h2>
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
