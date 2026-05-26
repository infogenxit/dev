import "./ImplementIntegrationApproach.css";
import cornerAssent from "../../../../assets/images/corner-accent.webp";
import SolutionPath from "../../../../components/SolutionPath/SolutionPath";

const steps = [
  {
    number: "1",
    title: "Phased Rollout with Minimal Disruption",
    desc: "We plan a phased approach that ensures minimal operational disruption while delivering the full solution.",
  },
  {
    number: "2",
    title: "Custom Configuration and Secure API Development",
    desc: "Tailor your systems to your business needs with custom configurations and API integrations that connect your platforms.",
  },
  {
    number: "3",
    title: "Testing, Training, and Successful Handover",
    desc: "We ensure all systems are rigorously tested, user-trained, and delivered with full operational handover to your teams.",
  },
];
const outcomeSteps = [
  { number: "1", title: "Increase Efficiency", desc: "Eliminate manual tasks and accelerate process cycle times, enhancing business agility and operational speed." },
  { number: "2", title: "Boost Accuracy", desc: "Reduce human errors through automation, ensuring consistency and reliable data-driven decisions across your operations." },
  { number: "3", title: "Enhance Productivity", desc: "Free up talent by automating routine processes, allowing your team to focus on high-value strategic activities." },
  { number: "4", title: "Drive Growth", desc: "Reallocate resources effectively toward critical initiatives to enable your business to scale faster and achieve long-term growth." },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <img
        src={cornerAssent}
        alt="corner accent"
        className="automation-corner-accent"
      />
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Smarter Path to Successful Implementation</h2>
        </div>
        <SolutionPath steps={steps} />
        <hr
          style={{
            margin: "50px 0px",
            border: "1px solid  rgba(248, 138, 60, 0.792)",
          }}
        />
        <div className="business-outcome">
          <h1>Business Outcomes</h1>
          <SolutionPath steps={outcomeSteps} />
        </div>
      </div>
    </section>
  );
};
export default AppDevApproach;


