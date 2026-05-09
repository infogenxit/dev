import "./DigitalMarketingApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
const steps = [
  {
    number: "1",
    title: "Data-Driven Strategy Planning",
    desc: "We analyze your market, audience, and competitors to build a results-focused marketing strategy.",
  },
  {
    number: "2",
    title: "Targeted Campaign Execution",
    desc: "Our campaigns are tailored to reach the right audience at the right time for maximum impact.",
  },
  {
    number: "3",
    title: "Continuous Optimization",
    desc: "We monitor and optimize campaigns regularly to improve performance and reduce costs.",
  },
  {
    number: "4",
    title: "Performance Tracking & Reporting",
    desc: "Transparent reporting with actionable insights helps you track ROI and business growth.",
  },
  {
    number: "5",
    title: "Dedicated Marketing Experts",
    desc: "Our experienced team works closely with you to refine strategies and achieve your business goals.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>Our Marketing Approach</h2>
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
