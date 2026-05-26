import "./IntelligentAutomationApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
import SolutionPath from "../../../../components/SolutionPath/SolutionPath";

const steps = [
  {
    number: "1",
    title: "Process Discovery and Mapping",
    desc: "Identify high-impact automation opportunities across workflows, systems, and teams.",
  },
  {
    number: "2",
    title: "AI Workflow Design and Deployment",
    desc: "Build intelligent workflows with governance, compliance, and operational fit built in.",
  },
  {
    number: "3",
    title: "Continuous Optimisation and Monitoring",
    desc: "Refine automation performance over time to sustain efficiency and deliver measurable gains.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Practical Approach to Intelligent Automation</h2>
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


