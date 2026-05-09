import "./MicrosoftApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "Assess the Opportunity",
    desc: "We evaluate your Microsoft landscape to uncover the highest-value opportunities for automation, analytics, and AI.",
  },
  {
    number: "2",
    title: "Design for Fit and Scale",
    desc: "We shape solutions around your workflows, security needs, and long-term business priorities.",
  },
  {
    number: "3",
    title: "Implement with Precision",
    desc: "We deploy Microsoft solutions that improve execution, visibility, and operational efficiency.",
  },
  {
    number: "4",
    title: "Govern with Confidence",
    desc: "We apply strong security, compliance, and control so your Microsoft environment stays reliable and scalable.",
  },
  {
    number: "5",
    title: "Optimise for Ongoing Value",
    desc: "We improve adoption, refine performance, and help your Microsoft investment deliver more over time.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>From Microsoft Capability to Business Impact</h2>
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
