import "./DataAnalyticsApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "Data Discovery & Prioritisation",
    desc: "We assess your data landscape, uncover gaps, and identify the highest-value opportunities for insight and action.",
  },
  {
    number: "2",
    title: "Analytics Strategy & Design",
    desc: "We shape dashboards, reporting models, and AI use cases around the decisions your business needs to make.",
  },
  {
    number: "3",
    title: "Data Integration & Preparation",
    desc: "We connect systems, clean data, and create a reliable foundation for trusted reporting and predictive intelligence.",
  },
  {
    number: "4",
    title: "AI Enablement & Insight Delivery",
    desc: "We apply AI and analytics to surface patterns, improve forecasting, and turn data into practical business guidance.",
  },
  {
    number: "5",
    title: "Optimisation & Ongoing Value",
    desc: "We refine models, improve performance, and keep your analytics environment aligned with changing business priorities.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>From Data to Decision Intelligence</h2>
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
