import "./OdooApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
import SolutionPath from "../../../../components/SolutionPath/SolutionPath";
const steps = [
  {
    number: "1",
    title: "Understand Your Business First",
    desc: "We begin by knowing how your business really works, not necessarily what you have in a process document.",
  },
  {
    number: "2",
    title: "Business-Driven Development",
    desc: "We treat ERP projects as business decisions rather than IT initiatives and develop the system based on that fact.",
  },
  {
    number: "3",
    title: "Clean Installation",
    desc: "We maintain the installation simple and clean—no extravagance, just a system that actually works in practice.",
  },
  {
    number: "4",
    title: "Data and Workflow Automation",
    desc: "We combine automation, integration, and data into one working system tailored to your operations.",
  },
  {
    number: "5",
    title: "Post-Go-Live Optimisation",
    desc: "We remain involved post-go-live, as that is when improvements occur most and your business scales.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">A Business-First Approach</span>
          <h2>A Smarter Path to Odoo Success in Brisbane</h2>
        </div>
        <SolutionPath steps={steps} />
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


