import "./DigitalTransformationApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";

const steps = [
  {
    number: "1",
    title: "Legacy Audit",
    desc: "We analyze your current systems and processes to identify bottlenecks and transformation opportunities.",
  },
  {
    number: "2",
    title: "Strategy & Roadmap",
    desc: "We build a clear, phased roadmap for modernization that ensures business continuity and high ROI.",
  },
  {
    number: "3",
    title: "Build and Clean Integration",
    desc: "We build and connect modern solutions cleanly to your existing business environment without disruption.",
  },
  {
    number: "4",
    title: "Modern Application Design",
    desc: "We design for scalability and performance, ensuring your new systems are built to grow with your business.",
  },
  {
    number: "5",
    title: "Managed Support",
    desc: "Once live, we stay involved with monitoring and support to ensure your digital advantage remains stable.",
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
